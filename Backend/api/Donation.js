const express = require("express");
const router = express.Router();

const Donation = require("./../models/Donation");
const nodemailer = require("nodemailer");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

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

router.post("/donate", (req, res) => {
  let { firstName, lastName, email, dateofbirth, phone, address } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  dateofbirth = dateofbirth.trim();
  phone = phone.trim();
  address = address.trim();

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    dateofbirth == "" ||
    address == "" ||
    phone == ""
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
  } else {
    const uniqueId = uuidv4(email);
    const newDonation = new Donation({
      id: uniqueId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateofbirth: dateofbirth,
      phoneNumber: phone,
      address: address,
    });
    newDonation
      .save()
      .then((result) => {
        res.json({
          status: "Success",
          message: "Adoption history saved!!!",
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "Failed",
          message: "An error occurred while saving donation history!",
        });
      });
  }
});

module.exports = router;
