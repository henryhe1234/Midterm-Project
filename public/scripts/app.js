$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    console.log(users);
  });

  $.ajax({
    method: "GET",
    url: "/todos"
  }).done((todos) => {
    console.log(todos);
  });

  const createNewTodo = (todo) => {
    const $todo = $('<div class="todo">');

    const $title = $('<h1>').text(todo);

    $todo.append($title);
  };

  const renderTodos = (todos) => {
    const $todosDiv = $(".todos");

    $todosDiv.epmty();

    for (const id in todos) {
      const todo = todos[id];
      const $todo = createNewTodo(todo);
      $todosDiv.prepend(todo);
    }
  };
});
