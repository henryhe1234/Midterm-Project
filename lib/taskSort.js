//require('dotenv').config({ path: '../.env' });
const { Pool } = require('pg');
const { movieQuery } = require('./movie_queries');
const { bookQuery } = require('./book_queries');
const { restaurantQuery } = require('./yelp_queries');
const { addBooks, addMovie, addRestaurant, addProduct } = require('../db/database.js');

const taskSort = (input, id) => {
  const userId = req.session.id
  Promise.all([restaurantQuery(input), movieQuery(input), bookQuery(input)])
    .then((res) => {
      //console.log("RES: \n", res);
      if (res[0]) {
        addRestaurant(userId, input, '2002-02-02', null, null, res[0]);
        return  //call restauranttaskfunction
      } else if (res[1]) {
        addMovie(userId, input, '2005-05-05', null, null, res[1])
        return ; //call movietaskfunction
      } else if (res[2]) {
        addBooks(userId, input, '2004-04-04', null, null, res[2]);
        return  //call booktaskfunction
      }
      addProduct(userId, input, '2003-03-03', null, null, input)
      return 'product'; //call producttaskfunction
    });
    return;
};

module.exports = taskSort;
