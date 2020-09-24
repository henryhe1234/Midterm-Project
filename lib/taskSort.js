//require('dotenv').config({ path: '../.env' });
const { movieQuery } = require('./movie_queries');
const { bookQuery } = require('./book_queries');
const { restaurantQuery } = require('./yelp_queries');
const { addBooks, addMovie, addRestaurant, addProduct } = require('../db/database.js');

const taskSort = (input, id) => {
  Promise.all([restaurantQuery(input), movieQuery(input), bookQuery(input)])
    .then((res) => {
      //console.log("RES: \n", res);
      if (res[0]) {
        addRestaurant(id, input, '2005-06-06', null, null, res[0]);
        return;
        //call restauranttaskfunction
      } else if (res[1]) {
        addMovie(id, input, '2005-05-05', null, null, res[1]);
        return;
        //call movietaskfunction
      } else if (res[2]) {
        addBooks(id, input, '2004-04-04', null, null, res[2]);
        return;
        //call booktaskfunction
      }
      addProduct(id, input, '2003-03-03', null, null, input);
      return;
      //call producttaskfunction
    });
  return;
};

//taskSort("Fern Gully")

module.exports = taskSort;
