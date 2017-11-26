import React from 'react';
import {connect} from 'react-redux';

//data imports
import introdata from '../data/introdata';
import imgblockdata from '../data/imgblockdata';
import staffintrodata from '../data/staffintrodata';
import basicintrodata from '../data/basicintrodata';
import newsintrodata from '../data/newsintrodata';

//component imports
import SiteNav from '../components/SiteNav';
import Staff from '../components/Staff';
import CarouselImages from '../components/CarouselImages';
import Intro from '../components/Intro';
import ImgBlocks from '../components/ImgBlocks';
import MediaObjects from '../components/MediaObjects';
import SocialShare from '../components/SocialShare';
import BaiduMap from '../components/BaiduMap';
import ScrollTo from '../components/ScrollTo';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SiteNav />
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
        <SocialShare language={this.props.language}/>
        <BaiduMap language={this.props.language}/>
        <ScrollTo />
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

export default connect(mapStateToProps)(Home);