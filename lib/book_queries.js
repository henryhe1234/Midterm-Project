const books = require('google-books-search-2');

const bookQuery = titleStr => {

  const options = {
    field: 'title',
    offset: 0,
    limit: 1,
    type: 'books',
    order: 'relevance',
    lang: 'en'
  };

  books.search(titleStr, options)
    .then(function(results) {
      console.log(results);
    })
    .catch(function(error) {
      console.log(error);
    });
};

module.exports = { bookQuery };


