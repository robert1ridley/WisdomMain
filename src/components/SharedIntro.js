import React from 'react';
import '../styles/shared-intro.css';

const SharedIntro = (props) => {
  const { data, language } = props;

  return(
    <div className="shared-nav-container">
      <h1 
        className="white"
        style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
      >
        {data.head[language]}
      </h1>
      <div 
        className="light half-width"
        style= {language === "zh" ? styles.chineseBigBody : styles.bigBody}
      >
        {
          data.body.map((item, index) => 
            <p style={{margin: '0px 0px 0px'}} key={index}>{item[language]}</p>
          )
        }
      </div>
    </div>
  )
}

export default SharedIntro;


const styles = {
  chineseBigHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 32,
    marginTop: 60,
    letterSpacing: 0.2,
  },
  
  englishBigHead: {
    marginTop: 60,
    fontWeight: 500,
    fontSize: '2em',
  },
  
  chineseBigBody: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 18,
    letterSpacing: 0.14,
    lineHeight: '24px',
    marginTop: 20,
  },
  
  bigBody: {
    fontWeight: 100,
    fontSize: 20,
    marginTop: 20,
  },

  white: {
    color: '#FFFFFF !important'
  }
}