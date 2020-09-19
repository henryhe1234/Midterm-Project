require('dotenv').config({path: '../.env'});
const { Pool } = require('pg');
const { movieQuery } = require('./movie_queries')
const { bookQuery } = require('./book_queries')
const { restaurantQuery } = require('./yelp_queries')

const addTask = (input) => {
  Promise.all ([restaurantQuery(input),movieQuery(input)],bookQuery(input))
  .then((res) => {
    if (res[0]) {
      console.log("rest")
      return //call restauranttaskfunction
    } else if (res[1]) {
      console.log("movie")
      return //call movietaskfunction
    } else if (res[2]){
      console.log(res[2])
      console.log("book")
    return //call booktaskfunction
    }
    console.log("buy")
    return //call producttaskfunction
  });
};

addTask('The Name of the Wind')