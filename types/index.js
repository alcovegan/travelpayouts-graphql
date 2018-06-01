const typeDefs = `
    input GenerateUrls {
        oneway: Int
        adults: Int
        children: Int
        infants: Int
        trip_class: Int
        marker: Int
        with_request: Boolean
        currency: String
        locale: String
        url: String
    }
    type Query {
        latest(origin: String, destination: String, currency: String, beginning_of_period: String, period_type: String, one_way: Boolean, page: Int, limit: Int, show_to_affiliates: Boolean, sorting: String, trip_duration: Int, generateUrls: GenerateUrls): [Latest]
    },
    type Latest {
        value: Int
        trip_class: Int
        show_to_affiliates: Boolean
        return_date: String
        origin: String
        number_of_changes: Int
        gate: String
        found_at: String
        duration: Int
        distance: Int
        destination: String
        depart_date: String
        actual: Boolean
        searchlink: String
    }
`

module.exports = typeDefs;