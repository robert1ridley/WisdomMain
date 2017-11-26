import React from 'react';
import {Media} from 'react-bootstrap';

export default class CircleImageBlock extends React.Component {
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