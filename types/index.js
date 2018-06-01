const typeDefs = `
    type Query {
        latest(origin: String, destination: String, currency: String, beginning_of_period: String, period_type: String, one_way: Boolean, page: Int, limit: Int, show_to_affiliates: Boolean, sorting: String, trip_duration: Int, generateUrls: GenerateUrls): [Latest]
        monthMatrix(origin: String, destination: String, month: String, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [monthMatrix]
        weekMatrix(origin: String, destination: String, depart_date: String, return_date: String, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [weekMatrix]
        nearestPlacesMatrix(origin: String, destination: String, depart_date: String, return_date: String, distance: Int, limit: Int, flexibility: Int, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [nearestPlacesMatrix]
    }
    # Params for generating search links.
    # See: https://github.com/alcovegan/travelpayouts-js documentation
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
    # Get latest tickets for 48 hours.
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apilatestoptions)
    type Latest {
        value: Float
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
    # Get tickets calendar for a month.
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apimonthmatrixoptions)
    type monthMatrix {
        value: Float
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
    # Get tickets week calendar
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apiweekmatrixoptions)
    type weekMatrix {
        value: Float
        trip_class: Int
        show_to_affiliates: Boolean
        return_date: String
        origin: String
        number_of_changes: Int
        gate: String
        found_at: String
        destination: String
        depart_date: String
        actual: Boolean
        searchlink: String
    }
    # Get prices for destinations nearest to original destination
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apinearestplacesmatrixoptions)
    type nearestPlacesMatrix {
        origin: String
        destination: String
        value: Float
        depart_date: String
        return_date: String
        trip_class: Int
        show_to_affiliates: Boolean
        number_of_changes: Int
        gate: String
        found_at: String
        duration: Int
        distance: Int
        actual: Boolean
        searchlink: String
    }
`

module.exports = typeDefs;