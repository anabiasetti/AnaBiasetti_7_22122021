const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Resync Db");
});

const corsOptions = {
  origin: "http://localhost:3000",
};

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//Middlewares
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//cors
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("common"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Goupomania application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
