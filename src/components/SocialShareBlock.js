import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SocialShareBlock extends React.Component {
  render () {
    return (
      <Row className="central-info wow fadeInLeft">
        <Col md={3} sm={3} />
        <SocialItem img="fa fa-facebook fa-3x circle-child"/>
        <SocialItem img="fa fa-weixin fa-3x circle-child"/>
        <SocialItem img="fa fa-weibo fa-3x circle-child"/>
        <Col md={3} sm={4} />
      </Row>
    )
  }
}

class SocialItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
        hover: false
    };
}

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render () {
    var buttonStyle = !this.state.hover === true? styles.regButton: styles.hoverButton;
    return (
      <Col md={2} sm={2} xs={12}>
          <div 
            className="circle lower-margin"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            style={buttonStyle}
          >
            <a className="white" href="#">
              <div style={styles.fill}>
                <i className={this.props.img} aria-hidden="true"></i>
              </div>
            </a>
          </div>
      </Col>
    )
  }
}

const styles = {
  fill: {
    width: 80,
    height: 80
  },

  regButton: {
    backgroundColor: '#39b6b3'
  },

  hoverButton: {
    backgroundColor: 'rgb(85, 87, 91)'
  }
}