# travelpayouts-graphql

Graphql-endpoint для получения данных из [Travelpayouts API](http://www.travelpayouts.com/?marker=11885.github&locale=ru). Поддерживается получение всех данных, которые можно получить с помощью библиотеки [travelpayouts-js](https://github.com/alcovegan/travelpayouts-js), кроме метода `holidaysByRoutes` (отброшен, потому что API выдает старые данные). Параметры для запросов в graphql такие же, как и в библиотеке, включая параметр для генерации ссылок на поиск `generateUrls`. В целом graphql самодокументируемый, так что вы всегда можете посмотреть какие параметры и какого типа принимает на вход тот или иной метод через `graphiql`.

## Установка

```bash
git clone https://github.com/alcovegan/travelpayouts-graphql
cd travelpayouts-graphql
npm install
touch .env # после создания env-файла нужно вписать в него ваш токен API Travelpayouts в таком виде: TPAPITOKEN=xxxxxxxxxxxxxxxxxxxxxxxx
```

## Запуск

```bash
npm run dev # dev-режим
npm start # production-режим
```

В `dev`-режиме по адресу `/graphql` будет работать [graphiql](https://github.com/graphql/graphiql), в `production`-режиме соответственно endpoint для запросов.

## Примеры

Запрос билетов за 48 часов и календарь цен на месяц в один запрос с полями origin, destination, value, depart_date, return_date, number_of_changes и searchlink:

```graphql
{
  latest(origin: "MOW", destination: "BKK", limit: 10, currency:"RUB", generateUrls:{
    url: "http://hydra.aviasales.ru"
  }){
      origin
      destination
      value
      depart_date
      return_date
      number_of_changes
      searchlink
    },
  monthMatrix(origin:"MOW", destination:"BKK", month:"2018-06-01", currency:"RUB", generateUrls:{
    url:"http://hydra.aviasales.ru"
  }){
      origin
      destination
      value
      depart_date
      return_date
      number_of_changes
      searchlink
    }
}
```

## Лицензия

MIT © [Alexander Sharabarov](https://github.com/alcovegan/)