$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (const user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
  $.ajax({
    method: "GET",
    url:"/api/todos"
  }).done((todos) => {
    for (const todo of todos) {
      $("<h1>").text(todo).appendTo($("body"));
    }
  });
});
