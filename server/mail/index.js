require('dotenv').config();

exports.emailCredentials = function() {
  const OUTLOOKCREDENTIALS = {
    accountname: process.env.OUTLOOK_ACCOUNT_NAME,
    pass: process.env.OUTLOOK_ACCOUNT_PASS,
  }
  console.log(OUTLOOKCREDENTIALS)
  return OUTLOOKCREDENTIALS;
}
