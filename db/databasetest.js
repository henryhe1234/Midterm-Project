const {addBooks,addMovie,addProduct,addRestaurant,addUser,getItemsListByUserId,editScheduled_dateByUserIdAndTitle,editCompleted_dateByUserIdAndTitle,deleteTaskItemByUserIdAndTitle} = require("./database");

let user = {
  name:'name',
  email:'email',
  password:'password'
}
let user_id = 1;
let title = "title";
let create_on = '2010-08-01';
let scheduled_date = '2010-08-02';
let completed_date = '2010-08-03';
let book = 'this is a book';
let movie = 'this is a movie';
let product = 'this is a product';
let restaurant = 'this is a restaurant';
// addUser(user);
// addRestaurant(user_id,title,create_on,scheduled_date,completed_date,restaurant);
// getItemsListByUserId(user_id);
// editScheduled_dateByUserId('2020-09-20',1,'winter break task');
// deleteTaskItemByUserIdAndTitle(user_id,title);

