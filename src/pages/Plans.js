import React from 'react';
import {connect} from 'react-redux';

class Plans extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Plans</h1>
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