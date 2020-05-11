const Patient = require('../controllers/Patient/index')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllPatient: () => Patient.getPatient(),
        findPatientForCpf: (root, {cpf}) => Patient.getOnePatient(cpf),
        
    },
    Mutation:{
        addPatient: (root, params,{pubsub}) => {
            const patient =  Patient.savePatient(params)
            pubsub.publish('PUBSUB_NEW_PATIENT', {
                newPatient:patient
            });
            return patient
        },
        updatePatient: (root,params) => Patient.updatePatient(params),
        deletePatient: (root, {id}) => Patient.deletePatient(id)
    },
    Subscription: {
        newPatient: {
          subscribe: (_, __, { pubsub }) => {
            return pubsub.asyncIterator('PUBSUB_NEW_PATIENT')
          },
        }
    }
}

module.exports = resolvers