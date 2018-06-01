const apiKey = process.env.TPAPIKEY;
const api = require('travelpayouts-js')(apiKey);

const resolvers = {
    Query: {
        latest: (_, args) => {
            console.log(args);
            return api.latest(args)
        },
        monthMatrix: (_, args) => {
            console.log(args);
            return api.monthMatrix(args)
        }
      }
}

module.exports = resolvers;