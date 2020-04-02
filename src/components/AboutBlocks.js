import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../images/home/company.jpg';
import image2 from '../images/home/membrane.jpg';
import image3 from '../images/home/news_center.jpg';
import '../styles/media-objects.css';


const image_urls = [
    {'img': image1, 'zh': '智道简介', 'en': '智道简介', 'link': '/about/about-wisdom'}, 
    {'img': image2, 'zh': '膜技术工程应用', 'en': '膜技术工程应用', 'link': '/solutions/oil-and-gas-recovery-and-voc-control'}, 
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

  render() {
    const { language, img } = this.props;
    const linkStyle = {opacity: 1, backgroundColor: '#FFFFFF'};

    return(
        <Col md={4} style={{paddingLeft: 5, paddingRight: 5}}>
            <Link to={img.link}>
                <div
                    onMouseEnter={this.toggleHover} 
                    onMouseLeave={this.toggleHover}
                    style={linkStyle}
                    className = "hvrbox"
                >
                    <img src={img.img} className="img-fluid hvrbox-layer_bottom" style={{width: '100%'}}/>
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
    const { language, color } = props;
    return(
        <div>
            <div className="container main-content-container" style={{backgroundColor: '#eef0f1', paddingTop: 100}}>
                <Row>
                    <Col md={9}/>
                    <Col md={3}>
                        <div style={{borderTop: '15px solid #4495CD'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} />
                    <Col md={7}>
                        <h1 
                            className={color === "white" ? "light" : "dark"}
                            style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
                        >
                            {head[language]}
                        </h1>
                        <p style={{textAlign: 'left'}, styles.chineseBigBodyBlackSubHead}>
                            {subHead[language]}
                        </p>
                    </Col>
                </Row>
            </div>
            <div>
                <Row style={{paddingTop: 50, paddingBottom: 100, backgroundColor: '#eef0f1'}}>
                    {image_urls.map((img, idx) => 
                        <AboutBlockSingle 
                            img={img}
                            language={language}
                            key={idx}
                        />
                        )
                    }
                </Row>
            </div>
        </div>
)
}


export default AboutBlocks;


const styles = {
    wpCaptionTextChinese: {
        fontFamily: 'PingFangSC-Semibold',
        fontSize: '34px',
        color: '#FFFFFF',
        letterSpacing: '0.27px',
        textAlign: 'center',
        lineHeight: '24px',
        },
        
        wpCaptionTextEnglish: {
        fontSize: '28px',
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: '20px',
        },

    chineseBigHead: {
        fontFamily: "PingFangSC-Semibold",
        textAlign: 'right',
        fontSize: 42,
        letterSpacing: 0.2,
        marginBottom: 10
    },
    
    englishBigHead: {
        fontWeight: 500,
        fontSize: '2em',
    },
    
    chineseBigBody: {
        fontFamily: "PingFangSC-Semibold",
        fontSize: 22,
        letterSpacing: 0.14,
        textAlign: 'center',
        lineHeight: '50px',
        marginTop: '40px !important',
        color: '#86B728'
    },

    chineseBigBodyBlackSubHead: {
        fontFamily: "PingFangSC-Semibold",
        fontSize: 22,
        letterSpacing: 0.14,
        textAlign: 'right',
        marginTop: '40px !important',
        color: '#666'
    },

    chineseBigBodyBlack: {
        fontFamily: "PingFangSC-Semibold",
        fontSize: 22,
        letterSpacing: 0.14,
        textAlign: 'center',
        marginTop: '40px !important',
        color: '#666'
    },
    
    bigBody: {
        fontWeight: 100,
        fontSize: 20,
        marginTop: '40px !important',
    },
}