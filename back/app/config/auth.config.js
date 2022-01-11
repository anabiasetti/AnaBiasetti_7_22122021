const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: 24 * 60 * 60,
};
