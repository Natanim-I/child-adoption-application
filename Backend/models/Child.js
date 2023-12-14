const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
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
    dateofbirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    placeofbirth: {
        type: String,
        required: true
    }
})

const Child = mongoose.model("Child", childSchema);

module.exports = Child;