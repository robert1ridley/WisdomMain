import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

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
  render () {
    var data = this.props.language === "zh"? placeholders.chinese: placeholders.english;
    return (
      <form method="post" action="/consult">
        <FormGroup bsSize="large">
          <FormControl type="name" placeholder={data.name} className="form-entry" name="name" required/>
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl type="email" placeholder={data.email} className="form-entry" name="email" required/>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea" bsSize="large">
          <FormControl componentClass="textarea" placeholder={data.message} rows="6" className="form-entry" name="message" required/>
        </FormGroup>
        <Button type="submit" className="form-submit">
          {data.send}
        </Button>
        <Button className="form-close" onClick={this.props.close}>
          {data.close}
        </Button>
      </form>
    )
  }
}