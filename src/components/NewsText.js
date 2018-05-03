import React from 'react';
import { Image } from 'react-bootstrap';

const NewsText = (props) => {
  console.log(props)
  const { data, language } = props;
  console.log(data[0]===true)
  const paragraphs = data[0].text.map((paragraph, index) => 
    <div key={index} className="big-body">
      <p><strong>{paragraph.subHead[language]}</strong></p>
      {
        paragraph.subText.map((subItem, idx) => 
        <p key={idx}>
          {subItem[language]}
        </p>
        )
      }
      {
        <div>
        {paragraph.imgUrl.map((image, index) => 
            image.image===null?<div key={index} />:
            <div className="img-container text-center" key={index}>
              <Image src={image.image} alt="" className="center-img upper-margin" width="100%" responsive/>
            {
                image.caption[language]===""?<div></div>:
              <div className="caption">
                <p className="medium-body"><span className="mini-tab" style={styles.tab} /> {image.caption[language]}</p>
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
          <h1 className="text-center big-head">{data[0].head[language]}</h1>      
            {paragraphs}
        </div>
      </div>
    </div>
  )
}

const styles = {
  tab: {
  borderBottomColor: '#2c739d',
  borderLeftColor: '#2c739d',
  borderLeftStyle: 'solid',
  borderLeftWidth: 4.79688,
  borderRightColor: '#2c739d',
  borderTopColor: '#2c739d',
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

export default NewsText;