import React from 'react';
import { FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { processResponse } from '../utils/index';
import '../styles/snackbar.css';

if (typeof document !== 'undefined') {
  var pathArray = document.location.href.split( '/' );
  var protocol = pathArray[0];
  var host = pathArray[2];
  var BASE_URL = protocol + '//' + host;
}

const placeholders = {
  chinese:
    {
      name: "名字",
      email: "电子邮件",
      phonenumber: '电话号码',
      message: "留言",
      send: "发邮件",
      close: "关闭"
    },
  english:
    {
      name: "Name",
      email: "Email",
      phonenumber: 'Phone Number',
      message: "Message",
      send: "Send",
      close: "Close"
    }
}

export default class MainContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    phonenumber: '',
    message: '',
    nameError: null,
    emailError: null,
    phonenumberError: null,
    messageError: null,
    sendingError: null,
    isSnackBarVisible: false,
    submissionPending: false
  }
  
  updateContactData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = () => {
    this.setState({ submissionPending: true });
    const { name, email, phonenumber, message } = this.state;
    const payload = {
      name: name,
      email: email,
      phonenumber: phonenumber,
      message: message
    }
    console.log(payload)
    fetch(`${BASE_URL}/consult`, { 
      headers: { 
        'content-type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(processResponse)
    .then(res => {
      const { data } = res;
      console.log(data.error)
      if(data.error.isError){
        this.setState({
          nameError: data.error.name,
          emailError: data.error.email,
          phonenumberError: data.error.phonenumber,
          messageError: data.error.message,
          sendingError: data.error.sendingError,
          submissionPending: false
        })
      }
      else {
        this.setState({
          name: '',
          email: '',
          phonenumber: '',
          message: '',
          nameError: null,
          emailError: null,
          phonenumberError: null,
          messageError: null,
          sendingError: null,
          isSnackBarVisible: true,
          submissionPending: false
        })
        setTimeout (() => { 
          this.setState({
            isSnackBarVisible: false
          }) 
        }, 3000);
      }
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render () {
    var data = this.props.language === "zh"? placeholders.chinese: placeholders.english;
    return (
      <form>
        {
          this.state.sendingError &&
          <HelpBlock>{this.state.sendingError}</HelpBlock>
        }
        <FormGroup bsSize="large">
          <FormControl
            name="name"
            type="name"
            value={this.state.name}
            placeholder={data.name} 
            className="form-entry"
            onChange={this.updateContactData}
            required
          />
          {
            this.state.nameError &&
            <HelpBlock>{this.state.nameError}</HelpBlock>
          }
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl 
            name="email"
            type="email"
            value={this.state.email}
            placeholder={data.email} 
            className="form-entry" 
            onChange={this.updateContactData}
            required
          />
          {
            this.state.emailError &&
            <HelpBlock>{this.state.emailError}</HelpBlock>
          }
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl 
            name="phonenumber"
            type="tel"
            value={this.state.phonenumber}
            placeholder={data.phonenumber} 
            className="form-entry" 
            onChange={this.updateContactData}
            required
          />
          {
            this.state.phonenumberError &&
            <HelpBlock>{this.state.phonenumberError}</HelpBlock>
          }
        </FormGroup>
        <FormGroup controlId="formControlsTextarea" bsSize="large">
          <FormControl
            name="message"
            value={this.state.message}
            componentClass="textarea" 
            placeholder={data.message}
            rows="6" 
            className="form-entry"
            onChange={this.updateContactData}
            required
          />
          {
            this.state.messageError &&
            <HelpBlock>{this.state.messageError}</HelpBlock>
          }
        </FormGroup>
        <Button 
          onClick={this.formSubmit} 
          className="form-submit"
          disabled={this.state.submissionPending}
        >
          {data.send}
        </Button>
        {/* SNACKBAR */}
        <div id="snackbar" className={!this.state.isSnackBarVisible ? "hide" : "show"}>消息成功发送</div>
        {/* SNACKBAR */}
      </form>
    )
  }
}