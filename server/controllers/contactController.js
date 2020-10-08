const mail = require('../mail');
const consult = require('../models/mailModels/ConsultMessage');
const jobApplication = require('../models/mailModels/JobEnquiryMessage');
const validator = require('validator');
var nodeoutlook = require('nodejs-nodemailer-outlook')

exports.emailAdmin = function(req, res, err) {
  const { name, email, phonenumber, message } = req.body;
  console.log(req.body)
  const errorsObject = validateEmailInput(name, email, phonenumber, message);
  if (errorsObject.isError) {
    res.status(500).json({
      success: false,
      error: errorsObject
    })
    return errorsObject;
  }
  
  const outlookCredentials = mail.emailCredentials();
  const messageDetails = consult.ConsultMessage(name, email, phonenumber, message);
  console.log("message details: ", messageDetails)
  nodeoutlook.sendEmail({
    auth: {
      user: outlookCredentials.accountname,
      pass: outlookCredentials.pass
    },
    from: outlookCredentials.accountname,
    to: messageDetails.to,
    subject: messageDetails.subject,
    html: messageDetails.html,
    replyTo: messageDetails.replyto,
    onError: (e) => {
      errorsObject.isError = true;
      errorsObject.sendingError = "发送消息有问题。";
      console.log(e)
      res.status(500).json({
        success: false,
        error: errorsObject
      })
    },
    onSuccess: (i) => {
      console.log(i)
      res.status(200).json({
        success: true,
        error: errorsObject
      })
    }
  })
}

exports.jobEnquiry = function(req, res, err) {
  const { name, email, message, job } = req.body;
  const errorsObject = validateJobEnquiry(name, email, message);
  if (errorsObject.isError) {
    res.status(500).json({
      success: false,
      error: errorsObject
    })
    return errorsObject;
  }
  
  const emailTransporter = mail.emailTransporter();
  const messageDetails = jobApplication.JobEnquiryMessage(name, email, message, job);
  
  emailTransporter.sendMail(messageDetails, function(error, info){
    if(error){
      errorsObject.isError = true;
      errorsObject.sendingError = "发送消息有问题。";
      res.status(500).json({
        success: false,
        error: errorsObject
      })
    }else{
      res.status(200).json({
        success: true,
        error: errorsObject
      });
    }
  })
}

const validateEmailInput = function(name, email, phonenumber, message) {
  let errors = {
    isError: false,
    name: null,
    email: null,
    phonenumber: null,
    message: null,
    sendingError: null
  };
  if (validator.isEmpty(name)) {
    errors.isError = true
    errors.name = "请输入您的姓名。"
  }
  if (!validator.isEmail(email)) {
    errors.isError = true
    errors.email = "请输入有效的电子邮件地址。"
  }
  if (validator.isEmpty(phonenumber)) {
    errors.isError = true
    errors.phonenumber = "请输入有效的电话号码。"
  }
  if (validator.isEmpty(message)) {
    errors.isError = true
    errors.message = "请输入您的信息。"
  }
  return errors;
}

const validateJobEnquiry = function(name, email, message) {
  let errors = {
    isError: false,
    name: null,
    email: null,
    message: null,
    sendingError: null
  };
  if (validator.isEmpty(name)) {
    errors.isError = true
    errors.name = "请输入您的姓名。"
  }
  if (!validator.isEmail(email)) {
    errors.isError = true
    errors.email = "请输入有效的电子邮件地址。"
  }
  if (validator.isEmpty(message)) {
    errors.isError = true
    errors.message = "请输入您的信息。"
  }
  return errors;
}