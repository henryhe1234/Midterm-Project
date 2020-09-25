//require('dotenv').config({ path: '../.env' });
const request = require("request");

const fetchMovie = (title, callback) => {
  request(`http://www.omdbapi.com/?apikey=${process.env.DB_OMDBKEY}&t=${title}`, (error, response, body) => {
    if (error) {
      callback("Error:\n" + error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data["Title"] === undefined) {
      callback('Movie not in API.', null);
      return;
    }
    callback(null, data);
  });
};

const movieQuery = (movieTitle) => {
  return new Promise((resolve, reject) => {
    fetchMovie(`${movieTitle}`, (err, data) => {
      if (err) {
        console.log('No such movie: ', movieTitle);
        return resolve(false);
      } else {
        return resolve(data);
      }
    });
  });
};

module.exports = { movieQuery };
