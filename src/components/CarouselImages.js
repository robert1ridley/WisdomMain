import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mainCarousel1 from '../images/misc/page-1_slide01.jpg';
import mainCarousel2 from '../images/misc/page-1_slide02.jpg';
import mainCarousel3 from '../images/misc/page-1_slide03.jpg';
import mainCarousel1tiny from '../images/misc/page-1_slide01tiny.jpg';
import mainCarousel2tiny from '../images/misc/page-1_slide02tiny.jpg';
import mainCarousel3tiny from '../images/misc/page-1_slide03tiny.jpg';

const images = [
  {image: mainCarousel1, blurImage: mainCarousel1tiny, id: 1, chinese: "关于智道", english: "About Wisdom", link: "/about"},
  {image: mainCarousel2, blurImage: mainCarousel2tiny, id: 2, chinese: "工程业绩", english: "Our Projects", link: "/achievements"},
  {image: mainCarousel3, blurImage: mainCarousel3tiny, id: 3, chinese: "新闻中心", english: "Company News", link: "/news"}
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
    console.log(this.state)
    const style = this.state.visible === false? "carousel-div-non": "carousel-div";

    return (
      <div className={style} style={{backgroundImage: 'url(' + this.props.image + ')'}}>
        <Carousel.Caption>
          <Link to={this.props.link}>
            <h3>{this.props.text}</h3>
          </Link>
        </Carousel.Caption>
      </div>
    )
  }
}

export default class CarouselImages extends React.Component {
  render () {

    const imageData = images.map(imageDatum=>
        <Carousel.Item key={imageDatum.id}>
          <div className="wrapper">
            <div className="img-wrapper" style={{backgroundImage: 'url(' + imageDatum.blurImage + ')'}}>
              <ImageDiv 
                image={imageDatum.image}
                text={this.props.language==="zh"? imageDatum.chinese: imageDatum.english}
                link={imageDatum.link} 
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
}