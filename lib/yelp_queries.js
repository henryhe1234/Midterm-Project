require('dotenv').config({path: '../.env'});
const yelp = require('yelp-fusion');

const restaurantQuery = restaurantName => {
  const searchRequest = {
    term: `${restaurantName}`, //query goes here
    location: 'vancouver, bc' //possible to use browser xy coordinates?
  };

  const client = yelp.client(process.env.DB_YELPKEY);
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyPrint = JSON.stringify(firstResult, null, 4);
    console.log(prettyPrint);
  }).catch(err => {
    console.log(err);
  });
};

module.exports = { restaurantQuery };
