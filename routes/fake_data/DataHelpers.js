module.exports = function MakeDataHelpers(db) {
  return {
    saveTodo: (newTodo, callback) => {
      db.todos.push(newTodo);
      callback(null, true);
    },
    getTodos: (callback) => {
      callback(null, db.todos);
    }
  };
};
