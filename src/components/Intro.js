import React from 'react';

const Intro = (props) => {
  const { data, language, color } = props;
  return(
    <div className="text-center central-info wow fadeIn" style={color}>
      <h1 className="big-head">{data.head[language]}</h1>
      <p className="big-body">{data.body[language]}</p>
    </div>
  )
}

export default Intro;