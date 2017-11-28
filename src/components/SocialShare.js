import React from 'react';
import backgroundImage2 from '../images/background2.jpg';
import Intro from '../components/Intro';
import SocialShareBlock from '../components/SocialShareBlock';
import sharingdata from '../data/sharingdata';

export default class SocialShare extends React.Component {
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
    background: 'url(' + backgroundImage2 + ') no-repeat center center',
    minHeight: 565
  }
}