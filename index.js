const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./schema');
const checkAuth = require('./helpers/checkAuth');

const app = express();

app.use('/graphql', checkAuth, express_graphql({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development' ? true : false
}));

app.listen(4000, () => console.log('Travelpayouts GraphQL Server is running on http://localhost:4000/graphql'));