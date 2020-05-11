const Patient = require('../../../database/models/patient');

async function getPatient() {
    const patients = await Patient.find() 
    return patients
    
}

module.exports = getPatient;

