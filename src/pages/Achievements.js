import React from 'react';
import {connect} from 'react-redux';
import SocialShare from '../components/SocialShare';

class Achievements extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Achievements</h1>
        <SocialShare language={this.props.language}/>
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