const mongoose = require('../../config/database');

const PatientSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    cpf:{
        type: String, 
        unique:true, 
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;