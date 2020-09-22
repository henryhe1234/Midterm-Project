
$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   console.log(users);
  // });

  //document.getElementById('textbox_id').value

  $('#new-todo').on('submit', function (event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    $.post("/todos", serializedData) //returns promise.
      .then((res) => {
        console.log("HERERES:", res)
      });
  });
});
