require('dotenv').config();
const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');

exports.emailTransporter = function() {
  const SESCREDENTIALS = {
    accessKeyId : process.env.ACCESS_KEY_ID,
    secretAccessKey : process.env.SECRET_ACCESS_KEY
  };

  const transporter = nodemailer.createTransport(sesTransport({
      accessKeyId: SESCREDENTIALS.accessKeyId,
      secretAccessKey: SESCREDENTIALS.secretAccessKey,
      rateLimit: 5
  }));

  return transporter
}