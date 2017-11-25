import React from 'react';

export default class Intro extends React.Component {
  render () {
    const data = this.props.language === "zh"? this.props.data.chinese: this.props.data.english;
    return(
      <div className="text-center central-info wow fadeIn" style={this.props.color}>
        <h1 className="big-head">{data.head}</h1>
        <p className="big-body">{data.body}</p>
      </div>
    )
  }
}
