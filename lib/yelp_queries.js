//require('dotenv').config({path: '../.env' });
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.DB_YELPKEY);

const restaurantQuery = restaurantName => {

  const searchRequest = {
    term: `${restaurantName}`,
    location: 'vancouver, bc',
    categories: 'food, All'
  };

  return client.search(searchRequest).then(response => {

    const firstResult = response.jsonBody.businesses[0];
    const restaurant = JSON.stringify(firstResult, null, 2);

    if (firstResult === undefined) {
      console.log('No such restaurant: ', restaurantName);
      return false;
    } else if (!(firstResult["name"].toLowerCase().includes(restaurantName.toLowerCase()))) {
      console.log('No close food matches to: ', restaurantName);
      return false;
    } else {
      return restaurant;
    }
  }).catch(err => {
    console.log('No such restaurant', err);
  });
};

module.exports = { restaurantQuery };
