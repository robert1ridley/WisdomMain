import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SocialShareBlock extends React.Component {
  componentDidMount() {
    var script = document.createElement('script');
    script.src = "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=408841";
    document.body.appendChild(script);  
  }

  render () {
    return (
      <Row className="central-info">
        <Col md={3} sm={3} />
          <SocialItem itemClass="bds_weixin" data="weixin" />
          <SocialItem itemClass="bds_tsina" data="tsina" />
          <SocialItem itemClass="bds_qzone" data="qzone" />
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
          <div className="bdsharebuttonbox" data-tag="share_1">
            <div style={styles.fill} className="white">
              <a 
                className={this.props.itemClass} 
                data-cmd={this.props.data}
                style={{width:80, height: 80, margin: 0, backgroundImage: 'none'}} 
                href="javascript:;"
              />
            </div>
          </div>
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
    backgroundColor: '#1B93D2'
  },

  hoverButton: {
    backgroundColor: '#1B93D2',
    opacity: 0.6
  }
}