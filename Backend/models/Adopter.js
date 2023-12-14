const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adopterSchema = new Schema({
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
    profileImg: {
        type: String,
    }, 
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    occupation:{
        type: String,
    },
    maritalStatus:{
         type: String,
     },
    dateofbirth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean
    }
})

 const Adopter = mongoose.model("Adopter", adopterSchema);

 module.exports = Adopter;