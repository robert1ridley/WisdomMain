import React from 'react';
import { connect } from 'react-redux';
import backgroundImage2 from '../images/background2.jpg';
import Intro from '../components/Intro';
import SocialShareBlock from '../components/SocialShareBlock';
import sharingdata from '../data/sharingdata';

class SocialShare extends React.Component {
  render () {
    return (
      <div style={styles.background}>
        <div className="container">
          <Intro 
            data={sharingdata}
            language={this.props.language}
            color={{color:'white'}}
          />
          <SocialShareBlock />
        </div>
      </div>
    )
  }
}

const styles = {
  background: {
    background: 'url(' + backgroundImage2 + ') no-repeat center center fixed',
    minHeight: 565
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(SocialShare);