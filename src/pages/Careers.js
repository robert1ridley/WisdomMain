import React from 'react';
import {connect} from 'react-redux';

class Careers extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Careers</h1>
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