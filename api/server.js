const {GraphQLServer} = require('graphql-yoga')
const resolvers = require('./graphql/resolvers')

const server =  new GraphQLServer ({ 
    resolvers,
    typeDefs:'./graphql/schema.graphql'
})
server.start(() => console.log('Server running!'))
