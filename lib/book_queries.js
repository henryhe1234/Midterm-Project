const books = require('google-books-search-2');

const bookQuery = titleStr => {

  const options = {
    field: 'title',
    limit: 1,
    type: 'books',
    order: 'relevance',
    lang: 'en'
  };

  books.search(titleStr, options)
    .then((res) => {
      console.log(res);
      return res }
    )
    .catch(err => console.log(error));
};

function isPromise(promise) {
  return !!promise && typeof promise.then === 'function'
}

module.exports = { bookQuery };


