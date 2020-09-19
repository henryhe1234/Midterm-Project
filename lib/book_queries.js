const books = require('google-books-search');

const options = {
  field: 'title',
  limit: 1,
  type: 'books',
  order: 'relevance',
  lang: 'en'
};

const bookQuery = titleStr => {
    return new Promise((resolve, reject) => {
      books.search(titleStr, options, (err, data) => {
        if (err) {
          console.log('No such book: ', titleStr);
          return resolve(false);
        } else {
          console.log(data);
          return resolve(data[0]);
        }
      });
    })
};

module.exports = { bookQuery };


