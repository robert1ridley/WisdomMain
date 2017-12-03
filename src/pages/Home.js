import React from 'react';
import {connect} from 'react-redux';

import '../styles/home.css';

//data imports
import introdata from '../data/introdata';
import imgblockdata from '../data/imgblockdata';
import staffintrodata from '../data/staffintrodata';
import basicintrodata from '../data/basicintrodata';
import newsintrodata from '../data/newsintrodata';

//component imports
import Staff from '../components/Staff';
import CarouselImages from '../components/CarouselImages';
import Intro from '../components/Intro';
import ImgBlocks from '../components/ImgBlocks';
import MediaObjects from '../components/MediaObjects';
// import BaiduMap from '../components/BaiduMap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <CarouselImages />
        <div className="container">
          <Intro 
            data={introdata}
            language={this.props.language}
            color={{color:'black'}}
          />
          <ImgBlocks 
            data={imgblockdata}
            language={this.props.language}
          />
        </div>
        <Staff
          data={staffintrodata}
          language={this.props.language}
        />
        <div className="container">
          <Intro 
            data={newsintrodata}
            language={this.props.language}
            color={{color:'black'}}
          />
          <MediaObjects 
            data={basicintrodata}
            language={this.props.language}
          />
        </div>
        {/* <BaiduMap language={this.props.language}/> */}
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