import React from 'react';

const IntroHead = (props) => {
  const { data, language, color } = props;
  const colorStyle = color === "white" ? "light" : "dark";
  const textStyle = language === "zh" ? "chinese-big-head" : "big-head";

  return(
    <div className="text-center central-info">
      <h1 
        className={`${colorStyle}  ${textStyle}`}
        // style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
      >
        {data.head[language]}
      </h1>
    </div>
  )
}

export default IntroHead;


const styles = {
  chineseBigHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 26,
    letterSpacing: 0.2,
  },
  
  englishBigHead: {
    fontWeight: 500,
    fontSize: '2em',
  }
}