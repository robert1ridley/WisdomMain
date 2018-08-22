import React from 'react';
import {connect} from 'react-redux';

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
// import BaiduMap from '../components/BaiduMap';

class Home extends React.Component {
  render() {
    const { language } = this.props
    return (
      <div>
        <HomeHead />
        <CarouselImages language={language}/>
        <div className="container main-content-container">
          <Intro
            data={introdata}
            language={language}
            color={'black'}
          />
          <ImgBlocks 
            data={imgblockdata}
            language={language}
          />
        </div>
        <div style={{backgroundColor: '#022E7B'}}>
          <div className="container main-content-container">
            <Intro 
              data={newsintrodata}
              language={language}
              color={'white'}
            />
            <MediaObjects 
              data={basicintrodata}
              language={language}
            />
          </div>
        </div>
        {/* <BaiduMap language={language}/> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Home);