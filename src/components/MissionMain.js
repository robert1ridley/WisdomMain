import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import TopInfo from './TopInfo';
import LeftAlignInfo from './LeftAlignInfo';

import topInfoData from '../data/missiondata/topinfo';
import membraneInfoData from '../data/missiondata/membraneintro';
import allProductsIntroData from '../data/missiondata/allproductsintro';
import remoteIntroData from '../data/missiondata/remoteintro';

import topStrokeGreenReverseImg from '../images/mission/topstrokegreenreverse.png';
import sideCaretGreenImg from '../images/mission/sidecaretgreen.png';

class ProductsInfo extends React.Component {
    
    updatePath = (newPath) => {
        newPath = getLocationFromParams(newPath)
        this.props.switchPage(newPath)
    }

    render() {
        const { language } = this.props;
        return (
            <div className="container" style={styles.sectionContainer}>
                <Row className="outer-row">
                    <Col md={6} xs={12} style={styles.productsBackground}>
                        <Row>
                            <Col md={2} xs={2} />
                            <Col md={10} xs={10}>
                                <div style={styles.greenBlockOuter}>
                                    {
                                        allProductsIntroData.productTypes[language].map((item, index) => 
                                            <div key={index} style={styles.greenBlock}>
                                                <Link to={item.link} onClick={() => this.updatePath(item.link)}>
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
                    <Col md={6} className="align-self-center">
                        <div style={{margin: 'auto'}}>
                            <img src={topStrokeGreenReverseImg} alt="" style={{width: 130, float: 'right'}} />
                            <p className="chinese-section-body" style={styles.rightSmallHeading}>
                                {allProductsIntroData.intro.head[language]}
                            </p>
                            <h1 className="chinese-section-header mission-right-big-heading">
                                {allProductsIntroData.intro.subHead[language]}
                            </h1>
                            <p className="chinese-section-body" style={{textAlign: 'right'}}>
                                {allProductsIntroData.intro.body[language]}
                            </p>
                            <div style={{paddingTop: 10, textAlign: 'right'}}>
                                <Link to="/mission/case-high" onClick={() => this.updatePath("/mission/case-high")}>
                                    <button style={{fontFamily: 'PingFangSC-Semibold', color: '#333333', backgroundColor: '#FFFFFF', border: 0}}>
                                        了解更多<img src={sideCaretGreenImg} style={{height: 30, marginLeft: 8}} alt="" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const MissionMain = (props) => {
    const { language, switchPage } = props;
    return (
        <div>
            <TopInfo language={language} data={topInfoData} scrollTarget={'#membrane'} />
            <LeftAlignInfo language={language} data={membraneInfoData} scrollTargetId={'membrane'} />
            <ProductsInfo language={language} switchPage={switchPage} />
            <LeftAlignInfo language={language} data={remoteIntroData} scrollTargetId={'remote'} />
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

function mapStateToProps(state) {
  return {
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MissionMain);