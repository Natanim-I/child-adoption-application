const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
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
    phone: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    levelofeducation: {
        type: String,
        required: true,
    },    
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean
    }
})

 const Employee = mongoose.model("Employee", employeeSchema);

 module.exports = Employee;