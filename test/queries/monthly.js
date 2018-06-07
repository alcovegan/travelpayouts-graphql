const monthly = `{
    monthly(origin:"MOW", destination:"LED", month:"2018-10-01", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    price
	    transfers
	    airline
	    flight_number
	    departure_at
	    return_at
	    expires_at
	    month,
	    searchlink
    }
}`;

module.exports = monthly;