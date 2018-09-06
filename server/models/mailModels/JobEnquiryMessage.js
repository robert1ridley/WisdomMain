exports.JobEnquiryMessage = (name, email, message, job) => {
  const finalMessage = {
    from: `${name} <${process.env.MAIL_CLIENT}>`,
    to: `江苏智道 <${process.env.MAIL_CLIENT}>`,
    subject: `${job} – 工作咨询`,
    html: `<p>${message}</p></br/><p style="color: #6a6f7c">发信息人的邮件: ${email}</p>`
  }
  return finalMessage;
}