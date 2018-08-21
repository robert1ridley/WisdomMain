import React from 'react';

const Intro = (props) => {
  const { data, language, color } = props;
  return(
    <div className="text-center central-info" style={color}>
      <h1 
        className= {language === "zh" ? "chinese-big-head" : "big-head"}
      >
        {data.head[language]}
      </h1>
      <p 
        className= {language === "zh" ? "chinese-big-body" : "big-body"}
      >
        {data.body[language]}
      </p>
    </div>
  )
}

export default Intro;