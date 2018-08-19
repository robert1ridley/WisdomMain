import React from 'react';
import { connect } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footer from '../images/footer.jpg';
import '../styles/footer.css';
import footerdata from '../data/footerdata';

class Footer extends React.Component {
  render () {
    const footerAll = this.props.language === "zh"? footerdata.chinese: footerdata.english;
    const footerHead = footerAll.pagehead;
    const footerItems = footerAll.footerItems.map((footerItem, idx) => 
      <Col md={2} xs={4} key={idx}>
        <Link to={footerItem.header.link}>
          <h4 className="footer-head">{footerItem.header.text}</h4>
        </Link>
          {footerItem.subItems.map((singleSub, index) =>
            <Link to={singleSub.link} key={index}>
              <p key={index}>{singleSub.text}</p>
            </Link>
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
          <div className="container">
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