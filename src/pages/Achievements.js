import React from 'react';
import {connect} from 'react-redux';

class Achievements extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Achievements</h1>
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