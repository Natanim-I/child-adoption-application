const express = require("express");
const router = express.Router();

const Adopter = require("./../models/Adopter");
const Child = require("./../models/Child");
const Employee = require("./../models/Employee");
const Adoption = require("./../models/Adoption");
const Donation = require("./../models/Donation");

require("dotenv").config();

const path = require("path");

router.get("/showAdoptionOverview", (req,res) => {
    Adoption.find().then(result => {
        const AdoptionOverview = result; 
        AdoptionOverview.slice(-3);
        res.json({
            status: "Sucess",
            message: "Adoption Overview sent successfully!!!",
            data: AdoptionOverview
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Adoption Overview not sent"
        })
    })
})

router.get("/showAdoption", (req,res) => {
    Adoption.find().then(result => {
        res.json({
            status: "Sucess",
            message: "Adoption Overview sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Adoption Overview not sent"
        })
    })
})

router.get("/showDonation", (req,res) => {
    Donation.find().then(result => {
        res.json({
            status: "Sucess",
            message: "Donation Overview sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Donation Overview not sent"
        })
    })
})


router.get("/showAdoption/:email", (req,res) => {
    let {email} = req.params
    Adoption.find({email}).then(result => {
        res.json({
            status: "Sucess",
            message: "Adoptions sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Adoptions not sent"
        })
    })
})

router.get("/showDonationOverview", (req,res) => {
    Donation.find().then(result => {
        const DonationOverview = result; 
        DonationOverview.slice(-3);
        res.json({
            status: "Sucess",
            message: "Donation Overview sent successfully!!!",
            data: DonationOverview
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Donation Overview not sent"
        })
    })
})

router.get("/showAdopterOverview", (req,res) => {
    Adopter.find().then(result => {
        const AdopterOverview = result; 
        AdopterOverview.slice(-3);
        res.json({
            status: "Sucess",
            message: "Adopter Overview sent successfully!!!",
            data: AdopterOverview
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Adopter Overview not sent"
        })
    })
})

router.get("/showAdopter", (req,res) => {
    Adopter.find().then(result => {
        res.json({
            status: "Sucess",
            message: "Adopter List sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Adopter List not sent"
        })
    })
})

router.get("/showEmployeeOverview", (req,res) => {
    Employee.find().then(result => {
        const EmployeeOverview = result; 
        EmployeeOverview.slice(-3);
        res.json({
            status: "Sucess",
            message: "Employee Overview sent successfully!!!",
            data: EmployeeOverview
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Employee Overview not sent"
        })
    })
})

router.get("/showEmployee", (req,res) => {
    Employee.find().then(result => {
        res.json({
            status: "Sucess",
            message: "Employee List sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Employee List not sent"
        })
    })
})

router.get("/showChildrenOverview", (req,res) => {
    Child.find().then(result => {
        const ChildrenOverview = result; 
        ChildrenOverview.slice(-3);
        res.json({
            status: "Sucess",
            message: "Children Overview sent successfully!!!",
            data: ChildrenOverview
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Children Overview not sent"
        })
    })
})

router.get("/showChildren", (req,res) => {
    Child.find().then(result => {
        res.json({
            status: "Sucess",
            message: "Children List sent successfully!!!",
            data: result
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: "Failed",
            message: "Children List not sent"
        })
    })
})

router.get("/adopter/:userId", (req, res) => {
    let {userId} = req.params
    Adopter.findOne({id:userId}).then(result => {
        res.json({
            status: "Success",
            message: "Adopter details sent!!!",
            data: result
            })
        }).catch(error => {
            console.log(error);
            res.json({
                status: "Failed",
                message: "Adopter details not sent!"
            })
        })
    })

router.get("/employee/:userId", (req, res) => {
    let {userId} = req.params
    Employee.findOne({id:userId}).then(result => {
        res.json({
            status: "Success",
            message: "Employee details sent!!!",
            data: result
            })
        }).catch(error => {
            console.log(error);
            res.json({
                status: "Failed",
                message: "Employee details not sent!"
            })
    })
})

router.get("/children/:userId", (req, res) => {
    let {userId} = req.params
    Child.findOne({id:userId}).then(result => {
        res.json({
            status: "Success",
            message: "Child details sent!!!",
            data: result
        }).catch(error => {
            console.log(error);
            res.json({
                status: "Failed",
                message: "Child details not sent!"
            })
        })
    })
})

router.get("/adoptions/:userId", (req, res) => {
    let {userId} = req.params
    Adoption.findOne({id:userId}).then(result => {
        res.json({
            status: "Success",
            message: "Adoption details sent!!!",
            data: result
        }).catch(error => {
            console.log(error);
            res.json({
                status: "Failed",
                message: "Adoption details not sent!"
            })
        })
    })
})

module.exports = router;