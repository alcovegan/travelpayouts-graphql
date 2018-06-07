const latestQuery = `{
	latest(origin: "MOW", destination: "BKK", limit: 10, currency:"RUB", generateUrls:{
		url: "http://hydra.aviasales.ru"
	}) {
		origin
		destination
		value
		trip_class
		show_to_affiliates
		return_date
		number_of_changes
		gate
		found_at
		duration
		distance
		depart_date
		actual
		searchlink
	},
}`

module.exports = latestQuery;