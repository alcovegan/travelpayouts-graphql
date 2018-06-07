const prices = `{
    prices(origin_iata:"MOW",period:"year", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    value
	    ttl
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
	    created_at
	    actual
	    searchlink
    }
}`;

module.exports = prices;