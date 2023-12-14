const express = require("express");
const router = express.Router();

const Employee = require("./../models/Employee");
const Child = require("./../models/Child");
const Adopter = require("./../models/Adopter");
const Adoption = require("./../models/Adoption");
const Donation = require("./../models/Donation")

require("dotenv").config();

const path = require("path");

router.get("/countAdopters", (req,res) => {
    Adopter.count().then(result => {
        res.json({
            status: "Success",
            message: "Number of adopters counted",
            data: result,
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Error while counting!!!"
        })
    });
})

router.get("/countEmployees", (req,res) => {
    Employee.count().then(result => {
        res.json({
            status: "Success",
            message: "Number of employees counted",
            data: result,
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Error while counting!!!"
        })
    });
})

router.get("/countChildren", (req,res) => {
    Child.count().then(result => {
        res.json({
            status: "Success",
            message: "Number of children counted",
            data: result,
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Error while counting!!!"
        })
    });
})

router.get("/countAdoptions", (req,res) => {
    Adoption.count().then(result => {
        res.json({
            status: "Success",
            message: "Number of adoptions counted",
            data: result,
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Error while counting!!!"
        })
    });
})

router.get("/countDonations", (req,res) => {
    Donation.count().then(result => {
        res.json({
            status: "Success",
            message: "Number of donation counted",
            data: result,
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Error while counting!!!"
        })
    });
})

module.exports = router;