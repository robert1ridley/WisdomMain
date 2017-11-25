import React from 'react';
import {Media} from 'react-bootstrap';

export default class ContactList extends React.Component {
  render () {
    return (
      <div className="lower-margin">
        <ContactBlock img="glyphicon glyphicon-home"/>
        <ContactBlock img="glyphicon glyphicon-earphone"/>
        <ContactBlock img="glyphicon glyphicon-envelope"/>
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
              <p>Text</p>
            </div>
          </div>
        </Media.Body>
      </Media>
    )
  }
}