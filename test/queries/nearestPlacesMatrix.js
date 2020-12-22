const nearestPlacesMatrix = `{
	nearestPlacesMatrix(origin:"MOW", destination:"LED", depart_date:"2021-02-25", return_date:"2021-03-02", flexibility:7, currency:"RUB", generateUrls:{
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