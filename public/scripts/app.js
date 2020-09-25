/* global document */
/* eslint-env jquery */
$(() => {

  //Loads tasks
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

  //Radio buttons for changing categories
  const radioArr = `
  <form id="radioform">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="movieRadios1" value="book">
      <label class="form-check-label" for="movieRadios1">Book</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="bookRadios2" value="movie">
      <label class="form-check-label" for="bookRadios2">Movie</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="restaurantRadios3" value="restaurant">
      <label class="form-check-label" for="restaurantRadios3">Restaurant</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="radio" id="productRadios4" value="product">
      <label class="form-check-label" for="productRadios4">Product</label>
    </div>
  </form>`;

  //Generate tasks from database
  const renderTodos = (todos) => {
    const $lists = $('.lists');
    $lists.empty();
    console.log("TODOS", todos);
    for (const item in todos) {
      console.log("ITEM", todos[item]);
      const todo = todos[item];
      if (todo.category === "movie") {
        const $movie = $('.movie');
        const data = JSON.parse(todo["info"]);
        console.log(todo);
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#movie${todos[item]["id"]}">${data["Title"]}</button></p>
        <div class="modal fade" id="movie${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="movieLabel${todos[item]["id"]}"
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
                <p>Genre: ${data["Genre"]}</p>
                <p>Rated: ${data["Rated"]}</p>
                <p>Actors: ${data["Actors"]}</p>
                <p>Reviews: ${data["imdbRating"]}</p>
                <span class="${todos[item]["title"]}">${radioArr}</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary complete" data-dismiss="modal" id="${todos[item]["id"]}">Complete</button>
            </div>
          </div>
        </div>
        `);
        $movie.prepend($content);
      }
      if (todo.category === "restaurant") {
        const $food = $('.food');
        const data = JSON.parse(todo["info"]);
        if (data["categories"] === undefined) {
          cuisine = 'Unknown';
        } else {
          cuisine = data["categories"][0]["title"];
        }
        if (data["location"] === undefined){
          street = 'Unknown address'
          city = 'Unknown city'
        } else {
          street = data["location"]["display_address"][0]
          city = data["location"]["display_address"][1]
        }
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#food${todos[item]["id"]}">${data["name"]}</button></p>
        <div class="modal fade" id="food${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="foodLabel${todos[item]["id"]}"
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
                <p>Cuisine: ${cuisine}</p>
                <p>Address: ${street}\n${city}</p>
                <p>Price: ${data["price"]}</p>
                <span class="${todos[item]["title"]}">${radioArr}</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary complete" data-dismiss="modal" id="${todos[item]["id"]}">Complete</button>
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
        if (data["categories"] === undefined) {
          category = 'Unlisted';
        } else {
          category = data["categories"][0];
        }
        if (data["authors"] === undefined) {
          author = 'Unknown';
        } else {
          author = data["authors"][0];
        }
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#book${todos[item]["id"]}">${data["title"]}</button></p>
        <div class="modal fade" id="book${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="bookLabel${todos[item]["id"]}"
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
                <p>Authors: ${author}</p>
                <p>Genre: ${category}</p>
                <p>Publisher: ${data["publisher"]}</p>
                <p>Rating: ${data["averageRating"]} / 5</p>
                <span class="${todos[item]["title"]}">${radioArr}</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary complete" data-dismiss="modal" id="${todos[item]["id"]}">Complete</button>
              </div>
          </div>
        </div>
          `);
        $book.prepend($content);
      }
      if (todo.category === "product") {
        const $product = $('.product');
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product${todos[item]["id"]}">${todos[item]["title"]}</button></p>
        <div class="modal fade" id="product${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="productLabel${todos[item]["id"]}"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${todos[item]["title"]}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Find on Amazon: <a href=https://www.amazon.ca/s?k=${todos[item]["title"]}>${todos[item]["title"]}</a>
                <span class="${todos[item]["title"]}">${radioArr}</span>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-secondary complete" data-dismiss="modal" id="${todos[item]["id"]}">Complete</button>
              </div>
          </div>
        </div>
          `);
        $product.prepend($content);
      }
    }
  };

  //Adds a new task to the list
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

  //Deletes a completed task
  $(document).on('click', '.complete', function() {
    $.post('/todos/delete', { taskId: this.id })
      .then((response) => {
        loadTodos();
      });
  });

  //Changes category via radio buttons
  $(document).on('change', '[type="radio"]', function() {
    let title = $(this).closest('span').attr('class');
    console.log();
    $.post('/todos/edit', { category:$(this).val(), title})
      .then(response => {
        location.reload();
        loadTodos();
      });
  });

  //Calls tasks on first page load
  loadTodos();
});
