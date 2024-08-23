// Defines data schema (e.g., Mongoose schema)

const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    customerName: String,
    location: String,
    accountNumber: String,
    timeIn: Date,
    timeOut: Date,
    cashSlips: Number,
    chequeSlips: Number,
    cashAmount: Number,
    chequeAmount: Number,
    totalAmount: Number,
    depositorName: String,
    depositorSignature: String,
    contactNumber: String,
    paymentSlipImage: String,  // Store as a path or URL
});

module.exports = mongoose.model('Data', DataSchema);
