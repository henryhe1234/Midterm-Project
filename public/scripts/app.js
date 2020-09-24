
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
        data = JSON.parse(todo["info"])
        console.log(todo)
        const $content = $(`
        <p>${data["Title"]}</p>
        <div class="popout">
          <p>Year: ${data["Genre"]}</p>
          <p>Rated: ${data["Rated"]}</p>
          <p>Actors: ${data["Actors"]}</p>
          <p>Reviews: ${data["imdbRating"]}</p>
      </div>`)

        $movie.prepend($content);
      }
      if (todo.category === "restaurant") {
        const $food = $('.food');
        data = JSON.parse(todo["info"])
        console.log(JSON.parse(todo["info"]))
        const $content = $(`<p>${data["name"]}</p>
        <div class='popout'>
          <p>Cuisine: ${data["categories"][0]["title"]}</p>
          <p>Address: ${data["location"]["display_address"][0]}\n${data["location"]["display_address"][1]}</p>
          <p></p>
          <p>Price: ${data["price"]}</p>
        </div>`);
        $food.prepend($content);
      }
      if (todo.category === "book") {
        const $book = $('.book');
        console.log(JSON.parse(todo["info"]))
        data = JSON.parse(todo["info"])
        const $content = $(`
        <p>${data["title"]}</p>
        <div class='popout'>
          <p>Authors: ${data["authors"][0]}</p>
          <p>Genre: ${data["categories"][0]}</p>
          <p>Publisher: ${data["publisher"]}</p>
          <p>Rating: ${data["averageRating"]}</p>
        </div>`);
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

