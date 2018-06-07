const direct = `{
    direct(origin:"MOW", destination:"BKK", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
		price
		airline
		flight_number
		departure_at
		return_at
		expires_at
		origin
		destination
		searchlink
    }
}`;

module.exports = direct;