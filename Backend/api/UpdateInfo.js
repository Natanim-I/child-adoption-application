const express = require("express");
const router = express.Router();

const Adopter = require("./../models/Adopter");
const Child = require("./../models/Child");
const Employee = require("./../models/Employee");
const User = require("./../models/User");

const nodemailer = require("nodemailer");

require("dotenv").config();

const path = require("path");

router.post("/admin/update", (req, res) => {
  let { firstName, lastName, email, dateofbirth, password } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  dateofbirth = dateofbirth.trim();
  password = password.trim();

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    dateofbirth == "" ||
    password == ""
  ) {
    res.json({
      status: "Failed",
      message: "Empty input field!",
    });
  } else if (!/^[a-zA-Z ]*$/.test(firstName)) {
    res.json({
      status: "Failed",
      message: "Invalid first name!",
    });
  } else if (!/^[a-zA-Z ]*$/.test(lastName)) {
    res.json({
      status: "Failed",
      message: "Invalid last name!",
    });
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    res.json({
      status: "Failed",
      message: "Invalid email address!",
    });
  } else if (
    !/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
      dateofbirth
    )
  ) {
    res.json({
      status: "Failed",
      message: "Invalid date!",
    });
  } else if (password.length < 8) {
    res.json({
      status: "Failed",
      message: "Password is too short(min 8)!",
    });
  } else {
    Adopter.find({ email: email })
      .then((result) => {
        if (result.length) {
          res.json({
            status: "Failed",
            message: "An adopter with the specified email already exists!",
          });
        } else {
          const uniqueId = uuidv4(email);
          const saltRound = 10;
          bcrypt
            .hash(password, saltRound)
            .then((hashedPass) => {
              const newAdopter = new Adopter({
                id: uniqueId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                dateofbirth: dateofbirth,
                password: hashedPass,
                verified: false,
              });
              newAdopter
                .save()
                .then((result) => {
                  sendVerificationEmail(result, res);
                })
                .catch((err) => {
                  res.json({
                    status: "Failed",
                    message: "An error occurred while saving adopter account!",
                  });
                });
            })
            .catch((err) => {
              res.json({
                status: "Failed",
                message: "An error occurred while hashing password!",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "Failed",
          message: "An error occurred while checking for existing user!",
        });
      });
  }
});

const sendVerificationEmail = ({ _id, email }, res) => {
  const currentUrl = "http://localhost:5000/";

  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email address to complete the signup and login into your account,</p><p>This link <b>expires in 6 hours</b>.</p>
        <p>Press <a href=${
          currentUrl + "adopter/verify/" + _id + "/" + uniqueString
        }>here</a> to procced.</p>
        <p><b>Child Adoption Management System</b></p>`,
  };
  const saltRound = 10;
  bcrypt
    .hash(uniqueString, saltRound)
    .then((hashedUniqueString) => {
      const newVerification = new UserVerifaction({
        userId: _id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      });

      newVerification
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {
              res.json({
                status: "Pending",
                message: "Verification email sent!!!",
              });
            })
            .catch((error) => {
              console.log(error);
              res.json({
                status: "Failed",
                message: "Verification email failed!",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          res.json({
            status: "Failed",
            message: "Couldn,t save verification email data!",
          });
        });
    })
    .catch(() => {
      res.json({
        status: "Failed",
        message: "An error occurred while hashing email data!",
      });
    });
};

router.get("/verify/:userId/:uniqueString", (req, res) => {
  let { userId, uniqueString } = req.params;

  UserVerifaction.find()
    .then((result) => {
      if (result.length > 0) {
        const { expiresAt } = result[0];
        const hashedUniqueString = result[0].uniqueString;

        if (expiresAt < Date.now()) {
          UserVerifaction.deleteOne({ userId })
            .then(() => {
              Adopter.deleteOne({ _id: userId })
                .then(() => {
                  let message = "Link has expire. Please sign up again!";
                  res.redirect(`/user/verified/error=true&&message=${message}`);
                })
                .catch((error) => {
                  let message =
                    "Clearing user with expired unique string failed!";
                  res.redirect(
                    `/adopter/verified/error=true&&message=${message}`
                  );
                });
            })
            .catch((error) => {
              console.log(console.error);
              let message =
                "An error occurred while clearing expired user verification record!";
              res.redirect(`/adopter/verified/error=true&&message=${message}`);
            });
        } else {
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                Adopter.updateOne({ _id: userId }, { verified: true })
                  .then(() => {
                    UserVerifaction.deleteOne({ userId })
                      .then(() => {
                        res.sendFile(
                          path.join(__dirname, "./../views/verified.html")
                        );
                      })
                      .catch((error) => {
                        console.log(error);
                        let message =
                          "An error occurred while finalizing successful verification!";
                        res.redirect(
                          `/adopter/verified/error=true&&message=${message}`
                        );
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    let message =
                      "An error occurred while updating user record to show verified!";
                    res.redirect(
                      `/adopter/verified/error=true&&message=${message}`
                    );
                  });
              } else {
                let message =
                  "Invalid verification details passed. Check your inbox!";
                res.redirect(
                  `/adopter/verified/error=true&&message=${message}`
                );
              }
            })
            .catch((error) => {
              let message = "An error occurred while comparing unique string!";
              res.redirect(`/adopter/verified/error=true&&message=${message}`);
            });
        }
      } else {
        let message =
          "Account record doesn't exist or has been verified already. Please signup or login!";
        res.redirect(`/adopter/verified/error=true&&message=${message}`);
      }
    })
    .catch((error) => {
      console.log(error);
      let message =
        "An error occurred while checking for existing user verification record!";
      res.redirect(`/adopter/verified/error=true&&message=${message}`);
    });
});

router.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/verified.html"));
});

router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "Failed",
      message: "Empty credentals field!",
    });
  } else {
    Adopter.find({ email: email })
      .then((data) => {
        if (data.length) {
          if (!data[0].verified) {
            res.json({
              status: "Failed",
              message: "Email hasn't been verified yet. Check your inbox!",
            });
          } else {
            const hashedPass = data[0].password;
            bcrypt
              .compare(password, hashedPass)
              .then((result) => {
                if (result) {
                  res.json({
                    status: "Success",
                    message: "Signin successful!!!",
                    data: data,
                  });
                } else {
                  res.json({
                    status: "Failed",
                    message: "Invalid password input!",
                  });
                }
              })
              .catch((err) => {
                res.json({
                  status: "Failed",
                  message: "An error occurred while comparing password!",
                });
              });
          }
        } else {
          res.json({
            status: "Failed",
            message: "Invalid credentials!",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "Failed",
          message: "An error occurred while checking for existing user!",
        });
      });
  }
});

router.post("/requestPasswordreset", (req, res) => {
  const { email, redirectUrl } = req.body;

  Adopter.find({ email: email })
    .then((data) => {
      if (data.length) {
        if (!data[0].verified) {
          res.json({
            status: "Failed",
            message: "Email hasn't been verified yet. Check your inbox!",
          });
        } else {
          sendResetEmail(data[0], redirectUrl, res);
        }
      } else {
        res.json({
          status: "Failed",
          message: "No account with the supplied email exists!",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "An error occurred while checking for existing user!",
      });
    });
});

const sendResetEmail = ({ _id, email }, redirectUrl, res) => {
  const resetString = uuidv4() + _id;

  PasswordReset.deleteMany({ userId: _id })
    .then((result) => {
      const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Reset Your Password",
        html: `<p>We heard that you lost your password,</p><p>Don't wory use the link below to reset your password.</p>
            <p>This link <b>expires in 60 minutes</b>.</p>
            <p>Press <a href=${
              redirectUrl + "/" + _id + "/" + resetString
            }>here</a> to procced.</p>
            <p><b>Child Adoption Management System</b></p>`,
      };
      const saltRound = 10;

      bcrypt
        .hash(resetString, saltRound)
        .then((hashedResetString) => {
          const newPasswordReset = new PasswordReset({
            userId: _id,
            resetString: hashedResetString,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
          });

          newPasswordReset
            .save()
            .then((result) => {
              transporter
                .sendMail(mailOptions)
                .then((result) => {
                  res.json({
                    status: "Pending",
                    message: "Password reset email sent!!!",
                  });
                })
                .catch((error) => {
                  console.log(error);
                  res.json({
                    status: "Failed",
                    message: "Password reset email failed!",
                  });
                });
            })
            .catch((error) => {
              console.log(error);
              res.json({
                status: "Failed",
                message: "Couldn't save password reset data!",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          res.json({
            status: "Failed",
            message: "An error occurred while hashing the password reset data!",
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "Clearing exisiting password reset records failed!",
      });
    });
};

router.post("/resetPassword", (req, res) => {
  let { userId, resetString, newPassword } = req.body;

  PasswordReset.find({ userId })
    .then((result) => {
      if (result.length > 0) {
        const { expiresAt } = result[0];
        const hashedResetString = result[0].resetString;

        if (expiresAt < Date.now()) {
          PasswordReset.deleteOne({ userId: _id })
            .then(() => {
              res.json({
                status: "Failed",
                message: "Password reset link has expired!!",
              });
            })
            .catch((error) => {
              console.log(error);
              res.json({
                status: "Failed",
                message: "Clearing password reset record failed!",
              });
            });
        } else {
          bcrypt
            .compare(resetString, hashedResetString)
            .then((result) => {
              if (result) {
                const saltRound = 10;
                bcrypt
                  .hash(newPassword, saltRound)
                  .then((hashedNewPassword) => {
                    Adopter.updateOne(
                      { _id: userId },
                      { password: hashedNewPassword }
                    )
                      .then(() => {
                        PasswordReset.deleteOne({ userId })
                          .then(() => {
                            res.json({
                              status: "Success",
                              message: "Password has been reset successfuly",
                            });
                          })
                          .catch((error) => {
                            console.log(error);
                            res.json({
                              status: "Failed",
                              message:
                                "An error occurred while finalizing password reset!",
                            });
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                        res.json({
                          status: "Failed",
                          message: "Updating user password failed!",
                        });
                      });
                  })
                  .catch((eroor) => {
                    console.log(error);
                    res.json({
                      status: "Failed",
                      message: "An error occurred while hashing new password!",
                    });
                  });
              } else {
                res.json({
                  status: "Failed",
                  message: "Invalid password reset details passed!",
                });
              }
            })
            .catch((error) => {
              res.json({
                status: "Failed",
                message: "Comparing password reset strings failed!",
              });
            });
        }
      } else {
        res.json({
          status: "Failed",
          message: "Password reset request not found!",
        });
      }
    })
    .catch((eroor) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "Checking for existing password reset record failed!",
      });
    });
});

module.exports = router;
