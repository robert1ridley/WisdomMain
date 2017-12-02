import React from 'react';
import {connect} from 'react-redux';
import { Image, Well } from 'react-bootstrap';

import Subnav from '../components/Subnav';

import aboutdatabasic from '../data/about/aboutdatabasic';

class About extends React.Component {
  
  render() {
    return (
      <div>
        <Subnav language={this.props.language}/>
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