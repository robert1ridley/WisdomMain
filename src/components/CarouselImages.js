import React from 'react';
import { Carousel,  } from 'react-bootstrap';
import mainCarousel1 from '../images/main1.jpg';
import mainCarousel2 from '../images/main2.jpg';
import mainCarousel3 from '../images/main3.jpg';
import mainCarousel4 from '../images/main4.jpg';

const images = [
  {image: mainCarousel1, id: 1},
  {image: mainCarousel2, id: 2},
  {image: mainCarousel3, id: 3},
  {image: mainCarousel4, id: 4}
]

//TODO: Make the imports a list and then loop through them
export default class CarouselImages extends React.Component {
  render () {

    const imageData = images.map(imageDatum=>
      // <div key={imageDatum.id}>
        <Carousel.Item key={imageDatum.id}>
          <div className="wrapper">
            <div className="img-wrapper">
              <img width="100%" alt="900x500" src={imageDatum.image} />
            </div>
          </div>
        </Carousel.Item>
      // </div>
    )

    return (
      <Carousel>
        {imageData}
      {/* <Carousel.Item>
        <div className="wrapper">
          <div className="img-wrapper">
            <img width="100%" alt="900x500" src={mainCarousel1} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="wrapper">
        <div className="img-wrapper">
          <img width="100%" alt="900x500" src={mainCarousel2} />
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="wrapper">
          <div className="img-wrapper">
            <img width="100%" alt="900x500" src={mainCarousel3} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="wrapper">
          <div className="img-wrapper">
            <img width="100%" alt="900x500" src={mainCarousel4} />
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
    )
  }
}