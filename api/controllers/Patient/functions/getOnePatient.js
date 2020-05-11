const Patient = require('../../../database/models/patient');

async function getOnePatient(cpf) {
    const patient = await Patient.findOne({cpf:cpf}) 
    return patient
    
}

module.exports = getOnePatient;

