const express = require("express");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("express/lib/response");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "groupomania",
  password: "ilopqy6UQ2*iP0BJ7)3?",
  database: "groupomania_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
