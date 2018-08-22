import React from 'react';
import { Image } from 'react-bootstrap';
import '../../styles/paragraphs.css';

const ParagraphsNew = (props) => {
  const { data, index, language } = props;
  const headerClassName = language === "zh" ? "main-chinese-paragraph-header paragraph-margin" : "main-english-paragraph-header paragraph-margin";
  const paragraphClassName = language === "zh" ? "chinese-paragraph-body" : "english-paragraph-body";
  const sectionData = data[index];
  const paragraphs = sectionData.text.map((paragraph, index) => 
    <div style={{marginBottom: 20}} key={index}>
      <p className={paragraphClassName}><strong>{paragraph.subHead[language]}</strong></p>
      {
        paragraph.subText.map((subItem, idx) => 
        <p className={paragraphClassName} key={idx}>
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
    <div className="container wide-content-margin">
      <div className="main-lower-margin main-upper-margin">
        <h1 className={headerClassName}>
          {sectionData.head[language]}
        </h1>      
          {paragraphs}
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

export default ParagraphsNew;