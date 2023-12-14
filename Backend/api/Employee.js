const express = require("express");
const router = express.Router();

const Employee = require("./../models/Employee");
const UserVerifaction = require("../models/UserVerification");
const PasswordReset = require("../models/PasswordReset");
const Child = require("./../models/Child");

const nodemailer = require("nodemailer");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const bcrypt = require("bcrypt");

const path = require("path");
const Adoption = require("../models/Adoption");

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
  }
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
    Employee.find({ email: email })
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
  console.log(req.body);

  Employee.find({ email: email })
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
              redirectUrl + "/employee/" + _id + "/" + resetString
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
                    Employee.updateOne(
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
                  res.redirect(
                    `/employee/verified/error=true&&message=${message}`
                  );
                })
                .catch((error) => {
                  let message =
                    "Clearing user with expired unique string failed!";
                  res.redirect(
                    `/employee/verified/error=true&&message=${message}`
                  );
                });
            })
            .catch((error) => {
              console.log(console.error);
              let message =
                "An error occurred while clearing expired user verification record!";
              res.redirect(`/employee/verified/error=true&&message=${message}`);
            });
        } else {
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                Employee.updateOne({ _id: userId }, { verified: true })
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
                          `/employee/verified/error=true&&message=${message}`
                        );
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    let message =
                      "An error occurred while updating user record to show verified!";
                    res.redirect(
                      `/employee/verified/error=true&&message=${message}`
                    );
                  });
              } else {
                let message =
                  "Invalid verification details passed. Check your inbox!";
                res.redirect(
                  `/employee/verified/error=true&&message=${message}`
                );
              }
            })
            .catch((error) => {
              let message = "An error occurred while comparing unique string!";
              res.redirect(`/employee/verified/error=true&&message=${message}`);
            });
        }
      } else {
        let message =
          "Account record doesn't exist or has been verified already. Please signup or login!";
        res.redirect(`/employee/verified/error=true&&message=${message}`);
      }
    })
    .catch((error) => {
      console.log(error);
      let message =
        "An error occurred while checking for existing user verification record!";
      res.redirect(`/employee/verified/error=true&&message=${message}`);
    });
});

router.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname, "./../views/verified.html"));
});

router.post("/registerChild", (req, res) => {
  let { firstName, lastName, dateofbirth } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  dateofbirth = dateofbirth.trim();

  if (firstName == "" || lastName == "" || dateofbirth == "") {
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
  } else if (
    !/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
      dateofbirth
    )
  ) {
    res.json({
      status: "Failed",
      message: "Invalid date!",
    });
  } else {
    Child.find({ firstName: firstName })
      .then((result) => {
        if (result.length) {
          res.json({
            status: "Failed",
            message: "A child already exists!",
          });
        } else {
          const uniqueId = uuidv4(firstName);
          const newChild = new Child({
            id: uniqueId,
            firstName: firstName,
            lastName: lastName,
            dateofbirth: dateofbirth,
          });
          newChild
            .save()
            .then((result) => {
              res.json({
                status: "Success",
                message: "Child registered successfuly!!!",
                data: result,
              });
            })
            .catch((err) => {
              res.json({
                status: "Failed",
                message: "An error occurred while saving Child account!",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "Failed",
          message: "An error occurred while checking for existing child!",
        });
      });
  }
});

router.post("/approveApplication", (req, res) => {
  let { id } = req.body;
  Adoption.find({ id })
    .then((emailresult) => {
      Adoption.updateOne({ id: id }, { stage: "Stage-2" })
        .then((result) => {
          sendApplicationEmailStage2(emailresult[0].email, res);
          res.json({
            status: "Success",
            message: "Adoption application stage updated",
            data: emailresult,
          });
        })
        .catch((error) => {
          console.log(error);
          res.json({
            status: "Failed",
            message: "An error ocurred while updating stage",
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "An error occurred while looking for application!",
      });
    });
});

router.post("/declineApplication", (req, res) => {
  let { id } = req.body;
  Adoption.find({ id })
    .then((emailresult) => {
      Adoption.updateOne(
        { id: id },
        { stage: "Is Declined", status: "Declined" }
      )
        .then((result) => {
          sendApplicationEmailDecline(emailresult[0].email, res);
          res.json({
            status: "Success",
            message: "Adoption application stage updated",
            data: emailresult,
          });
        })
        .catch((error) => {
          console.log(error);
          res.json({
            status: "Failed",
            message: "An error ocurred while updating stage",
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "An error occurred while looking for application!",
      });
    });
});

const sendApplicationEmailStage2 = (email, res) => {
  const accountUrl = "http://localhost:3000/adopter/stage2";
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Adoption application approved",
    html: `<p>Your application to adopt a child has been reviewed and approved,</p><p>You are required to upload documents.</p>
        <p>Press <a href=${accountUrl}>here</a> to procced.</p>
        <p><b>Child Adoption Management System</b></p>`,
  };
  transporter
    .sendMail(mailOptions)
    .then(() => {})
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "Sending email failed!",
      });
    });
};

const sendApplicationEmailDecline = ({ email }, res) => {
  const accountUrl = "http://localhost:3000/adopter";
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Adoption application declined",
    html: `<p>Your application to adopt a child has been reviewed and declined</p>.
        <p>Press <a href=${accountUrl}>here</a> to go to your account.</p>
        <p><b>Child Adoption Management System</b></p>`,
  };
  transporter
    .sendMail(mailOptions)
    .then(() => {})
    .catch((error) => {
      console.log(error);
      res.json({
        status: "Failed",
        message: "Sending email failed!",
      });
    });
};

module.exports = router;
