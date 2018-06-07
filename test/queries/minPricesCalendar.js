const minPricesCalendar = `{
    minPricesCalendar(origin:"MOW",destination:"LED",depart_date:"2018-10-05", generateUrls:{
        url:"http://hydra.aviasales.ru"
    }) {
	    best_prices {
		    value
		    trip_class
		    show_to_affiliates
		    return_date
		    origin
		    number_of_changes
		    gate
		    found_at
		    distance
		    destination
		    depart_date
		    actual
		    searchlink
	    }
	    current_depart_date_prices {
		    value
		    trip_class
		    show_to_affiliates
		    return_date
		    origin
		    number_of_changes
		    gate
		    found_at
		    distance
		    destination
		    depart_date
		    actual
		    searchlink
	    }
	}
}`;

module.exports = minPricesCalendar;