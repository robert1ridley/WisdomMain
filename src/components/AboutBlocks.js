import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import image1 from '../images/home/company.jpg';
import image2 from '../images/home/membrane.jpg';
import image3 from '../images/home/news_center.jpg';
import '../styles/media-objects.css';


const image_urls = [
    {'img': image1, 'zh': '智道简介', 'en': '智道简介', 'link': '/about/about-wisdom'}, 
    {'img': image2, 'zh': '膜技术工程应用', 'en': '膜技术工程应用', 'link': '/mission/membrane/tech'}, 
    {'img': image3, 'zh': '新闻中心', 'en': '新闻中心', 'link': '/news/enterprise'}]

const head = {
    'zh': '关于我们',
    'en': 'About us'
}

const subHead = {
    'zh': '以膜应用为核心，综合诊断，集成优化系统的节能环保专家',
    'en': 'Not only reducing pollution, but also providing ecomonic benefits'
}


class AboutBlockSingle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
        hover: false
    };
}


  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render() {
    const { language, img } = this.props;
    const linkStyle = {opacity: 1, backgroundColor: '#FFFFFF'};

    return(
        <Col md={4} style={{paddingLeft: 5, paddingRight: 5, marginBottom: 15}}>
            <Link to={img.link} onClick={() => this.updatePath(img.link)}>
                <div
                    onMouseEnter={this.toggleHover} 
                    onMouseLeave={this.toggleHover}
                    style={linkStyle}
                    className = "hvrbox"
                >
                    <LazyLoad offsetVertical={300}>
                        <img src={img.img} className="img-fluid hvrbox-layer_bottom" alt={img[language]} style={{width: '100%'}}/>
                    </LazyLoad>
                    <div className="visible">
                        <div className="hvrbox-text-vis">
                            <div>{img[language]}</div>
                            <div className="hvrbox-text" id="invis">了解更多</div>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>)
    }
}


const AboutBlocks = (props) => {
    const { language, switchPage } = props;
    return(
        <div>
            <div className="container main-content-container about-container">
                <Row>
                    <Col md={9} sm={6} xs={3}/>
                    <Col md={3} sm={6} xs={9}>
                        <div className="blue-top-border"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} />
                    <Col md={7}>
                        <h1 
                            className="chinese-head-home"
                            style= {{textAlign: 'right'}}
                        >
                            {head[language]}
                        </h1>
                        <p className="chinese-home-sub"
                        style={{textAlign: 'right'}}>
                            {subHead[language]}
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <Row className="about-block-container">
                    {image_urls.map((img, idx) => 
                        <AboutBlockSingle 
                            img={img}
                            language={language}
                            key={idx}
                            switchPage={switchPage}
                        />
                        )
                    }
                </Row>
            </div>
        </div>
)
}

function mapStateToProps(state) {
  return {
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AboutBlocks);