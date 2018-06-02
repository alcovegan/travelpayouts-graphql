const GraphQLJSON = require('graphql-type-json');
const apiKey = process.env.TPAPIKEY;
const api = require('travelpayouts-js')(apiKey);

const universalApiResolver = (name) => (_, args) => api[name](args);

const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        latest: universalApiResolver('latest'),
        monthMatrix: universalApiResolver('monthMatrix'),
        weekMatrix: universalApiResolver('weekMatrix'),
        nearestPlacesMatrix: universalApiResolver('nearestPlacesMatrix'),
        cheap: universalApiResolver('cheap'),
        monthly: universalApiResolver('monthly'),
        direct: universalApiResolver('direct'),
        calendar: universalApiResolver('calendar'),
        minPricesCalendar: universalApiResolver('minPricesCalendar'),
        directions: universalApiResolver('directions'),
        prices: universalApiResolver('prices'),
        airline: universalApiResolver('airline'),
        city: universalApiResolver('city')
      }
}

module.exports = resolvers;