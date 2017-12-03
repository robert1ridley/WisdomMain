import React from 'react';
import {connect} from 'react-redux';

import Subnav from '../components/Subnav';

import introdata from '../data/introdata';
import aboutdatabasic from '../data/about/aboutdatabasic';

class Careers extends React.Component {
  
  render() {
    return (
      <div>
        <Subnav language={this.props.language}
          data={aboutdatabasic}
          introdata={introdata}
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

export default connect(mapStateToProps)(Careers);