let { Course , validateInput ,validateUser } = require("../models/user");

function validateUserInput(req, res, next) {
  let { error } = validateInput(req.body);
  if (error) return res.status(400).send(error.message);
  next();
}

module.exports = validateUserInput;
