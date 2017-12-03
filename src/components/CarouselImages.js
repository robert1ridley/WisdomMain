import React from 'react';
import { Carousel } from 'react-bootstrap';
import mainCarousel1 from '../images/carousel/main1.jpg';
import mainCarousel2 from '../images/carousel/main2.jpg';
import mainCarousel3 from '../images/carousel/main3.jpg';
import mainCarousel4 from '../images/carousel/main4.jpg';

const images = [
  {image: mainCarousel1, id: 1},
  {image: mainCarousel2, id: 2},
  {image: mainCarousel3, id: 3},
  {image: mainCarousel4, id: 4}
]

export default class CarouselImages extends React.Component {
  render () {

    const imageData = images.map(imageDatum=>
        <Carousel.Item key={imageDatum.id}>
          <div className="wrapper">
            <div className="img-wrapper">
              <div className="carousel-div" style={{backgroundImage: 'url(' + imageDatum.image + ')'}} />
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

