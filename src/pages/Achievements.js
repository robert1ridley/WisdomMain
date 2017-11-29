import React from 'react';
import {connect} from 'react-redux';
import SocialShare from '../components/SocialShare';

//component imports
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';

class Achievements extends React.Component {
  
  render() {
    return (
      <div>
        <SiteNav />
        <h1>Achievements</h1>
        <SocialShare language={this.props.language}/>
        <Footer />
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