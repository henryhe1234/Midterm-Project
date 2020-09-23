
$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   console.log(users);
  // });
  $('#new-todo').on('submit', function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    $.post("/todos", serializedData) //returns promise.
      .then((res) => {
        console.log("HERERES:", res);
      });
  });
});

