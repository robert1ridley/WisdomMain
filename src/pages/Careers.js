import React from 'react';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import TextCards from '../components/TextCards';
import ImageReel from '../components/ImageReel';
import careersheaddata from '../data/careers/careersheaddata';
import careerslistdata from '../data/careers/careerslistdata';
import jobsdata from '../data/careers/jobsdata';

import background14 from '../images/subnav/background14.jpg';

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
    const navData = careerslistdata;
    const { language } = this.props;
    const { activeIndex } =this.state;
    return (
      <div>
        <Subnav 
          language={language}
          intro={careersheaddata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        <div className="container">
          {
            this.state.activeIndex===0?
            <TextCards language={language} data={jobsdata}/>:
            <ImageReel />
          }
        </div>
      </div>
    )
  }
}

const styles = {
  subnav: {
    paddingBottom: 30, 
    background: 'url(' + background14 + ')'
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);