import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap';

import expertsdata from '../data/careers/expertsdata';

export default class InfoCards extends React.Component {
  render () {
    const { language } = this.props;
    return (
      <div className="container" style={{marginTop: 50}}>
        <ListGroup>
            <Row>
              {
                expertsdata.map((expert, index) =>
                <ListGroupItem key={index}>
                  <div className="media">
                    <Col lg={2} md={2} sm={6} xs={12}>
                      <div className="text-center" style={{paddingTop: 15, paddingBottom: 15}}>
                        <Image src={expert.imageUrl} alt="..." width={"100%"} circle />
                      </div>
                    </Col>
                    <Col lg={10} md={10} sm={6} xs={12}>
                      <div className="media-body">
                        <h3 className="media-heading medium-head text-center">{expert.name[language]}</h3>
                        {
                          expert.text.map((paragraph, idx) => 
                            <span className="medium-body" key={idx}>{paragraph[language]}</span>
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
      </div>
    )
  }
}