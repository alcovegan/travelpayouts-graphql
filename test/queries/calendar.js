const calendar = `{
    calendar(origin: "MOW", destination: "LED", depart_date: "2021-10", generateUrls:{
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
	    day_of_month
	    searchlink
    }
}`;

module.exports = calendar;