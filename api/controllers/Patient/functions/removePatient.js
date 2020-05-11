const Patient = require('../../../database/models/patient');

async function removePatient(id) {
    return Patient.remove({_id:id})
        .then(() => id)
}

module.exports = removePatient;

