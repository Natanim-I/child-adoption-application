const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Employee = require("../models/Employee");
const UserVerifaction = require("../models/UserVerification");
const PasswordReset = require("../models/PasswordReset");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./views/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const nodemailer = require("nodemailer");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const bcrypt = require("bcrypt");

const path = require("path");
const { add } = require("nodemon/lib/rules");

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
    User.find({ email: email })
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

router.post("/update", upload.single("profileImage"), (req, res) => {
  let {
    id,
    firstName,
    lastName,
    email,
    address,
    phone,
    dateofbirth,
    levelofeducation,
    profileImage,
    changepass,
    repeatpass,
  } = req.body;
  id = id;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  address = address.trim();
  phone = phone.trim();
  dateofbirth = dateofbirth.trim();
  levelofeducation = levelofeducation.trim();
  changepass = changepass.trim();
  repeatpass = repeatpass.trim();

  User.findById(id)
    .then((result) => {
      if (!(firstName === "")) {
        result.firstName = firstName;
      }
      if (!(lastName === "")) {
        result.lastName = lastName;
      }
      if (!(email === "")) {
        result.email = email;
      }
      if (!(address === "")) {
        result.address = address;
      }
      if (!(phone === "")) {
        result.phone = phone;
      }
      if (!(dateofbirth === "")) {
        result.dateofbirth = dateofbirth;
      }
      if (!(levelofeducation === "")) {
        result.levelofeducation = levelofeducation;
      }
      if (
        !(changepass === "") &&
        !(repeatpass === "") &&
        changepass === repeatpass
      ) {
        result.password = changepass;
      }
      if (!(profileImage === "")) {
        result.profileImage = profileImage;
      }

      result
        .save()
        .then((result) =>
          res.json({
            status: "Success",
            message: "Update successful!!!",
            data: result,
          })
        )
        .catch((err) => {
          console.log(err);
          res.json({
            status: "Failed",
            message: "An error occurred while updating!",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "Failed",
        message: "An error occurred while looking for user account!",
      });
    });
});

router.post("/requestPasswordreset", (req, res) => {
  const { email, redirectUrl } = req.body;

  User.find({ email: email })
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
              redirectUrl + "/admin/" + _id + "/" + resetString
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
                    User.updateOne(
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

router.post("/registerEmployee", (req, res) => {
  let {
    firstName,
    lastName,
    email,
    phone,
    dateofbirth,
    levelofeducation,
    gender,
  } = req.body;

  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    phone === "" ||
    dateofbirth === "" ||
    gender === "" ||
    levelofeducation === ""
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
  } else if (!/^\+?[1-9][0-9]{7,14}$/.test(phone)) {
    res.json({
      status: "Failed",
      message: "Invalid phone number!",
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
    Employee.find({ email: email })
      .then((result) => {
        if (result.length) {
          res.json({
            status: "Failed",
            message: "An employee with the specified email already exists!",
          });
        } else {
          const uniqueId = uuidv4(email);
          const saltRound = 10;
          bcrypt
            .hash("Employee", saltRound)
            .then((hashedPass) => {
              const newEmployee = new Employee({
                id: uniqueId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                dateofbirth: dateofbirth,
                gender: gender,
                levelofeducation: levelofeducation,
                password: hashedPass,
                verified: false,
              });
              newEmployee
                .save()
                .then((result) => {
                  sendVerificationEmail(result, res);
                })
                .catch((err) => {
                  console.log(err);
                  res.json({
                    status: "Failed",
                    message: "An error occurred while saving employee account!",
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
          message: "An error occurred while checking for existing employee!",
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
          currentUrl + "employee/verify/" + _id + "/" + uniqueString
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

module.exports = router;
