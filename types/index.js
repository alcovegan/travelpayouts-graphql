const typeDefs = `
    type Query {
        latest(origin: String, destination: String, currency: String, beginning_of_period: String, period_type: String, one_way: Boolean, page: Int, limit: Int, show_to_affiliates: Boolean, sorting: String, trip_duration: Int, generateUrls: GenerateUrls): [Latest]
        monthMatrix(origin: String, destination: String, month: String, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [MonthMatrix]
        weekMatrix(origin: String, destination: String, depart_date: String, return_date: String, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [WeekMatrix]
        nearestPlacesMatrix(origin: String, destination: String, depart_date: String, return_date: String, distance: Int, limit: Int, flexibility: Int, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [NearestPlacesMatrix]
        cheap(origin: String, destination: String, depart_date: String, return_date: String, page: Int, currency: String, generateUrls: GenerateUrls): [Cheap]
        monthly(origin: String, destination: String, month: String, show_to_affiliates: Boolean, currency: String, generateUrls: GenerateUrls): [Monthly]
        direct(origin: String, destination: String, depart_date: String, return_date: String, currency: String): [Direct]
    }
    # Params for generating search links.
    # See: [documentation](https://github.com/alcovegan/travelpayouts-js)
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
    type MonthMatrix {
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
    type WeekMatrix {
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
    type NearestPlacesMatrix {
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
    # Get cheapest tickets with 0, 1, 2 and 3 transfers (param "number_of_changes" in response)
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apicheapoptions)
    type Cheap {
        price: Float
        airline: String
        flight_number: Int
        departure_at: String
        return_at: String
        expires_at: String
        origin: String
        destination: String
        number_of_changes: Int
        searchlink: String
    }
    # Get prices for each day of the month, grouped by number of stops
    # See [library documentation for this method](https://github.com/alcovegan/travelpayouts-js#apimonthlyoptions)
    type Monthly {
        origin: String
        destination: String
        price: Float
        transfers: Int
        airline: String
        flight_number: Int
        departure_at: String
        return_at: String
        expires_at: String
        month: String
        searchlink: String
    }
    # Get cheapest ticket without changes
    type Direct {
        price: Float
        airline: String
        flight_number: Int
        departure_at: String
        return_at: String
        expires_at: String
        origin: String
        destination: String
    }
`

module.exports = typeDefs;