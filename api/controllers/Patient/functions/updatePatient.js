const Patient = require('../../../database/models/patient');

async function updatePatient(params) {
    const {id,name, cpf} = params
    await Patient.findByIdAndUpdate(id,{
        $set:{
            name:name,
            cpf:cpf
        }
    })
    const patient = await Patient.findOne({_id:id}) 
    return patient
    
}

module.exports = updatePatient;

