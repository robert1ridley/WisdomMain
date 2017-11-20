import React from 'react';
import introdata from '../data/introdata';
import newsintrodata from '../data/newsintrodata';

//component imports
import SiteNav from '../components/SiteNav';
import Staff from '../components/Staff';
import CarouselImages from '../components/CarouselImages';
import Intro from '../components/Intro';
import ImgBlocks from '../components/ImgBlocks';
import MediaObjects from '../components/MediaObjects';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.switchChinese = this.switchChinese.bind(this);
    this.switchEnglish = this.switchEnglish.bind(this);

    this.state = {
      chinese: true
    };
}

    switchChinese() {
      this.setState({
        chinese: true
      });
    }

    switchEnglish() {
      this.setState({
        chinese: false
      });
    }
  
  render() {

    var headers = {
      chinese: [
        {head: "首页", icon: "glyphicon glyphicon-home", id: 1},
        {head: "关于智道", icon: "glyphicon glyphicon-info-sign", id: 2},
        {head: "新闻中心", icon: "glyphicon glyphicon-blackboard", id: 3},
        {head: "决定方案", icon: "glyphicon glyphicon-pushpin", id: 4},
        {head: "工程业绩", icon: "glyphicon glyphicon-certificate", id: 5},
        {head: "人力资源", icon: "glyphicon glyphicon-education", id: 6},
        {head: "联系我们", icon: "glyphicon glyphicon-earphone", id: 7}
      ],
      english: [
        {head: "Home", icon: "glyphicon glyphicon-home", id: 1},
        {head: "About us", icon: "glyphicon glyphicon-info-sign", id: 2},
        {head: "Company News", icon: "glyphicon glyphicon-blackboard", id: 3},
        {head: "Plans", icon: "glyphicon glyphicon-pushpin", id: 4},
        {head: "Achievements", icon: "glyphicon glyphicon-certificate", id: 5},
        {head: "Careers", icon: "glyphicon glyphicon-education", id: 6},
        {head: "Contact us", icon: "glyphicon glyphicon-earphone", id: 7}
      ]
    }

    return (
      <div>
        <SiteNav 
          action={this.switchChinese} 
          actiontwo={this.switchEnglish}
          headings={this.state.chinese===true?headers.chinese: headers.english}
          lingua={this.state.chinese===true?"中文": "English"}
        />
        <CarouselImages />
        <div className="container">
          <Intro 
            language={this.state.chinese}
            data={introdata}
            color={{color:'black'}}
          />
          <ImgBlocks language={this.state.chinese}/>
        </div>
        <Staff language={this.state.chinese}/>
        <div className="container">
          <Intro 
            language={this.state.chinese}
            data={newsintrodata}
            color={{color:'black'}}
          />
          <MediaObjects 
            language={this.state.chinese}
          />
        </div>
      </div>
    )
  }
}