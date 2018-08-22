import React from 'react';
import '../styles/shared-intro.css';

const SharedIntro = (props) => {
  const { data, language } = props;

  return(
    <div className="shared-nav-container">
      <h1 
        className="light"
        style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
      >
        {data.head[language]}
      </h1>
      <p 
        className="light"
        style= {language === "zh" ? styles.chineseBigBody : styles.bigBody}
      >
        {data.body[language]}
      </p>
    </div>
  )
}

export default SharedIntro;


const styles = {
  chineseBigHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 26,
    marginTop: 45,
    letterSpacing: 0.2,
  },
  
  englishBigHead: {
    marginTop: 45,
    fontWeight: 500,
    fontSize: '2em',
  },
  
  chineseBigBody: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 18,
    letterSpacing: 0.14,
    lineHeight: '24px',
    marginTop: '40px !important',
  },
  
  bigBody: {
    fontWeight: 100,
    fontSize: 20,
    marginTop: '40px !important',
  },

  white: {
    color: '#FFFFFF !important'
  }
}