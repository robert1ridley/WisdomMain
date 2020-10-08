exports.ConsultMessage = (name, email, phonenumber, message) => {
  const finalMessage = {
    from: process.env.MAIL_CLIENT,
    to: process.env.MAIL_CLIENT,
    subject: `${name} - 从网站发的`,
    html: `<p>姓名：${name}</p><p>邮箱：${email}</p><p>电话：${phonenumber}</p><p>${message}</p>`,
    replyto: email
  }
  return finalMessage;
}