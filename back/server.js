const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
//Middlewares
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Resync Db");
});

const corsOptions = {
  origin: "http://localhost:3000",
};
const helmet = require("helmet");
const morgan = require("morgan");
//cors,helmet,morgan
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("common"));

//static Images Folder

app.use("/Images", express.static("./Images"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// routes
app.use("/api/posts", require("./app/routes/post.routes"));
require("./app/routes/auth.routes")(app);
app.use("/api/users", require("./app/routes/user.routes"));
app.use("/api/comments", require("./app/routes/comment.routes"));
