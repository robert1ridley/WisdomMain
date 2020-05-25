import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MembraneCases = (props) => {
    const { casesData, language } = props;
    return (
        <div className="container component-container">
            <Row>
                {
                    casesData.map((singleCase, index) => 
                        <Col key={index} md={6} sm={6}>
                            <div className="img-container text-center" style={{marginBottom: 20}}>
                                <img 
                                    className="img-responsive" 
                                    src={singleCase.imgUrl} 
                                    style={{width: '100%'}}
                                    alt={singleCase.caption[language]}
                                />
                                <div className="caption">
                                    <p className="medium-body">{singleCase.caption[language]}</p>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default MembraneCases;