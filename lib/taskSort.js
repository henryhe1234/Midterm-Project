require('dotenv').config({ path: '../.env' });
const { Pool } = require('pg');
const { movieQuery } = require('./movie_queries');
const { bookQuery } = require('./book_queries');
const { restaurantQuery } = require('./yelp_queries');

const taskSort = (input) => {
  Promise.all([restaurantQuery(input), movieQuery(input), bookQuery(input)])
    .then((res) => {
      console.log("RES: \n", res);
      if (res[0]) {
        return 'food'; //call restauranttaskfunction
      } else if (res[1]) {
        return 'movie'; //call movietaskfunction
      } else if (res[2]) {
        return 'books'; //call booktaskfunction
      }
      return 'product'; //call producttaskfunction
    });
};

module.exports = taskSort;
