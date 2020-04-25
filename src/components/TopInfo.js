import React from 'react';
import { Col, Row } from 'react-bootstrap';

import topStrokeImg from '../images/mission/topstroke.png';
import inverseCaretImg from '../images/mission/inversecaret.png';

const TopInfo = (props) => {
    const { language, data, scrollTarget } = props;
    return (
        <div className="container" style={styles.sectionContainer}>
            <Row>
                <Col md={7}>
                    <img src={topStrokeImg} style={{width: 130}} alt="" />
                    <p className="chinese-section-body" 
                        style={styles.smallHeading}>
                        {data.head[language]}
                    </p>
                    <p className="chinese-section-body">
                        {data.body[language]}
                    </p>
                    <a href={scrollTarget} style={{width: 60, paddingTop: 10}}>
                        <span style={{fontFamily: 'PingFangSC-Semibold', color: '#333333'}}>
                            {data.buttontext[language]}
                        </span>
                        <img src={inverseCaretImg} style={{width: 30, marginLeft: 12}} alt="" />
                    </a>
                </Col>
                <Col md={5}>
                    <img 
                        className="img-responsive" 
                        src={data.imgUrl} 
                        style={styles.halfSizeImg}
                        alt={data.head[language]}
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