
$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   console.log(users);
  // });

  const loadTodos = () => {
    $.ajax(
      {
        method: "GET",
        url: "/todos",
        success: function(todos) {
          renderTodos(todos);
        },
        error: function(error) {
          console.log("ERROR IN RENDER: ", error);
        }
      }
    );
  };
  const renderTodos = (todos) => {
    const $lists = $('.lists');
    $lists.empty();
    for (const item in todos) {
      const todo = todos[item];

      if (todo.category === "movie") {
        const $movie = $('.movie');
        const $content = $('<p>').text(todo.title);
        $movie.prepend($content);
      }
      if (todo.category === "restaurant") {
        const $food = $('.food');
        const $content = $('<p>').text(todo.title);
        $food.prepend($content);
      }
      if (todo.category === "book") {
        const $book = $('.book');
        const $content = $('<p>').text(todo.title);
        $book.prepend($content);
      }
      if (todo.category === "product ") {
        const $product = $('.product');
        const $content = $('<p>').text(todo.title);
        $product.prepend($content);
      }
    }

  };
  const $newTodo = $('#new-todo');

  $newTodo.on('submit', function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    $(this).children('input').val('');
    $.post('/todos', serializedData)
      .then((response) => {
        loadTodos();
        $(this).children('input').val('');
      });
  });
  // $('#new-todo').on('submit', function(event) {
  //   event.preventDefault();
  //   const serializedData = $(this).serialize();
  //   $.post("/todos", serializedData) //returns promise.
  //     .then((res) => {
  //       console.log("HERERES:", res);
  //     });
  // });
  $('#loginform').on('submit', function(event){
    event.preventDefault();
    $(this).css("display","none")
    $('#navbarSupportedContent > form').css("display", "block")
  })

  loadTodos();
});

