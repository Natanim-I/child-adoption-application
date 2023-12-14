const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userVerificationSchema = new Schema({
    userId: {
        type: String
    },
    uniqueString: {
        type: String
    },
    createdAt: {
        type: Date
    },
    expiresAt: {
        type: Date
    }
})

 const UserVerification = mongoose.model("UserVerifaction", userVerificationSchema);

 module.exports = UserVerification;