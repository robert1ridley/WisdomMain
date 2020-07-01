exports.ConsultMessage = (name, email, message) => {
  const finalMessage = {
    from: process.env.MAIL_CLIENT,
    to: process.env.MAIL_CLIENT,
    subject: `${name} - 从网站发的`,
    html: `<p>${message}</p></br/><p style="color: #6a6f7c"></br><p>用户邮箱：${email}<p>`,
    replyto: email
  }
  return finalMessage;
}