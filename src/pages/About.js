import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

// import ParagraphsIntro from '../components/ParagraphsIntro';
// import ParagraphsNew from '../components/ParagraphsNew';
import ParagraphsNew from '../components/NEW/ParagraphsNew';
import Subnav from '../components/Subnav';
import Timeline from '../components/Timeline';

import '../styles/timeline.css';

import aboutheaddata from '../data/about/aboutheaddata';
// import aboutdatabasic from '../data/about/aboutdatabasic';
import aboutdatabasic from '../data/NEW/aboutdatabasic';

import background14 from '../images/subnav/background14.jpg';

class About extends React.Component {
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
    const { activeIndex } = this.state;
    const { language } = this.props;
    const navData = aboutdatabasic;
    return (
      <div>
        <Subnav
          path="about"
          language={language}
          intro={aboutheaddata}
          aboutData={navData}
          currentActive={activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        {
          <Route path={`/about/:id`} exact render={(props) => 
            navData[activeIndex].id !== 3 ?
            <ParagraphsNew
              language={language}
              data={navData}
              index={activeIndex}
              {...props}
            /> 
            :
            <Timeline
              language={language}
              data={navData}
              index={activeIndex}
              {...props}
            /> 
          }/>
        }
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