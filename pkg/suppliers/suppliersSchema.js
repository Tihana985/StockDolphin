const mongoose = require("mongoose");
const validator = require("validator");

const suppliersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The field is required."]
    },
    addressText: {
        type: String,
        required: [true, "The  field is required."]
    },
    addressInput: {
        type: String,
        required: [true, "The  field is required."]
    },
    phone: {
        type: Number,
        required: [true, "The  field is required."]
    },
    phoneNumber: {
        type: Number,
        required: [true, "The  field is required."]
    },

    emailText: {
        type: String,
    },

    email: {
        type: String, 
        required: [true, "Email is required."],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email address."],
    },

    icon: {
        type: String,
      },
      iconTwo: {
        type: String,
      },
});

const Suppliers = mongoose.model("Suppliers", suppliersSchema);
module.exports = Suppliers;