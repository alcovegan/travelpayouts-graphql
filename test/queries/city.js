const city = `{
	city(origin:"MOW", currency:"RUB", generateUrls:{
		url: "http://hydra.aviasales.ru"
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
	    searchlink
	}
}`;

module.exports = city;