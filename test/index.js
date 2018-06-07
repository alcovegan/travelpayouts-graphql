const { request } = require('graphql-request')
const expect = require('chai').expect
const endpoint = 'http://localhost:4000/graphql' || process.env.GRAPHQL_ENDPOINT

const {
	latest,
	monthMatrix,
	weekMatrix,
	nearestPlacesMatrix,
	cheap,
	monthly,
	direct,
	calendar,
	minPricesCalendar,
	directions,
	prices,
	airline,
	city
} = require('./queries')

describe('GraphQL endpoint single requests', function() {

	it('latest query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, latest)

		expect(result.latest).to.be.an('array')
		expect(result.latest[0]).to.be.an('object')
		expect(result.latest[0].origin).to.be.an('string')
		expect(result.latest[0].destination).to.be.an('string')
		expect(result.latest[0].value).to.be.an('number')
		expect(result.latest[0].trip_class).to.be.an('number')
		expect(result.latest[0].show_to_affiliates).to.be.an('boolean')
		expect(result.latest[0].return_date).to.be.an('string')
		expect(result.latest[0].number_of_changes).to.be.an('number')
		expect(result.latest[0].gate).to.be.an('string')
		expect(result.latest[0].found_at).to.be.an('string')
		expect(result.latest[0].duration).to.be.an('number')
		expect(result.latest[0].distance).to.be.an('number')
		expect(result.latest[0].depart_date).to.be.an('string')
		expect(result.latest[0].actual).to.be.an('boolean')
		expect(result.latest[0].searchlink).to.be.an('string')
	});

	it('monthMatrix query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, monthMatrix)

		expect(result.monthMatrix).to.be.an('array')
		expect(result.monthMatrix[0]).to.be.an('object')
		expect(result.monthMatrix[0].origin).to.be.an('string')
		expect(result.monthMatrix[0].destination).to.be.an('string')
		expect(result.monthMatrix[0].value).to.be.an('number')
		expect(result.monthMatrix[0].trip_class).to.be.an('number')
		expect(result.monthMatrix[0].show_to_affiliates).to.be.an('boolean')
		expect(result.monthMatrix[0].return_date).to.be.an('null')
		expect(result.monthMatrix[0].number_of_changes).to.be.an('number')
		expect(result.monthMatrix[0].gate).to.be.an('string')
		expect(result.monthMatrix[0].found_at).to.be.an('string')
		expect(result.monthMatrix[0].duration).to.be.an('number')
		expect(result.monthMatrix[0].distance).to.be.an('number')
		expect(result.monthMatrix[0].depart_date).to.be.an('string')
		expect(result.monthMatrix[0].actual).to.be.an('boolean')
		expect(result.monthMatrix[0].searchlink).to.be.an('string')
	});

	it('weekMatrix query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, weekMatrix)

		expect(result.weekMatrix).to.be.an('array')
		expect(result.weekMatrix[0]).to.be.an('object')
		expect(result.weekMatrix[0].origin).to.be.an('string')
		expect(result.weekMatrix[0].destination).to.be.an('string')
		expect(result.weekMatrix[0].value).to.be.an('number')
		expect(result.weekMatrix[0].show_to_affiliates).to.be.an('boolean')
		expect(result.weekMatrix[0].return_date).to.be.an('string')
		expect(result.weekMatrix[0].number_of_changes).to.be.an('number')
		expect(result.weekMatrix[0].gate).to.be.an('string')
		expect(result.weekMatrix[0].found_at).to.be.an('string')
		expect(result.weekMatrix[0].depart_date).to.be.an('string')
		expect(result.weekMatrix[0].actual).to.be.an('boolean')
		expect(result.weekMatrix[0].searchlink).to.be.an('string')
	});

	it('nearestPlacesMatrix query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, nearestPlacesMatrix)

		expect(result.nearestPlacesMatrix).to.be.an('array')
		expect(result.nearestPlacesMatrix[0]).to.be.an('object')
		expect(result.nearestPlacesMatrix[0].origin).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].destination).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].value).to.be.an('number')
		expect(result.nearestPlacesMatrix[0].trip_class).to.be.an('number')
		expect(result.nearestPlacesMatrix[0].show_to_affiliates).to.be.an('boolean')
		expect(result.nearestPlacesMatrix[0].return_date).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].number_of_changes).to.be.an('number')
		expect(result.nearestPlacesMatrix[0].gate).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].found_at).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].duration).to.be.an('null')
		expect(result.nearestPlacesMatrix[0].distance).to.be.an('number')
		expect(result.nearestPlacesMatrix[0].depart_date).to.be.an('string')
		expect(result.nearestPlacesMatrix[0].actual).to.be.an('boolean')
		expect(result.nearestPlacesMatrix[0].searchlink).to.be.an('string')
	});

	it('cheap query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, cheap)

		expect(result.cheap).to.be.an('array')
		expect(result.cheap[0]).to.be.an('object')
		expect(result.cheap[0].origin).to.be.an('string')
		expect(result.cheap[0].destination).to.be.an('string')
		expect(result.cheap[0].price).to.be.an('number')
		expect(result.cheap[0].airline).to.be.an('string')
		expect(result.cheap[0].flight_number).to.be.an('number')
		expect(result.cheap[0].departure_at).to.be.an('string')
		expect(result.cheap[0].return_at).to.be.an('string')
		expect(result.cheap[0].expires_at).to.be.an('string')
		expect(result.cheap[0].number_of_changes).to.be.an('number')
		expect(result.cheap[0].searchlink).to.be.an('string')
	});

	it('monthly query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, monthly)

		expect(result.monthly).to.be.an('array')
		expect(result.monthly[0]).to.be.an('object')
		expect(result.monthly[0].origin).to.be.an('string')
		expect(result.monthly[0].destination).to.be.an('string')
		expect(result.monthly[0].price).to.be.an('number')
		expect(result.monthly[0].transfers).to.be.an('number')
		expect(result.monthly[0].airline).to.be.an('string')
		expect(result.monthly[0].flight_number).to.be.an('number')
		expect(result.monthly[0].departure_at).to.be.an('string')
		expect(result.monthly[0].return_at).to.be.an('string')
		expect(result.monthly[0].expires_at).to.be.an('string')
		expect(result.monthly[0].month).to.be.an('string')
		expect(result.monthly[0].searchlink).to.be.an('string')
	});

	it('direct query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, direct)

		expect(result.direct).to.be.an('array')
		expect(result.direct[0]).to.be.an('object')
		expect(result.direct[0].origin).to.be.an('string')
		expect(result.direct[0].destination).to.be.an('string')
		expect(result.direct[0].price).to.be.an('number')
		expect(result.direct[0].airline).to.be.an('string')
		expect(result.direct[0].flight_number).to.be.an('number')
		expect(result.direct[0].searchlink).to.be.an('string')
	});

	it('calendar query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, calendar)

		expect(result.calendar).to.be.an('array')
		expect(result.calendar[0]).to.be.an('object')
		expect(result.calendar[0].origin).to.be.an('string')
		expect(result.calendar[0].destination).to.be.an('string')
		expect(result.calendar[0].price).to.be.an('number')
		expect(result.calendar[0].transfers).to.be.an('number')
		expect(result.calendar[0].airline).to.be.an('string')
		expect(result.calendar[0].flight_number).to.be.an('number')
		expect(result.calendar[0].departure_at).to.be.an('string')
		expect(result.calendar[0].return_at).to.be.an('string')
		expect(result.calendar[0].expires_at).to.be.an('string')
		expect(result.calendar[0].day_of_month).to.be.an('string')
		expect(result.calendar[0].searchlink).to.be.an('string')
	});

	it('minPricesCalendar query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, minPricesCalendar)

		expect(result.minPricesCalendar.best_prices).to.be.an('array')
		expect(result.minPricesCalendar.best_prices[0]).to.be.an('object')
		expect(result.minPricesCalendar.best_prices[0].origin).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].destination).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].value).to.be.an('number')
		expect(result.minPricesCalendar.best_prices[0].trip_class).to.be.an('number')
		expect(result.minPricesCalendar.best_prices[0].show_to_affiliates).to.be.an('boolean')
		expect(result.minPricesCalendar.best_prices[0].depart_date).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].return_date).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].number_of_changes).to.be.an('number')
		expect(result.minPricesCalendar.best_prices[0].gate).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].found_at).to.be.an('string')
		expect(result.minPricesCalendar.best_prices[0].distance).to.be.an('number')
		expect(result.minPricesCalendar.best_prices[0].actual).to.be.an('boolean')
		expect(result.minPricesCalendar.best_prices[0].searchlink).to.be.an('string')

		expect(result.minPricesCalendar.current_depart_date_prices).to.be.an('array')
		expect(result.minPricesCalendar.current_depart_date_prices[0]).to.be.an('object')
		expect(result.minPricesCalendar.current_depart_date_prices[0].origin).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].destination).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].value).to.be.an('number')
		expect(result.minPricesCalendar.current_depart_date_prices[0].trip_class).to.be.an('number')
		expect(result.minPricesCalendar.current_depart_date_prices[0].show_to_affiliates).to.be.an('boolean')
		expect(result.minPricesCalendar.current_depart_date_prices[0].depart_date).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].return_date).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].number_of_changes).to.be.an('number')
		expect(result.minPricesCalendar.current_depart_date_prices[0].gate).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].found_at).to.be.an('string')
		expect(result.minPricesCalendar.current_depart_date_prices[0].distance).to.be.an('number')
		expect(result.minPricesCalendar.current_depart_date_prices[0].actual).to.be.an('boolean')
		expect(result.minPricesCalendar.current_depart_date_prices[0].searchlink).to.be.an('string')
	});


	it('directions query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, directions)

		expect(result.directions).to.be.an('object')
		expect(result.directions.origin).to.be.an('object')
		expect(result.directions.origin.iata).to.be.an('string')
		expect(result.directions.origin.name).to.be.an('string')
		expect(result.directions.origin.country).to.be.an('string')
		expect(result.directions.origin.coordinates).to.be.an('array')
		expect(result.directions.directions).to.be.an('array')
		expect(result.directions.directions[0]).to.be.an('object')
		expect(result.directions.directions[0].direct).to.be.an('boolean')
		expect(result.directions.directions[0].iata).to.be.an('string')
		expect(result.directions.directions[0].name).to.be.an('string')
		expect(result.directions.directions[0].country).to.be.an('string')
		expect(result.directions.directions[0].country_name).to.be.an('string')
		expect(result.directions.directions[0].coordinates).to.be.an('array')
		expect(result.directions.directions[0].weight).to.be.an('number')
		expect(result.directions.directions[0].weather).to.be.an('object')
	});

	it('prices query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, prices)

		expect(result.prices).to.be.an('array')
		expect(result.prices[0]).to.be.an('object')
		expect(result.prices[0].origin).to.be.an('string')
		expect(result.prices[0].destination).to.be.an('string')
		expect(result.prices[0].value).to.be.an('number')
		expect(result.prices[0].trip_class).to.be.an('number')
		expect(result.prices[0].show_to_affiliates).to.be.an('boolean')
		expect(result.prices[0].return_date).to.be.an('string')
		expect(result.prices[0].number_of_changes).to.be.an('number')
		expect(result.prices[0].gate).to.be.an('string')
		expect(result.prices[0].found_at).to.be.an('string')
		expect(result.prices[0].distance).to.be.an('number')
		expect(result.prices[0].depart_date).to.be.an('string')
		expect(result.prices[0].actual).to.be.an('boolean')
		expect(result.prices[0].ttl).to.be.an('number')
		expect(result.prices[0].searchlink).to.be.an('string')
	});


	it('airline query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, airline)

		expect(result.airline).to.be.an('object')
	});

	it('city query', async function() {

		this.timeout(10000)
		const result = await request(endpoint, city)
		console.log(result);

		expect(result.city).to.be.an('array')
		expect(result.city[0]).to.be.an('object')
		expect(result.city[0].origin).to.be.an('string')
		expect(result.city[0].destination).to.be.an('string')
		expect(result.city[0].price).to.be.an('number')
		expect(result.city[0].transfers).to.be.an('number')
		expect(result.city[0].airline).to.be.an('string')
		expect(result.city[0].flight_number).to.be.an('number')
		expect(result.city[0].departure_at).to.be.an('string')
		expect(result.city[0].return_at).to.be.an('string')
		expect(result.city[0].expires_at).to.be.an('string')
		expect(result.city[0].searchlink).to.be.an('string')
	});

});