
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
    console.log("TODOS", todos);
    for (const item in todos) {
      console.log("ITEM", item);
      const todo = todos[item];
      if (todo.category === "movie") {
        const $movie = $('.movie');
        const data = JSON.parse(todo["info"]);
        console.log(todo);
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#movie${item}">
        ${data["Title"]}</button></p>
    <div class="modal fade" id="movie${item}" tabindex="-1" role="dialog" aria-labelledby="movieLabel${item}"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data["Title"]}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Year: ${data["Genre"]}</p>
            <p>Rated: ${data["Rated"]}</p>
            <p>Actors: ${data["Actors"]}</p>
            <p>Reviews: ${data["imdbRating"]}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
`);
        $movie.prepend($content);
      }
      if (todo.category === "restaurant") {
        const $food = $('.food');
        const data = JSON.parse(todo["info"]);
        console.log(JSON.parse(todo["info"]));
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#food${item}">
    ${data["name"]}</button></p>
<div class="modal fade" id="food${item}" tabindex="-1" role="dialog" aria-labelledby="foodLabel${item}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data["name"]}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Cuisine: ${data["categories"][0]["title"]}</p>
      <p>Address: ${data["location"]["display_address"][0]}\n${data["location"]["display_address"][1]}</p>
      <p></p>
      <p>Price: ${data["price"]}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        `);
        $food.prepend($content);
      }
      if (todo.category === "book") {
        const $book = $('.book');
        console.log(JSON.parse(todo["info"]));
        const data = JSON.parse(todo["info"]);
        if(data["categories"] === undefined) {
          category = 'Unlisted'
        } else {
          category = data["categories"][0]
        }
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#book${item}">
    ${data["title"]}</button></p>
<div class="modal fade" id="book${item}" tabindex="-1" role="dialog" aria-labelledby="bookLabel${item}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data["title"]}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Authors: ${data["authors"][0]}</p>
      <p>Genre: ${category}</p>
      <p>Publisher: ${data["publisher"]}</p>
      <p>Rating: ${data["averageRating"]} / 5</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`);
        $book.prepend($content);
      }
      if (todo.category === "product ") {
        const $product = $('.product');
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product${item}">
    ${item["title"]}</button></p>
<div class="modal fade" id="product${item}" tabindex="-1" role="dialog" aria-labelledby="productLabel${item}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${item["title"]}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Find on Amazon: <a href=https://www.amazon.ca/s?k=${item["title"]}>${item["title"]}</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>`);
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

  // $('#navbarSupportedContent > li').submit(function(event) {
  //   event.preventDefault()
  //   $(this).hide()
  // })

  loadTodos();
});

