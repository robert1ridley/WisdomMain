import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import mainCarousel1 from '../images/carousel/carousel1.jpg';
import mainCarousel2 from '../images/carousel/carousel2.jpg';
import mainCarousel3 from '../images/carousel/carousel3.jpg';
import mainCarousel4 from '../images/carousel/carousel4.jpg';
import mainCarousel1tiny from '../images/carousel/carousel1-tiny.jpg';
import mainCarousel2tiny from '../images/carousel/carousel2-tiny.jpg';
import mainCarousel3tiny from '../images/carousel/carousel3-tiny.jpg';
import mainCarousel4tiny from '../images/carousel/carousel4-tiny.jpg';
import '../styles/carousel.css';

const images = [
  {
    image: mainCarousel2, 
    blurImage: mainCarousel2tiny, 
    id: 1, 
    head: {
      zh: "江苏智道––",
      en: "Chairman's Speech"
    },
    body: {
      zh: "中空纤维分子筛膜工程应用先行者",
      en: "Our success depends on the success of customers"
    },
    link: "/mission/membrane/tech"
  },
  {
    image: mainCarousel3, 
    blurImage: mainCarousel3tiny, 
    id: 2, 
    head: {
      zh: "江苏智道––",
      en: "Chairman's Speech"
    },
    body: {
      zh: "节能环保系统优化解决专家",
      en: "The trust and support of customers help us grow stably"
    },
    link: "/mission"
  },
  {
    image: mainCarousel4, 
    blurImage: mainCarousel4tiny, 
    id: 3, 
    head: {
      zh: "江苏智道––",
      en: "Chairman's Speech"
    },
    body: {
      zh: "远程智能监控运营维护管家",
      en: "The foundation of our success is excellent employees and advanced technologies"
    },
    link: "/mission"
  },
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 4, 
    head: {
      zh: "江苏智道––",
      en: "Chairman's Speech"
    },
    body: {
      zh: "科技净化环境，与客户共成功！",
      en: "We serve customers better with our modern management and efficient performance"
    },
    link: "/mission"
  }
]

class ImageDiv extends React.Component {
  constructor(props){
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      visible: false
    }
  }

  show(){
      this.setState({visible: true})
  }

  componentDidMount(){
      this.show()
  }

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render(){
    const { data, language } = this.props;
    const style = this.state.visible === false? "carousel-div-non": "carousel-div";
    return (
      <div className={style} style={{backgroundImage: `url(${data.image})`}}>
        <Carousel.Caption>
          <Link to={data.link} onClick={() => this.updatePath(data.link)}>
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="carousel-body-text">
                    <h3
                      className={language === "zh" ? "chinese-carousel-body" : "english-carousel-body"}
                    >
                      {data.head[language]}
                    </h3>
                    <h3
                      className={language === "zh" ? "chinese-carousel-head" : "english-carousel-head"}
                    >
                      {data.body[language]}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Carousel.Caption>
      </div>
    )
  }
}

const CarouselImages = (props) => {
  const { language, switchPage } = props;
  const imageData = images.map(imageDatum=>
      <Carousel.Item key={imageDatum.id}>
        <div className="wrapper">
          <div className="img-wrapper" style={{backgroundImage:`url(${imageDatum.blurImage})`}}
            >
            <ImageDiv
              data={imageDatum}
              language = {language}
              switchPage= {switchPage}
            />
          </div>
        </div>
      </Carousel.Item>
  )

  return (
    <Carousel className="wow fadeIn">
      {imageData}
  </Carousel>
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

export default connect(mapStateToProps, matchDispatchToProps)(CarouselImages);