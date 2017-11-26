import React from 'react';

export default class ParagraphsIntro extends React.Component {
  render () {

    const sectionData = this.props.language === "zh"? this.props.data.chinese: this.props.data.english;
    const paragraphs = sectionData.text.map(paragraph => 
      <p className="medium-body">{paragraph}</p>
    )

    return (
        <div className="lower-margin upper-margin">
          <h1 className="text-center medium-head">{sectionData.head}</h1>
          {paragraphs}
        </div>
    )
  }
}