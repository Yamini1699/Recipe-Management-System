const jwt = require("jsonwebtoken");

const tokenGenerate = (id) => {
  return jwt.sign({ id }, "Thunderbay", { expiresIn: "2D" });
};

module.exports = tokenGenerate;
