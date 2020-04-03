import React from 'react';
import {connect} from 'react-redux';
import welcomeImage from '../images/welcome-bg.png';
import '../styles/home.css';

//component imports
import HomeHead from '../headers/HomeHead';
import CarouselImages from '../components/CarouselImages';
import Stats from '../components/Stats';
import AboutBlocks from '../components/AboutBlocks'

class Home extends React.Component {
  render() {
    const { language, location } = this.props
    return (
      <div>
        <HomeHead />
        <CarouselImages language={language}/>
        <div className="background-loaded" style={styles.mainBackground}>
          <div className="main-content-container container">
            <Stats
              language={language}
              color={'black'}
            />
          </div>
        </div>
        <div style={{backgroundColor: '#eef0f1'}}>
          <AboutBlocks
            language={language}
            color={'black'}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  mainBackground: {
    backgroundImage: 'url(' + welcomeImage + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Home);