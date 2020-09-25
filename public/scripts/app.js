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
        success: function (todos) {
          renderTodos(todos);
        },
        error: function (error) {
          console.log("ERROR IN RENDER: ", error);
        }
      }
    );
  };

  const renderTodos = (todos) => {
    const $lists = $('.lists');
    $lists.empty();
    //console.log("TODOS", todos);
    for (const item in todos) {
      console.log(item + 'hahhaha');
      console.log("ITEM", todos[item]);
      const todo = todos[item];
      if (todo.category === "movie") {
        const $movie = $('.movie');
        const data = JSON.parse(todo["info"]);
        //console.log(todo);
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#movie${todos[item]["id"]}">
        ${data["Title"]}</button></p>
    <div class="modal fade" id="movie${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="movieLabel${todos[item]["id"]}}"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="example${todos[item]["id"]}">${data["Title"]}</h5>
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
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Complete</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
`);
        $movie.prepend($content);
        const $cagagoryButton = $(`
        <form Method = "POST" action="/todos/edit">
        <input type="radio" id="book"  name="category" value="${todos[item]["title"]}!book">
        <label for="book">book</label><br>
        <input type="radio" id="restaurant" name="category" value="${todos[item]["title"]}!restaurant">
        <label for="restaurant">restaurant</label><br>
        <input type="radio" id="movie" name="category" value="${todos[item]["title"]}!movie">
        <label for="movie">movie</label>
        <input type="radio" id="product" name="category" value="${todos[item]["title"]}!product">
        <label for="product">product</label>
        <input type="submit" value="Submit">
        </form>
        `)
        $movie.prepend($cagagoryButton);
      }
      if (todo.category === "restaurant") {
        console.log(item);
        const $food = $('.food');
        const data = JSON.parse(todo["info"]);
        //console.log(JSON.parse(todo["info"]));
        if(data["categories"] === undefined){
          const cuisine = 'Unknown'
        } else {
          const cuisine = data["categories"][0]["title"]
        }
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#food${todos[item]["id"]}">
    ${data["name"]}</button></p>
<div class="modal fade" id="food${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="foodLabel${todos[item]["id"]}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="example${todos[item]["id"]}">${data["name"]}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Cuisine: ${cuisine}</p>
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
        const $cagagoryButton = $(`
        <form Method = "POST" action="/todos/edit">
        <input type="radio" id="book"  name="category" value="${todos[item]["title"]}!book">
        <label for="book">book</label><br>
        <input type="radio" id="restaurant" name="category" value="${todos[item]["title"]}!restaurant">
        <label for="restaurant">restaurant</label><br>
        <input type="radio" id="movie" name="category" value="${todos[item]["title"]}!movie">
        <label for="movie">movie</label>
        <input type="radio" id="product" name="category" value="${todos[item]["title"]}!product">
        <label for="product">product</label>
        <input type="submit" value="Submit">
        </form>
        `)
        $food.prepend($cagagoryButton);

      }
      if (todo.category === "book") {
        const $book = $('.book');
        //console.log(JSON.parse(todo["info"]));
        const data = JSON.parse(todo["info"]);
        if(data["categories"] === undefined) {
          category = 'Unlisted'
        } else {
          category = data["categories"][0]
        }
        if(data["authors"] === undefined){
          author = 'Unknown'
        } else {
          author = data["authors"][0]
        }
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#book${todos[item]["id"]}">
    ${data["title"]}</button></p>
<div class="modal fade" id="book${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="bookLabel${todos[item]["id"]}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="example${todos[item]["id"]}">${data["title"]}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Authors: ${author}</p>
      <p>Genre: ${category}</p>
      <p>Publisher: ${data["publisher"]}</p>
      <p>Rating: ${data["averageRating"]} / 5</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-secondary complete" id='${todos[item]["id"]}'>Complete</button>

      </div>
    </div>
  </div>`);
        $book.prepend($content);
        const $cagagoryButton = $(`
        <form Method = "POST" action="/todos/edit">
        <input type="radio" id="book"  name="category" value="${todos[item]["title"]}!book">
        <label for="book">book</label><br>
        <input type="radio" id="restaurant" name="category" value="${todos[item]["title"]}!restaurant">
        <label for="restaurant">restaurant</label><br>
        <input type="radio" id="movie" name="category" value="${todos[item]["title"]}!movie">
        <label for="movie">movie</label>
        <input type="radio" id="product" name="category" value="${todos[item]["title"]}!product">
        <label for="product">product</label>
        <input type="submit" value="Submit">
        </form>
        `)
        $book.prepend($cagagoryButton);
      }
      if (todo.category === "product ") {
        const $product = $('.product');
        const $content = $(`
        <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product${todos[item]["id"]}">
    ${item["title"]}</button></p>
<div class="modal fade" id="product${todos[item]["id"]}" tabindex="-1" role="dialog" aria-labelledby="productLabel${todos[item]["id"]}"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="example${todos[item]["id"]}">${item["title"]}</h5>
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

  $newTodo.on('submit', function (event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    console.log("SD:", serializedData)
    $(this).children('input').val('');
    $.post('/todos', serializedData)
      .then((response) => {
        loadTodos();
        $(this).children('input').val('');
      });
  });

  // $('#navbarSupportedContent > li').submit(function(event) {
  //   event.preventDefault()
  //   $(this).hide()#\31 5
  // })
  $(document).on('click', '.complete', function () {
    //console.log("THIS WORK?", this.id)
    $.post('/todos/delete', { taskId: this.id })
      .then(() => {
        loadTodos();
      });
  })

  loadTodos();
});

