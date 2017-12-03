import React from 'react';
import {connect} from 'react-redux';

import ParagraphsIntro from '../components/ParagraphsIntro';
import Subnav from '../components/Subnav';

import introdata from '../data/introdata';
import aboutdatabasic from '../data/about/aboutdatabasic';

class About extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { activeIndex: 0 }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }
  
  render() {
    const navData = this.props.language === "zh"? aboutdatabasic.chinese: aboutdatabasic.english;
    return (
      <div>
        <Subnav 
          language={this.props.language}
          intro={introdata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
        />
        <ParagraphsIntro language={this.props.language} data={navData} index={this.state.activeIndex}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);