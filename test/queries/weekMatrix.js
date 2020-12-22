const weekMatrix = `{
    weekMatrix(origin:"MOW",destination:"BKK",depart_date:"2021-11-01", return_date:"2021-11-15", generateUrls:{
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
	    destination
	    depart_date
	    actual
	    searchlink
    }
}`;

module.exports = weekMatrix;