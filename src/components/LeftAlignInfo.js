import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import topStrokeImg from '../images/mission/topstroke.png';
import sideCaretImg from '../images/mission/sidecaret.png';

const LeftAlignInfo = (props) => {
    const { language, data, scrollTargetId } = props;
    return (
        <div id={scrollTargetId} style={{backgroundColor: '#eff1f2'}}>
            <div className="container" 
                style={styles.sectionContainer}>
                <Row className="outer-row">
                    <Col md={6} className="align-self-center">
                        <div style={{margin: 'auto'}}>
                            <img src={topStrokeImg} style={{width: 130}} alt={data.head[language]} />
                            <p className="chinese-section-body" 
                                style={styles.smallHeading}>
                                {data.head[language]}</p>
                            <h1 className="chinese-section-header" 
                                style={{paddingTop: 5, width: 335}}>
                                {data.subHead[language]}</h1>
                            <p className="chinese-section-body">{data.body[language]}</p>
                            <div style={{width: 100, paddingTop: 10, cursor: 'pointer'}}>
                                <Link to={data.link}>
                                    <button style={styles.buttonStyle}>了解更多
                                        <img src={sideCaretImg} 
                                            style={{height: 30, marginLeft: 8}} alt="" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img 
                            className="img-responsive" 
                            src={data.imgUrl} 
                            style={{width: '100%'}}
                            alt={data.head[language]}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const styles = {
    sectionContainer: {
        paddingTop: 60, 
        paddingBottom: 60
    },

    smallHeading: {
        marginTop: 5, 
        fontFamily: 'PingFangSC-Semibold'
    },

    buttonStyle: {
        fontFamily: 'PingFangSC-Semibold', 
        color: '#333333', 
        border: 0, 
        backgroundColor: '#eff1f2'
    }
}

export default LeftAlignInfo;