const save = require('./functions/savePatient');
const findAll = require('./functions/getPatient');
const findOne = require('./functions/getOnePatient');
const update = require('./functions/updatePatient');
const remove = require('./functions/removePatient');

async function savePatient(item) {
    return save(item)
}

async function getPatient() {
    return findAll()
}

async function getOnePatient(cpf) {
    return findOne(cpf)
}

async function updatePatient(params) {
    return update(params)
}

async function deletePatient(params) {
    return remove(params)
}


module.exports =({
    savePatient,
    getPatient,
    getOnePatient,
    updatePatient,
    deletePatient
})


