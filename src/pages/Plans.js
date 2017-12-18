import React from 'react';
import {connect} from 'react-redux';
import plansdata from '../data/plans/plansdata';

class Plans extends React.Component {
  
  render() {
    const navData = this.props.language === "zh"? plansdata.chinese: plansdata.english;
    return (
      <div>
        {/* <Subnav 
          language={this.props.language}
          intro={aboutheaddata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        <ParagraphsIntro language={this.props.language} data={navData} index={this.state.activeIndex}/> */}
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

export default connect(mapStateToProps)(Plans);