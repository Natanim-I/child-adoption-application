const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adoptionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    fullName: {
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
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    maritalStatus:{
        type: String,
        required: true
    },
    adoptiveFatherName:{
        type: String,
    },
    adoptiveFatherbirth:{
        type: String,
    },
    adoptiveFatherPhone:{
        type: String,
    },
    adoptiveFatherbirthplace:{
        type: String,
    },
    adoptiveFatherNationality:{
        type: String,
    },
    adoptiveFatherEducation:{
        type: String,
    },
    adoptiveFatherOccupation:{
        type: String,
    },
    adoptiveFatherIncome:{
        type: Number,
    },
    adoptiveMotherName:{
        type: String,
    },
    adoptiveMotherbirth:{
        type: String,
    },
    adoptiveMotherPhone:{
        type: String,
    },
    adoptiveMotherbirthplace:{
        type: String,
    },
    adoptiveMotherNationality:{
        type: String,
    },
    adoptiveMotherEducation:{
        type: String,
    },
    adoptiveMotherOccupation:{
        type: String,
    },
    adoptiveMotherIncome:{
        type: Number,
    },
    currentMarriageDate:{
        type: String, 
    },
    currentMarriagePlace:{
        type: String,
    },
    fatherFormerSpouseName:{
        type: String,
    },
    fatherFormerMarriageDate:{
        type: String,
    },
    fatherFormerMarriagePlace:{
        type: String,
    },
    fatherDivoorceDate:{
        type: String,
    },
    fatherDivorcePlace:{
        type: String,
    },
    motherFormerSpouseName:{
        type: String,
    },
    motherFormerMarriageDate:{
        type: String,
    },
    motherFormerMarriagePlace:{
        type: String,
    },
    motherDivorceDate:{
        type: String,
    },
    motherDivoorcePlace:{
        type: String,
    },
    criminalarrest:{
        type: String,
    },
    criminalreport:{
        type: String,
    },
    stage: {
        type: String,
    },
    status: {
        type: String,
    },
    
})

 const Adoption = mongoose.model("Adoption", adoptionSchema);

 module.exports = Adoption;