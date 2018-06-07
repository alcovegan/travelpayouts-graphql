const weekMatrix = `{
    weekMatrix(origin:"MOW",destination:"BKK",depart_date:"2018-10-05", return_date:"2018-10-15", generateUrls:{
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