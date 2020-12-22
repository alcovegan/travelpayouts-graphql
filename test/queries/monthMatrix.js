const monthMatrix = `{
	monthMatrix(origin:"MOW",destination:"BKK",month:"2021-11-01", currency:"RUB", generateUrls:{
	    url:"http://hydra.aviasales.ru"
	}) {
	    value
	    trip_class
	    show_to_affiliates
	    return_date
	    origin
	    number_of_changes
	    gate
	    found_at
	    duration
	    distance
	    destination
	    depart_date
	    actual
	    searchlink
	}
}`

module.exports = monthMatrix;