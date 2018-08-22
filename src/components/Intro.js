import React from 'react';

const Intro = (props) => {
  const { data, language, color } = props;

  return(
    <div className="text-center central-info">
      <h1 
        className={color === "white" ? "light" : "dark"}
        style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
      >
        {data.head[language]}
      </h1>
      <p 
        className={color === "white" ? "light" : "dark"}
        style= {language === "zh" ? styles.chineseBigBody : styles.bigBody}
      >
        {data.body[language]}
      </p>
    </div>
  )
}

export default Intro;


const styles = {
  chineseBigHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 26,
    letterSpacing: 0.2,
  },
  
  englishBigHead: {
    fontWeight: 500,
    fontSize: '2em',
  },
  
  chineseBigBody: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 18,
    letterSpacing: 0.14,
    textAlign: 'center',
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