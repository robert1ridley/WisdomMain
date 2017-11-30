import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import footer from '../images/footer.jpg';
import '../styles/footer.css';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="wow fadeInRight">
        {/* <div className="container" style={{padding: 40}}>
          <h1 className="big-head text-center lower-margin">我们的客户包括</h1>
          <Image className="center-img" src={footer} responsive/>
        </div>
        <div id="footer">
          <div className="container-fluid">
            <Row>
              <Col md={2} xs={6}>
                <h4 className="footer-head">关于智道</h4>
                <p>公司概况</p>
                <p>企业文化</p>
                <p>组织架构</p>
                <p>资质荣誉</p>
                <p>大事记</p>
                <p>社会责任</p>
                <p>董事长致辞</p>
              </Col>
              <Col md={2} xs={6}>
                <h4 className="footer-head">新闻中心</h4>
                <p>企业新闻</p>
                <p>行业动态</p>
              </Col>
              <Col md={2} xs={6}>
                <h4 className="footer-head">解决方案</h4>
                <p>主营业务</p>
                <p>创新与研发</p>
                <p>自主知识产权技术和装置介绍</p>
              </Col>
              <Col md={2} xs={6}>
                <h4 className="footer-head">人力资源</h4>
                <p>人才招聘</p>
                <p>员工风采</p>
              </Col>
              <Col md={2} xs={6}>
                <h4 className="footer-head">地址</h4>
                <p>人才招聘</p>
                <p>员工风采</p>
              </Col>
              <Col md={2} xs={6}>
                <h4 className="footer-head">电话</h4>
                <p>9400929844738</p>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    )
  }
}