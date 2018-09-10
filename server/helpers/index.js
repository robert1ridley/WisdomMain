const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt)
  return hash;
}

exports.encryptPassword = encryptPassword;