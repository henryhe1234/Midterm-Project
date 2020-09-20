
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    console.log(users);
  });
  const loadTodos = () => {
    $.ajax({
      method: "GET",
      url: "/todos",
      success: (data) => {
        renderTodos(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  };

  const createNewTodo = (todo) => {
    const $todo = $('<div class="todo">');

    const $title = $('<h1>').text(todo);

    $todo.append($title);
  };

  const renderTodos = (todos) => {
    const $todosDiv = $(".todos");

    $todosDiv.empty();

    for (const id in todos) {
      const todo = todos[id];
      const $todo = createNewTodo(todo);
      $todosDiv.prepend($todo);
    }
  };
});
