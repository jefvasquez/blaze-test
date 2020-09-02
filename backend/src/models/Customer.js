const { Schema, model } = require('mongoose');

const customerSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String
});

module.exports = model('Customer', customerSchema);