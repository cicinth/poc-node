const Patient = require('../../controllers/Patient/index')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllPatient: () => Patient.getPatient(),
        findPatientForCpf: (root, {cpf}) => Patient.getOnePatient(cpf),
        
    },
    Mutation:{
        addPatient: (root, params,{pubsub}) => {
            return Patient.savePatient(params).then(patient => {
                pubsub.publish('PUBSUB_NEW_PATIENT', {
                    patient: Patient.getPatient(),
                    newPatient:patient
                });
                return patient
            })
        },
        updatePatient: (root,params,{pubsub}) => {
           return Patient.updatePatient(params).then(patient =>{
                pubsub.publish('PUBSUB_UPDATE_PATIENT',{
                    patient: Patient.getPatient()
                })
                return patient
           })
        },
        deletePatient: (root, {id},{pubsub}) => {
            return Patient.deletePatient(id).then(result =>{
                pubsub.publish('PUBSUB_DELETE_PATIENT',{
                    patient: Patient.getPatient()
                })
                return result
            })
        }
    },
    Subscription: {
        newPatient: {
          subscribe: (_, __, { pubsub }) => {
            return pubsub.asyncIterator('PUBSUB_NEW_PATIENT')
          },
        },
        patient: {
            subscribe: (_, __, { pubsub }) => {
              return pubsub.asyncIterator(['PUBSUB_NEW_PATIENT','PUBSUB_UPDATE_PATIENT','PUBSUB_DELETE_PATIENT'])
            },
          },

    }
}

module.exports = resolvers