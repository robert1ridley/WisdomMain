import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainCarousel1 from '../images/carousel/test/page-1_slide01.jpg';
import mainCarousel2 from '../images/carousel/test/page-1_slide02.jpg';
import mainCarousel3 from '../images/carousel/test/page-1_slide03.jpg';
import mainCarousel1tiny from '../images/carousel/test/page-1_slide01tiny.jpg';
import mainCarousel2tiny from '../images/carousel/test/page-1_slide02tiny.jpg';
import mainCarousel3tiny from '../images/carousel/test/page-1_slide03tiny.jpg';

const images = [
  {
    image: mainCarousel1, 
    blurImage: mainCarousel1tiny, 
    id: 1, 
    head: {
      zh: "关于智道",
      en: "About Wisdom"
    },
    body: {
      zh: "关于智道关于智道关于智道",
      en: "This is some text about our company."
    },
    link: "/about"
  },
  {
    image: mainCarousel2, 
    blurImage: mainCarousel2tiny, 
    id: 2, 
    head: {
      zh: "工程业绩",
      en: "Our Projects"
    },
    body: {
      zh: "关于智道关于智道关于智道",
      en: "This is some text about our company."
    },
    link: "/achievements"
  },
  {
    image: mainCarousel3, 
    blurImage: mainCarousel3tiny, 
    id: 3, 
    head: {
      zh: "新闻中心",
      en: "Company News"
    },
    body: {
      zh: "关于智道关于智道关于智道",
      en: "This is some text about our company."
    },
    link: "/news"
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
            <h3>{data.head[language]}</h3>
            <p>{data.body[language]}</p>
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