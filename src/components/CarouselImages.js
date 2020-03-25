import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainCarousel1 from '../images/carousel/carousel1.png';
import mainCarousel1tiny from '../images/carousel/carousel1-tiny.png';
import '../styles/carousel.css';

const images = [
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 1, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "膜技术工程应用领先者",
      en: "Our success depends on the success of customers;"
    },
    link: "/"
  },
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 2, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "节能环保系统优化解决专家；",
      en: "The trust and support of customers help us grow stably;"
    },
    link: "/"
  },
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 3, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "远程智能监控运营维护管家；",
      en: "The foundation of our success is excellent employees and advanced technologies;"
    },
    link: "/"
  },
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 4, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "科技净化环境与客户共成功！",
      en: "We serve customers better with our modern management and efficient performance;"
    },
    link: "/"
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

  render(){
    const { data, language } = this.props;
    const style = this.state.visible === false? "carousel-div-non": "carousel-div";
    return (
      <div className={style} style={{backgroundImage: `url(${data.image})`}}>
        <Carousel.Caption>
          <Link to={data.link}>
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h3
                    className={language === "zh" ? "chinese-carousel-head" : "english-carousel-head"}
                  >
                    {data.head[language]}
                  </h3>
                  <div className="carousel-body-text">
                    <p
                      className={language === "zh" ? "chinese-carousel-body" : "english-carousel-body"}
                    >
                      {data.body[language]}
                    </p>
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
  const { language } = props;
  const imageData = images.map(imageDatum=>
      <Carousel.Item key={imageDatum.id}>
        <div className="wrapper">
          <div className="img-wrapper" style={{backgroundImage:`url(${imageDatum.blurImage})`}}
            >
            <ImageDiv
              data={imageDatum}
              language = {language}
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

export default CarouselImages;