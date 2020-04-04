import React from 'react';
import { Col, Row } from 'react-bootstrap';

import topStrokeImg from '../images/mission/topstroke.png';
import inverseCaretImg from '../images/mission/inversecaret.png';

const TopInfo = (props) => {
    const { language, data } = props;
    return (
        <div className="container" style={styles.sectionContainer}>
            <Row>
                <Col md={7}>
                    <img src={topStrokeImg} style={{width: 130}} />
                    <p className="chinese-section-body" 
                        style={styles.smallHeading}>
                        {data.head[language]}
                    </p>
                    <p className="chinese-section-body">
                        {data.body[language]}
                    </p>
                    <div style={{width: 60, paddingTop: 10, cursor: 'pointer'}}>
                        <span style={{fontFamily: 'PingFangSC-Semibold'}}>{data.buttontext[language]}</span>
                        <img src={inverseCaretImg} style={{width: 30, marginLeft: 12}} />
                    </div>
                </Col>
                <Col md={5}>
                    <img 
                        className="img-responsive" 
                        src={data.imgUrl} 
                        style={styles.halfSizeImg}
                    />
                </Col>
            </Row>
        </div>
    )
}

const styles = {
    sectionContainer: {
        paddingTop: 60, 
        paddingBottom: 60
    },

    halfSizeImg: {
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: '50%'
    },

    smallHeading: {
        marginTop: 5, 
        fontFamily: 'PingFangSC-Semibold'
    },

}

export default TopInfo;