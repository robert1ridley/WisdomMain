import React from 'react';
import { connect } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import '../styles/footer.css';
import footerdata from '../data/footerdata';
import partnersimgdata from '../data/partnersdata';
import beian from '../images/beian.png';


const PartnersList = () => {
  const partnersImgLinks = partnersimgdata.map((dataitem, index) => 
    <Col md={2} xs={4} key={index}>
      <a href={dataitem.linkurl} target="_blank" rel="noopener">
        <LazyLoad offsetVertical={300}>
          <div className="tooltip1">
            <span className="tooltiptext">{dataitem.name}</span>
            <Image 
              className="center-img" 
              style={{marginTop: 0, marginBottom: 10, border: '1px solid #666666'}} 
              alt={'合作伙伴' + index}
              src={dataitem.imgurl} responsive 
            />
          </div>
        </LazyLoad>
      </a>
    </Col>
  )
  return (
    <div className="central-info">
      <Row className="row-container">
        {partnersImgLinks}
      </Row>
    </div>
  )
}

class Footer extends React.Component {

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render () {
    const { language } = this.props;
    const footerAll = language === "zh"? footerdata.chinese: footerdata.english;
    const footerHead = footerAll.pagehead;
    const footerItems = footerAll.footerItems.map((footerItem, idx) => 
      <Col md={2} xs={4} key={idx}>
        <Link to={footerItem.header.link} onClick={() => this.updatePath(footerItem.header.link)}>
          <h4 className="footer-head">{footerItem.header.text}</h4>
        </Link>
          {footerItem.subItems.map((singleSub, index) =>
            <Link to={singleSub.link} key={index} onClick={() => this.updatePath(singleSub.link)}>
              <p key={index}>{singleSub.text}</p>
            </Link>
          )}
      </Col>
  )

    return (
      <div>
        <div className="container" style={{paddingTop: 45, paddingBottom: 40}}>
          <h1 
            className={language === "zh" ? "chinese-big-head text-center" : "big-head text-center"}
            style={{marginTop: 0, marginBottom: 30}}
          >
            {footerHead.text}
          </h1>
          <PartnersList />
        </div>
        <div id="footer">
          <div className="container">
            <Row>
              {footerItems}
            </Row>
          </div>
        </div>
        {/* BEIAN PART */}
        <div style={{width:"500px", margin:"0 auto", padding: "20px 0"}}>
          <p style={{height:"20px", lineHeight:"20px", margin: "0px 0px 0px 5px", color:"#939393"}}>版权所有 江苏智道工程技术有限公司</p>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602010751" style={{display:"inline-block", textDecoration:"none", height: "20px", lineHeight:"20px"}}>
            <p style={{height:"20px", lineHeight:"20px", margin: "0px 0px 0px 5px", color:"#939393"}}>
              <span>苏公网安备 32010602010751号 &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img src={beian} style={{float:"left"}}/>
              <span>苏ICP备16027299号-2</span>
            </p>
          </a>
        </div>
        {/* BEIAN PART */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      language: state.language,
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Footer);