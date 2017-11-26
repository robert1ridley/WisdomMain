import React from 'react';
import {Media} from 'react-bootstrap';
import contactdata from '../data/contactdata';

export default class ContactList extends React.Component {
  render () {
    return (
      <div className="lower-margin">
        <ContactBlock img="glyphicon glyphicon-home" 
          text={this.props.language==="zh"? contactdata.addressChinese: contactdata.addressEnglish}
        />
        <ContactBlock img="glyphicon glyphicon-earphone"
          text={contactdata.phone}
        />
        <ContactBlock img="glyphicon glyphicon-envelope"
          text={contactdata.email}
        />
      </div>
    )
  }
}

class ContactBlock extends React.Component {
  render () {
    return (
      <Media>
        <Media.Left>
          <div className="circle">
            <span className={this.props.img + " circle-child"}>
            </span>
          </div>
        </Media.Left>
        <Media.Body className="media-height">
          <div className="vert-align">
            <div className="block">
              <p>{this.props.text}</p>
            </div>
          </div>
        </Media.Body>
      </Media>
    )
  }
}