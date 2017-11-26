import React from 'react';
import {connect} from 'react-redux';
import SocialShare from '../components/SocialShare';

//component imports
import SiteNav from '../components/SiteNav';

class Achievements extends React.Component {
  
  render() {
    return (
      <div>
        <SiteNav />
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