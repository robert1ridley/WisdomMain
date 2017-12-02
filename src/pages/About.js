import React from 'react';
import {connect} from 'react-redux';

import Subnav from '../components/Subnav';

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