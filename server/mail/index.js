require('dotenv').config();
const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');

exports.consultEmail = function(name, email, emailMessage) {
  const SESCREDENTIALS = {
    accessKeyId : process.env.ACCESS_KEY_ID,
    secretAccessKey : process.env.SECRET_ACCESS_KEY
  };

  const transporter = nodemailer.createTransport(sesTransport({
      accessKeyId: SESCREDENTIALS.accessKeyId,
      secretAccessKey: SESCREDENTIALS.secretAccessKey,
      rateLimit: 5
  }));
      
  let message = {
      from: `${name} <${process.env.MAIL_CLIENT}>`,
      to: `江苏智道 <${process.env.MAIL_CLIENT}>`,
      subject: `${name} – 咨询`,
      html: `<p>${emailMessage}</p></br/><p style="color: #6a6f7c">发信息人的邮件: ${email}</p>`
  };

  return {
    transporter: transporter, 
    messageDetails: message
  };
}