import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SocialShareBlock extends React.Component {
  componentDidMount () {
    var script = document.createElement('script');
    script.src = "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=408841";
    document.body.appendChild(script);
    
}

  render () {
    return (
      // <Row className="central-info wow fadeInLeft">
      //   <Col md={3} sm={3} />
      //   <SocialItem img="fa fa-facebook fa-3x circle-child"/>
      //   <SocialItem img="fa fa-weixin fa-3x circle-child"/>
      //   <SocialItem img="fa fa-weibo fa-3x circle-child"/>
      //   <Col md={3} sm={4} />
      // </Row>
      <div className="comment">
        <div class="list-main-left-hover bdsharebuttonbox" data-tag="share_1">
            <span class="list-main-left-hovertit" href="javascript:;"></span>
            <a class="bds_weixin" data-cmd="weixin" href="javascript:;">微信朋友圈</a>
            <a class="bds_tsina" data-cmd="tsina" href="javascript:;">QQ空间</a>
            <a class="bds_qzone" data-cmd="qzone" href="javascript:;">微博</a>
        </div>
      </div>
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
            <a className="white" href="/">
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
    backgroundColor: '#7ebc59'
  },

  hoverButton: {
    backgroundColor: 'rgb(85, 87, 91)'
  }
}