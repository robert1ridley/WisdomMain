import React from 'react';
import {connect} from 'react-redux';

class News extends React.Component {
  
  render() {
    return (
      <div>
        <h1>News</h1>
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

export default connect(mapStateToProps)(News);