const mongoose = require('mongoose');

const employeeDetailsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    eMail: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    salaryCredited: {
        type: Boolean,
        required: true
    }
});

const Details = module.exports = mongoose.model('Details', employeeDetailsSchema);