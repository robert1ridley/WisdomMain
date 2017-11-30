import React from 'react';
import {connect} from 'react-redux';

//component imports
import SocialShare from '../components/SocialShare';

class News extends React.Component {
  
  render() {
    return (
      <div>
        <h1>News</h1>
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

export default connect(mapStateToProps)(News);