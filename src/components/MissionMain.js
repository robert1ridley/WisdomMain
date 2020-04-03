import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import topInfoData from '../data/missiondata/topinfo';
import membraneInfoData from '../data/missiondata/membraneintro';
import allProductsIntroData from '../data/missiondata/allproductsintro';
import remoteIntroData from '../data/missiondata/remoteintro';

import topStrokeImg from '../images/mission/topstroke.png';
import topStrokeGreenReverseImg from '../images/mission/topstrokegreenreverse.png';
import inverseCaretImg from '../images/mission/inversecaret.png';
import sideCaretImg from '../images/mission/sidecaret.png';
import sideCaretGreenImg from '../images/mission/sidecaretgreen.png';


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
                        <span style={{fontFamily: 'PingFangSC-Semibold'}}>继续探索</span>
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


const MembraneInfo = (props) => {
    const { language } = props;
    return (
        <div style={{backgroundColor: '#eff1f2'}}>
            <div className="container" 
                style={styles.sectionContainer}>
                <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Col md={6} className="align-self-center" 
                        style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{margin: 'auto'}}>
                            <img src={topStrokeImg} style={{width: 130}} />
                            <p className="chinese-section-body" 
                                style={styles.smallHeading}>
                                {membraneInfoData.head[language]}</p>
                            <h1 className="chinese-section-header" 
                                style={{paddingTop: 5, width: 335}}>
                                {membraneInfoData.subHead[language]}</h1>
                            <p className="chinese-section-body">{membraneInfoData.body[language]}</p>
                            <div style={{width: 100, paddingTop: 10, cursor: 'pointer'}}>
                                <Link to={membraneInfoData.link}>
                                    <span style={{fontFamily: 'PingFangSC-Semibold'}}>了解更多
                                        <img src={sideCaretImg} 
                                            style={{height: 30, marginLeft: 8}} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img 
                            className="img-responsive" 
                            src={membraneInfoData.imgUrl} 
                            style={{width: '100%'}}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const ProductsInfo = (props) => {
    const { language } = props;
    return (
        <div className="container" style={styles.sectionContainer}>
            <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                <Col md={6} xs={12} style={styles.productsBackground}>
                    <Row>
                        <Col md={3} xs={2} />
                        <Col md={9} xs={10}>
                            <div style={styles.greenBlockOuter}>
                                {
                                    allProductsIntroData.productTypes[language].map((item, index) => 
                                        <div key={index} style={styles.greenBlock}>
                                            <Link to={item.link}>
                                                <h1 className="chinese-section-header white text-center" 
                                                    style={{paddingTop: 15, paddingBottom: 15}}>
                                                        {item.text}
                                                </h1>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="align-self-center" style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{margin: 'auto'}}>
                        <img src={topStrokeGreenReverseImg} style={{width: 130, float: 'right'}} />
                        <p className="chinese-section-body" style={styles.rightSmallHeading}>
                            {allProductsIntroData.intro.head[language]}
                        </p>
                        <h1 className="chinese-section-header" style={styles.rightBigHeading}>
                            {allProductsIntroData.intro.subHead[language]}
                        </h1>
                        <p className="chinese-section-body" style={{textAlign: 'right'}}>
                            {allProductsIntroData.intro.body[language]}
                        </p>
                        <div style={{paddingTop: 10, cursor: 'pointer', textAlign: 'right'}}>
                            <span style={{fontFamily: 'PingFangSC-Semibold'}}>
                                了解更多<img src={sideCaretGreenImg} style={{height: 30, marginLeft: 8}} />
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const RemoteMonitoringInfo = (props) => {
    const { language } = props;
    return (
        <div style={{backgroundColor: '#eff1f2'}}>
            <div className="container" style={styles.sectionContainer}>
                <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Col 
                        md={6} className="align-self-center" 
                        style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{margin: 'auto'}}>
                            <img src={topStrokeImg} style={{width: 130}} />
                            <p className="chinese-section-body" 
                                style={styles.smallHeading}>
                                {remoteIntroData.head[language]}
                            </p>
                            <h1 className="chinese-section-header" style={{paddingTop: 5, width: 335}}>
                                {remoteIntroData.subHead[language]}
                            </h1>
                            <p className="chinese-section-body">
                                {remoteIntroData.body[language]}
                            </p>
                            <div style={{width: 100, paddingTop: 10, cursor: 'pointer'}}>
                                <span style={{fontFamily: 'PingFangSC-Semibold'}}>
                                    了解更多<img src={sideCaretImg} style={{height: 30, marginLeft: 8}} />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-responsive" src={remoteIntroData.imgUrl} style={{width: '100%'}}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const MissionMain = (props) => {
    const { language } = props;
    return (
        <div>
            <TopInfo language={language} data={topInfoData} />
            <MembraneInfo language={language} />
            <ProductsInfo language={language} />
            <RemoteMonitoringInfo language={language} />
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

    rightSmallHeading: {
        marginTop: 17, 
        fontFamily: 'PingFangSC-Semibold', 
        textAlign: 'right', 
        clear: 'right'
    },

    rightBigHeading: {
        paddingTop: 5, 
        paddingLeft: 220, 
        textAlign: 'right'
    },

    greenBlock: {
        backgroundColor: 'rgba(126, 188, 89, 0.8)', 
        marginBottom: 40
    },

    greenBlockOuter: {
        paddingBottom: 100, 
        paddingTop: 100, 
        textAlign: 'right'
    },

    productsBackground: {
        background: 'url(' + allProductsIntroData.intro.imgUrl + ')', 
        backgroundSize: 'cover', 
        paddingRight: 0
    }
}

export default MissionMain;