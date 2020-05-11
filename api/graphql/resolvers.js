const Patient = require('../controllers/Patient/index')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllPatient: () => Patient.getPatient(),
        findPatientForCpf: (root, {cpf}) => Patient.getOnePatient(cpf),
        
    },
    Mutation:{
        addPatient: (root, params) => 
        Patient.savePatient(params),
        updatePatient: (root,params) => Patient.updatePatient(params),
        deletePatient: (root, {id}) => Patient.deletePatient(id)
    }
}

module.exports = resolvers