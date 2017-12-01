import React from 'react';
import { connect } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';
import footer from '../images/footer.jpg';
import '../styles/footer.css';
import footerdata from '../data/footerdata';

class Footer extends React.Component {
  render () {
    const footerAll = this.props.language === "zh"? footerdata.chinese: footerdata.english;
    const footerHead = footerAll.pagehead;
    const footerItems = footerAll.footerItems.map((footerItem, idx) => 
      <Col md={2} xs={6} key={idx}>
        <h4 className="footer-head">{footerItem.header}</h4>
          {footerItem.subItems.map((singleSub, index) =>
            <p key={index}>{singleSub}</p>
          )}
      </Col>
  )

    return (
      <div>
        <div className="container" style={{padding: 40}}>
          <h1 className="big-head text-center lower-margin">{footerHead.text}</h1>
          <Image className="center-img" src={footer} responsive/>
        </div>
        <div id="footer">
          <div className="container-fluid">
            <Row>
              {footerItems}
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Footer);