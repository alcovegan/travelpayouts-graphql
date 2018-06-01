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
        }
      }
}

module.exports = resolvers;