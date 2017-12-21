import React from 'react';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import ParagraphsNew from '../components/ParagraphsNew';

import plansdata from '../data/plans/plansdata';
import plansheaddata from '../data/plans/plansheaddata';

import background11 from '../images/subnav/background11.jpg';

class Plans extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { activeIndex: 0 }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }
  
  render() {
    const navData = this.props.language === "zh"? plansdata.chinese: plansdata.english;
    return (
      <div>
        <Subnav 
          language={this.props.language}
          intro={plansheaddata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        <ParagraphsNew language={this.props.language} data={navData} index={this.state.activeIndex}/>
      </div>
    )
  }
}

const styles = {
  subnav: {
    paddingBottom: 30, 
    background: 'url(' + background11 + ')'
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Plans);