const express = require("express");
const router = express.Router();

const Adoption = require("./../models/Adoption");
const nodemailer = require("nodemailer");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const bcrypt = require("bcrypt");

const path = require("path");

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

router.post("/stage1", (req, res) => {
  let {
    fullName,
    email,
    address,
    phone,
    maritalStatus,
    gender,
    fatherName,
    fatherbirth,
    fatherphone,
    fatherbirthplace,
    fathernationality,
    fathereducation,
    fatheroccupation,
    fatherincome,
    motherName,
    motherbirth,
    motherphone,
    motherbirthplace,
    mothernationality,
    mothereducation,
    motheroccupation,
    motherincome,
    marriagedate,
    marriageplace,
    fatherformerspousename,
    formermarriagedate,
    formermarriageplace,
    divorcedate,
    divorceplace,
    motherformerspousename,
    motherformermarriagedate,
    motherformermarriageplace,
    motherdivorcedate,
    motherdivorceplace,
    criminalarrest,
    criminalreport,
  } = req.body;

  fullName = fullName.trim();
  email = email.trim();
  address = address.trim();
  phone = phone.trim();
  maritalStatus = maritalStatus.trim();
  gender = gender.trim();
  fatherName = fatherName.trim();
  fatherbirth = fatherbirth.trim();
  fatherphone = fatherphone.trim();
  fatherbirthplace = fatherbirthplace.trim();
  fathernationality = fathernationality.trim();
  fathereducation = fathereducation.trim();
  fatheroccupation = fatheroccupation.trim();
  fatherincome = fatherincome;
  motherName = motherName.trim();
  motherbirth = motherbirth.trim();
  motherphone = motherphone.trim();
  motherbirthplace = motherbirthplace.trim();
  mothernationality = mothernationality.trim();
  mothereducation = mothereducation.trim();
  motheroccupation = motheroccupation.trim();
  motherincome = motherincome;
  marriagedate = marriagedate.trim();
  marriageplace = marriageplace.trim();
  fatherformerspousename = fatherformerspousename.trim();
  formermarriagedate = formermarriagedate.trim();
  formermarriageplace = formermarriageplace.trim();
  divorcedate = divorcedate.trim();
  divorceplace = divorceplace.trim();
  motherformerspousename = motherformerspousename.trim();
  motherformermarriagedate = motherformermarriagedate.trim();
  motherformermarriageplace = motherformermarriageplace.trim();
  motherdivorcedate = motherdivorcedate.trim();
  motherdivorceplace = motherdivorceplace.trim();
  criminalarrest = criminalarrest.trim();
  criminalreport = criminalreport.trim();

  if (
    fullName == "" ||
    email == "" ||
    address == "" ||
    phone == "" ||
    gender == "" ||
    maritalStatus == ""
  ) {
    res.json({
      status: "Failed",
      message: "Empty input field!",
    });
  } else if (!/^[a-zA-Z ]*$/.test(fullName)) {
    res.json({
      status: "Failed",
      message: "Invalid full name!",
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
  } else {
    Adoption.find({ email })
      .then((result) => {
        if (result.length) {
          for (let all in result) {
            if (all.status === "Pending") {
              res.json({
                status: "Failed",
                messsage:
                  "There is an ongoing application with the specified email!!!",
              });
            }
          }
        }
        const uniqueId = uuidv4(email);
        const newAdoption = new Adoption({
          id: uniqueId,
          fullName: fullName,
          email: email,
          phone: phone,
          address: address,
          maritalStatus: maritalStatus,
          gender: gender,
          adoptiveFatherName: fatherName,
          adoptiveFatherbirth: fatherbirth,
          adoptiveFatherphone: fatherphone,
          adoptiveFatherbirthplace: fatherbirthplace,
          adoptiveFatherNationality: fathernationality,
          adoptiveFatherEducation: fathereducation,
          adoptiveFatherOccupation: fatheroccupation,
          adoptiveFatherIncome: fatherincome,
          adoptiveMotherName: motherName,
          adoptiveMotherbirth: motherbirth,
          adoptiveMotherphone: motherphone,
          adoptiveMotherbirthplace: motherbirthplace,
          adoptiveMotherNationality: mothernationality,
          adoptiveMotherEducation: mothereducation,
          adoptiveMotherOccupation: motheroccupation,
          adoptiveMotherIncome: motherincome,
          currentMarriageDate: marriagedate,
          currentMarriagePlace: marriageplace,
          fatherFormerSpouseName: fatherformerspousename,
          fatherFormerMarriageDate: formermarriagedate,
          fatherFormerMarriagePlace: formermarriageplace,
          fatherDivorceDate: divorcedate,
          fatherDivorcePlace: divorceplace,
          motherFormerSpouseName: motherformerspousename,
          motherFormerMarriageDate: motherformermarriagedate,
          motherFormerMarriagePlace: motherformermarriageplace,
          motherDivorceDate: motherdivorcedate,
          motherDivorcePlace: motherdivorceplace,
          criminalarrest: criminalarrest,
          criminalreport: criminalreport,
          stage: "Stage-1",
          status: "Pending",
        });
        newAdoption
          .save()
          .then((result) => {
            sendAdoptionEmail(result, res);
            res.json({
              status: "Success",
              message: "Addoption application submitted",
              data: result,
            });
          })
          .catch((err) => {
            console.log(err);
            res.json({
              status: "Failed",
              message: "An error occurred while saving adopter account!",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        res.json({
          status: "Failed",
          message:
            "Failed whie checking for application with the specified email!",
        });
      });
  }
});

const sendAdoptionEmail = ({ email }, res) => {
  const accountUrl = "http://localhost:3000/adopter";
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Adoption application submitted",
    html: `<p>Your application to adopt a child has been submitted successfuly,</p><p>W will review and announce you the results and next steps.</p>
        <p>Press <a href=${accountUrl}>here</a> to visit your account.</p>
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
