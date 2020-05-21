import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap';

import expertsdata from '../data/careers/expertsdata';

export default class InfoCards extends React.Component {
  render () {
    const { language } = this.props;
    const headClass = language === 'zh' ? 'chinese-blue-card-head' : 'english-blue-card-head';
    return (
      <div className="container" style={{marginTop: 50, marginBottom: 50}}>
        <p className="chinese-section-body">{expertsdata.head[language]}</p>
        <ListGroup>
            <Row>
              {
                expertsdata.main.map((expert, index) =>
                <ListGroupItem key={index} style={{border: 0}}>
                  <div className="media">
                    <Col lg={2} md={2} sm={6} xs={12}>
                      <div className="text-center" style={{paddingTop: 15, paddingBottom: 15}}>
                        <Image src={expert.imageUrl} alt={expert.name[language]} width={"100%"} />
                      </div>
                    </Col>
                    <Col lg={10} md={10} sm={6} xs={12}>
                      <div className="media-body">
                        <h4 className={headClass}>{expert.name[language]}</h4>
                        <h4 className={headClass}>{expert.title[language]}</h4>
                        {
                          expert.text.map((paragraph, idx) => 
                            <span className="chinese-section-body" style={{fontSize:14}} key={idx}>{paragraph[language]}</span>
                          )
                        }
                      </div>
                    </Col>
                  </div>
                </ListGroupItem>
                )
              }
            </Row>
        </ListGroup>
        <Row className="outer-row-wrap">
          {
            expertsdata.sub.map((expert, index) => 
            <Col key={index} lg={4} md={6} sm={6} xs={12} style={{marginBottom: 20}}>
              <div className="media-body">
                <h4 className={headClass}>{expert.name[language]}</h4>
                {
                  expert.text.map((paragraph, idx) => 
                    <div key={idx}>
                      <span className="chinese-section-body" style={{fontSize:14}} key={idx}>{paragraph[language]}</span>
                    </div>
                  )
                }
              </div>
            </Col>
            )
          }
        </Row>
      </div>
    )
  }
}