import React from 'react';
import {connect} from 'react-redux';
import welcomeImage from '../images/welcome-bg.png';
import '../styles/home.css';

//data imports
import introdata from '../data/introdata';
import imgblockdata from '../data/imgblockdata';
import basicintrodata from '../data/basicintrodata';
import newsintrodata from '../data/newsintrodata';

//component imports
import HomeHead from '../headers/HomeHead';
import CarouselImages from '../components/CarouselImages';
import Intro from '../components/Intro';
import ImgBlocks from '../components/ImgBlocks';
import MediaObjects from '../components/MediaObjects';
import Stats from '../components/Stats';
import AboutBlocks from '../components/AboutBlocks'
// import BaiduMap from '../components/BaiduMap';

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
          {/* <div className="container main-content-container" style={{backgroundColor: '#eef0f1'}}> */}
            {/* <Intro 
              data={newsintrodata}
              language={language}
              color={'white'}
            />
            <MediaObjects 
              data={basicintrodata}
              language={language}
            /> */}
            {/* <AboutBlocks
              language={language}
              color={'black'}
            /> */}
          {/* </div> */}
          <AboutBlocks
            language={language}
            color={'black'}
          />
        </div>
        {/* <BaiduMap language={language}/> */}
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