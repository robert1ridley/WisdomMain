import React from 'react';
import { FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { processResponse } from '../utils/index';
import '../styles/snackbar.css';

const BASE_URL = 'http://localhost:3000';

const placeholders = {
  chinese:
    {
      name: "名字",
      email: "电子邮件",
      message: "留言",
      send: "发邮件",
      close: "关闭"
    },
  english:
    {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      close: "Close"
    }
}

export default class MainContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    nameError: null,
    emailError: null,
    messageError: null,
    sendingError: null,
    isSnackBarVisible: false
  }
  
  updateContactData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = () => {
    const { name, email, message } = this.state;
    const payload = {
      name: name,
      email: email,
      message: message
    }
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
          messageError: data.error.message,
          sendingError: data.error.sendingError
        })
      }
      else {
        this.setState({
          nameError: null,
          emailError: null,
          messageError: null,
          sendingError: null,
          isSnackBarVisible: true
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
        <FormGroup controlId="formControlsTextarea" bsSize="large">
          <FormControl
            name="message"
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
        <Button onClick={this.formSubmit} className="form-submit">
          {data.send}
        </Button>
        {/* SNACKBAR */}
        <div id="snackbar" className={!this.state.isSnackBarVisible ? "hide" : "show"}>消息成功发送</div>
        {/* SNACKBAR */}
      </form>
    )
  }
}