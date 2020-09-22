require('dotenv').config({ path: '../.env' });
const { Pool } = require('pg');
const { movieQuery } = require('./movie_queries');
const { bookQuery } = require('./book_queries');
const { restaurantQuery } = require('./yelp_queries');

const taskSort = (input) => {
  Promise.all([restaurantQuery(input), movieQuery(input), bookQuery(input)])
    .then((res) => {
      if (res[0]) {
        return res[0]; //call restauranttaskfunction
      } else if (res[1]) {
        return res[1]; //call movietaskfunction
      } else if (res[2]) {
        return res[2]; //call booktaskfunction
      }
      return res[3]; //call producttaskfunction
    });
};

module.exports = taskSort;
