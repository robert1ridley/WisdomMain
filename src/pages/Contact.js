import React from 'react';
// import BaiduMap from '../components/BaiduMap';
import ContactHead from '../headers/ContactHead';
import MainContactForm from '../components/MainContactForm';
import ContactList from '../components/ContactList';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const Contact = (props) => {
  const { language } = props;
  return (
    <div>
      <ContactHead />
      <div className="container big-lower-margin wow fadeIn">
        <div className="text-center central-info">
          <h1 className="big-head">{language === "zh"? "联系我们": "Contact us"}</h1>
        </div>
        <Row>
          <Col md={4}>
            <ContactList language={language}/>
          </Col>
          <Col md={8}>
            <MainContactForm language={language}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Contact);