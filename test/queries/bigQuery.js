const bigQuery = `{
	latest(origin: "MOW", destination: "BKK", limit: 10, currency:"RUB", generateUrls:{
		url: "http://hydra.aviasales.ru"
	}) {
		origin
		destination
		value
		searchlink
	},
    monthly(origin:"MOW", destination:"LED", month:"2021-10-01", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    price
	    searchlink
    }
	monthMatrix(origin:"MOW",destination:"BKK",month:"2021-10-01", currency:"RUB", generateUrls:{
	    url:"http://hydra.aviasales.ru"
	}) {
	    origin
	    destination
	    value
	    searchlink
	}
	nearestPlacesMatrix(origin:"MOW", destination:"LED", depart_date:"2021-10-05", return_date:"2021-10-08", flexibility:7, currency:"RUB", generateUrls:{
			url:"http://hydra.aviasales.ru"
		}) {
		origin
		destination
		value
		searchlink
	}
    prices(origin_iata:"MOW",period:"year", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    value
	    searchlink
    }
    weekMatrix(origin:"MOW",destination:"BKK",depart_date:"2021-10-05", return_date:"2021-10-15", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    value
	    searchlink
    }
    calendar(origin:"MOW", destination:"BCN", depart_date:"2021-10", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    price
	    searchlink
    }
    cheap(origin:"MOW", destination:"BKK", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
	    origin
	    destination
	    price
	    searchlink
    }
	city(origin:"MOW", currency:"RUB", generateUrls:{
		url: "http://hydra.aviasales.ru"
	}) {
	    origin
	    destination
	    price
	    searchlink
	}
    direct(origin:"MOW", destination:"BKK", generateUrls:{
    	url:"http://hydra.aviasales.ru"
    }) {
		origin
		destination
		price
		searchlink
    }
}`;

module.exports = bigQuery;