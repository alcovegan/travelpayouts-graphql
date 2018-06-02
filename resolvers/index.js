const GraphQLJSON = require('graphql-type-json');
const apiKey = process.env.TPAPIKEY;
const api = require('travelpayouts-js')(apiKey);

const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        latest: (_, args) => {
            return api.latest(args)
        },
        monthMatrix: (_, args) => {
            return api.monthMatrix(args)
        },
        weekMatrix: (_, args) => {
            return api.weekMatrix(args)
        },
        nearestPlacesMatrix: (_, args) => {
            return api.nearestPlacesMatrix(args)
        },
        cheap: (_, args) => {
            return api.cheap(args)
        },
        monthly: (_, args) => {
            return api.monthly(args)
        },
        direct: (_, args) => {
            return api.direct(args)
        },
        calendar: (_, args) => {
            return api.calendar(args)
        },
        minPricesCalendar: (_, args) => {
            return api.minPricesCalendar(args)
        }
      }
}

module.exports = resolvers;