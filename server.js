// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require("cookie-session");

// PG database client/connection setup

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

//cookiesession for user authentication
app.use(cookieSession({
  name: 'session',
  keys: ['I am the very model of a scientist salarian', "I've studied species Turian, Asari, and Batarian", "I've mastered genetics(as a subset of biology)", "because I am a expert (which I know is a tautology)"]
}));



// Separated Routes for each Resource

// Todo Routes

const todosRoutes = require("./routes/todos");

// Login && Register Routes

const login = require("./routes/login");
const registry = require("./routes/registry");

// Mount all resource routes
app.use("/todos", todosRoutes);
app.use("/login", login);
app.use("/registry",registry);

//for logout button. Wipes cookie.
app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
