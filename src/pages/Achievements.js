import React from 'react';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import Sidebar from '../components/Sidebar';

import achievementsdata from '../data/achievements/achievementsdata';

class Achievements extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { 
      activeIndex: 0 
    }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }
  
  render() {
    const navData = this.props.language === "zh"? achievementsdata.chinese.subCategories: achievementsdata.english.subCategories;
    return (
      <div>
        <Subnav 
          language={this.props.language}
          intro={achievementsdata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
        />
        <Sidebar 
          data={navData}
          language={this.props.language}
          currentActive={this.state.activeIndex}
        />
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

export default connect(mapStateToProps)(Achievements);