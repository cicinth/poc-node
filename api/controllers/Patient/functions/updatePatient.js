const Patient = require('../../../database/models/patient');

async function getOnePatient(params) {
    const {id,name, cpf} = params
    const patient = await Patient.findByIdAndUpdate(id,{
        $set:{
            name:name,
            cpf:cpf
        }
    }) 
    return patient
    
}

module.exports = getOnePatient;

