const server = require('express')();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');

const { port } = require('./config');

const typeDefs = `
    type Query { hey: String! }
`;

const resolvers = {
    Query: {
        hey: () => 'hey there'
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

server
    .use(bodyParser.json())
    .use('/graphql', graphqlExpress({ schema }))
    .use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))
    .listen(port, () => console.log(`Listening on port ${port}`));