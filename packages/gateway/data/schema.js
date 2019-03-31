const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Query {
        locations: [Location]
        location(latitude: String!, longitude: String!): Location
    }

    type Mutation {
        location(latitude: String!, longitude: String!, emai: String!): Location
    }

    type Location {
        latitude: String
        longitude: String
        emai: String
        _id: String
    }
`;

module.exports = makeExecutableSchema({ typeDefs , resolvers });