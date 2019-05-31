const { User } = require('./../models/index');

const createUser = (data) =>    User.create(data)
module.exports = { createUser };