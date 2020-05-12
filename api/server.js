const {GraphQLServer,  PubSub} = require('graphql-yoga')
const resolvers = require('./graphql/Patient/resolvers')


const pubsub =  new PubSub();

const server =  new GraphQLServer ({ 
    resolvers,
    typeDefs:'./graphql/Patient/schema.graphql',
    context:{pubsub}
})

server.start(() => console.log('Server running 🤘'))
