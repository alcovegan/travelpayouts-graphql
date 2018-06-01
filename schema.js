const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

const typeDefs = require('./types');
const resolvers = require('./resolvers');

// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// http://dev.apollodata.com/tools/graphql-tools/mocking.html
// addMockFunctionsToSchema({ schema, mocks });

module.exports = schema;