import React from 'react';
import BaiduMap from '../components/BaiduMap';
import SiteNav from '../components/SiteNav';
import MainContactForm from '../components/MainContactForm';
import ContactList from '../components/ContactList';
import SocialShare from '../components/SocialShare';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <SiteNav />
        <BaiduMap language={this.props.language}/>
        <div className="container big-lower-margin wow fadeIn">
          <div className="text-center central-info">
            <h1 className="big-head">{this.props.language === "zh"? "联系我们": "Contact us"}</h1>
          </div>
          <Row>
            <Col md={4}>
              <ContactList language={this.props.language}/>
            </Col>
            <Col md={8}>
              <MainContactForm language={this.props.language}/>
            </Col>
          </Row>
        </div>
        <SocialShare language={this.props.language}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Contact);