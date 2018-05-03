import React from 'react';
import { Image } from 'react-bootstrap';

export default class ParagraphsNew extends React.Component {
  render () {
    const sectionData = this.props.data[this.props.index];
    console.log(sectionData.text);
    const paragraphs = sectionData.text.map((paragraph, index) => 
      <div key={index} className="big-body">
        <p><strong>{paragraph.subHead}</strong></p>
        {
          paragraph.subText.map((subItem, idx) => 
          <p key={idx}>
            {subItem}
          </p>
          )
        }
        {
          <div>
          {paragraph.imgUrl.map((image, index) => 
              image.image===null?<div key={index} />:
              <div className={"img-container text-center"} key={index}>
                <Image src={image.image} alt="" className="center-img upper-margin" width="100%" responsive/>
              {
                  image.caption===""?<div></div>:
                <div className="caption">
                  <p className="medium-body"><span className="mini-tab" style={styles.tab} /> {image.caption}</p>
                </div>
              }
              </div>
          )}
        </div>
        }      
      </div>
    )

    return (
      <div className="container both-margin">
        <div className="wow fadeInLeft rounded-card responsive-padding">
          <div className="lower-margin upper-margin">
            <h1 className="text-center big-head">{sectionData.head}</h1>      
              {paragraphs}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  tab: {
  borderBottomColor: '#2c739d',
  borderLeftColor: '#2c739d',
  borderLeftStyle: 'solid',
  borderLeftWidth: 4.79688,
  borderRightColor: '#2c739d',
  borderTopColor: '#2c739d',
  // content: " ",
  display: 'inline',
  height: 24,
  marginRight: 8,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  width: 4.79688,
  }
}