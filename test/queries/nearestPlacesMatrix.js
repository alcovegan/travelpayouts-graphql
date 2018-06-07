const nearestPlacesMatrix = `{
	nearestPlacesMatrix(origin:"MOW", destination:"LED", depart_date:"2018-10-05", return_date:"2018-10-17", flexibility:7, currency:"RUB", generateUrls:{
			url:"http://hydra.aviasales.ru"
		}) {
		origin
		destination
		value
		depart_date
		return_date
		trip_class
		show_to_affiliates
		number_of_changes
		gate
		found_at
		duration
		distance
		actual,
		searchlink
	}
}`;

module.exports = nearestPlacesMatrix;