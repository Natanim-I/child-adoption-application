const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    }
})

 const Donation = mongoose.model("Donation", donationSchema);

 module.exports = Donation;