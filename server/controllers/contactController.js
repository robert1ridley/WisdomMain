const mail = require('../mail');
const consult = require('../models/mailModels/ConsultMessage');
const jobApplication = require('../models/mailModels/JobEnquiryMessage');
const validator = require('validator');

exports.emailAdmin = function(req, res, err) {
  const { name, email, message } = req.body;
  const errorsObject = validateEmailInput(name, email, message);
  if (errorsObject.isError) {
    res.status(500).json({
      success: false,
      error: errorsObject
    })
    return errorsObject;
  }
  
  const emailTransporter = mail.emailTransporter();
  const messageDetails = consult.ConsultMessage(name, email, message);
  
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

const validateEmailInput = function(name, email, message) {
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