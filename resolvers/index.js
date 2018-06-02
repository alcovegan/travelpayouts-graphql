const apiKey = process.env.TPAPIKEY;
const api = require('travelpayouts-js')(apiKey);

const resolvers = {
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
        }
      }
}

module.exports = resolvers;