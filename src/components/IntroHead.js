import React from 'react';

const IntroHead = (props) => {
  const { data, language, color } = props;
  const colorStyle = color === "white" ? "light" : "dark";
  const textStyle = language === "zh" ? "chinese-big-head" : "big-head";

  return(
    <div className="text-center central-info">
      <h1 className={`${colorStyle}  ${textStyle}`}>
        {data.head[language]}
      </h1>
    </div>
  )
}

export default IntroHead;
