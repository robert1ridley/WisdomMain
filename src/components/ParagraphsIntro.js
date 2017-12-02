import React from 'react';
import { Image } from 'react-bootstrap';

export default class ParagraphsIntro extends React.Component {
  render () {

    const sectionData = this.props.data[this.props.index];
    const paragraphs = sectionData.text.map(paragraph => 
      <p className="big-body">{paragraph}</p>
    )

    return (
      <div className="container both-margin">
        <div className="wow fadeInLeft big-lower-margin rounded-card" style={{padding:20}}>
          <div className="lower-margin upper-margin">
            <h1 className="text-center big-head">{sectionData.head}</h1>
              {paragraphs}
          </div>
          <div>
            {sectionData.imgUrl.map((image, index) => 
              <Image
                key={index}
                src={image}
                className="center-img lower-margin"
                responsive 
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}