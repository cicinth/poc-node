const save = require('./functions/savePatient');
const findAll = require('./functions/getPatient');
const findOne = require('./functions/getOnePatient');
const update = require('./functions/updatePatient');
const remove = require('./functions/removePatient');

function savePatient(item) {
    return save(item)
}

function getPatient() {
    return findAll()
}

function getOnePatient(cpf) {
    return findOne(cpf)
}

function updatePatient(params) {
    return update(params)
}

function deletePatient(params) {
    return remove(params)
}


module.exports =({
    savePatient,
    getPatient,
    getOnePatient,
    updatePatient,
    deletePatient
})


