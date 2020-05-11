const Patient = require('../../../database/models/patient');

async function savePatient(item) {
    return Patient.create(item)
}

module.exports = savePatient;

 