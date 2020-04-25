import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import shareImg from '../images/share-bg.png';
import IntroHead from '../components/IntroHead';
import SocialShareBlock from '../components/SocialShareBlock';
import sharingdata from '../data/sharingdata';

class SocialShare extends React.Component {
  render () {
    return (
      <div style={{backgroundColor: '#595959'}}>
        <LazyLoad offsetVertical={300}>
          <div 
            style={styles.background}
            className="background-loaded"
          >
            <div className="container main-content-container">
              <IntroHead 
                data={sharingdata}
                language={this.props.language}
                color={'white'}
              />
              <SocialShareBlock />
            </div>
          </div>
        </LazyLoad>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundImage: 'url(' + shareImg + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(SocialShare);