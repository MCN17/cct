const jwt = require('jsonwebtoken');

require('dotenv').config()
console.log(process.env)

const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};