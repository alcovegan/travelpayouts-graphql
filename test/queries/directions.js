const directions = `{
    directions(origin_iata:"MOW", one_way:false, locale:"ru") {
	    origin {
		    iata
		    name
		    country
		    coordinates
	    },
	    directions {
		    direct
		    iata
		    name
		    country
		    country_name
		    coordinates
		    weight
		    weather
	    }
    }
}`;

module.exports = directions;