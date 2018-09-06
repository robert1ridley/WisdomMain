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

export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    job: '',
    nameError: null,
    emailError: null,
    messageError: null,
    sendingError: null,
    isSnackBarVisible: false,
    submissionPending: false
  }

  componentDidMount() {
    this.setState({
      job: this.props.position
    })
  }
  
  updateContactData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = () => {
    this.setState({ submissionPending: true });
    const { name, email, message, job } = this.state;
    const payload = {
      name: name,
      email: email,
      message: message,
      job: job
    }
    fetch(`${BASE_URL}/jobenquiry`, { 
      headers: { 
        'content-type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(processResponse)
    .then(res => {
      const { data } = res;
      if(data.error.isError){
        this.setState({
          nameError: data.error.name,
          emailError: data.error.email,
          messageError: data.error.message,
          sendingError: data.error.sendingError,
          submissionPending: false
        })
      }
      else {
        this.setState({
          name: '',
          email: '',
          message: '',
          nameError: null,
          emailError: null,
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
    console.log(this.props)
    var data = this.props.language === "zh"? placeholders.chinese: placeholders.english;
    return (
      <form>
        {
          this.state.sendingError &&
          <HelpBlock>{this.state.sendingError}</HelpBlock>
        }
        <FormGroup bsSize="large">
          <FormControl
            type="name"
            value={this.state.name}
            onChange={this.updateContactData}
            placeholder={data.name} 
            className="form-entry" 
            name="name" 
            required
          />
          {
            this.state.nameError &&
            <HelpBlock>{this.state.nameError}</HelpBlock>
          }
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl 
            type="email"
            value={this.state.email}
            onChange={this.updateContactData}
            placeholder={data.email} 
            className="form-entry" 
            name="email"
            required
          />
          {
            this.state.emailError &&
            <HelpBlock>{this.state.emailError}</HelpBlock>
          }
        </FormGroup>
        <FormGroup controlId="formControlsTextarea" bsSize="large">
          <FormControl 
            componentClass="textarea" 
            placeholder={data.message}
            value={this.state.message}
            onChange={this.updateContactData}
            rows="6" 
            className="form-entry" 
            name="message"
            required
          />
          {
            this.state.messageError &&
            <HelpBlock>{this.state.messageError}</HelpBlock>
          }
        </FormGroup>
        <Button 
          className="form-submit"
          onClick={this.formSubmit}
          disabled={this.state.submissionPending}
        >
          {data.send}
        </Button>
        <Button className="form-close" onClick={this.props.close}>
          {data.close}
        </Button>
        {/* SNACKBAR */}
        <div id="snackbar" className={!this.state.isSnackBarVisible ? "hide" : "show"}>消息成功发送</div>
        {/* SNACKBAR */}
      </form>
    )
  }
}