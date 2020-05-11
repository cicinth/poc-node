const {GraphQLServer,  PubSub} = require('graphql-yoga')
const resolvers = require('./graphql/resolvers')


const pubsub =  new PubSub();

const server =  new GraphQLServer ({ 
    resolvers,
    typeDefs:'./graphql/schema.graphql',
    context:{pubsub}
})
server.start(() => console.log('Server running!'))
