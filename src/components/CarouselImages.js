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
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "客户成功，才有智道的成功；",
      en: "Our success depends on the success of customers;"
    },
    link: "/"
  },
  {
    image: mainCarousel2, 
    blurImage: mainCarousel2tiny, 
    id: 2, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "客户的信赖与支持，智道才能稳步、健康的发展；",
      en: "The trust and support of customers help us grow stably;"
    },
    link: "/"
  },
  {
    image: mainCarousel3, 
    blurImage: mainCarousel3tiny, 
    id: 3, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "优秀的员工和先进的技术，奠定了智道成功的基石；",
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
      zh: "现代管理模式和高效执行能力，使智道工程超越客户期望；",
      en: "We serve customers better with our modern management and efficient performance;"
    },
    link: "/"
  },
  {
    image: mainCarousel2, 
    blurImage: mainCarousel1tiny, 
    id: 5, 
    head: {
      zh: "董事长致辞",
      en: "Chairman's Speech"
    },
    body: {
      zh: "智道致力于：科技净化环境，与客户共成功！",
      en: "We devote ourselves to making the world more beautiful through advanced technologies and sharing success with customers."
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