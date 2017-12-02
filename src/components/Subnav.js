import React from 'react';
import { Button } from 'react-bootstrap';
import Intro from '../components/Intro';
import ParagraphsIntro from '../components/ParagraphsIntro';

import introdata from '../data/introdata';
import aboutdatabasic from '../data/about/aboutdatabasic';

export default class Subnav extends React.Component {
  state = {
    activeIndex: 0
  }

  changeActive(activeIndex) {
    this.setState({ activeIndex })
  }
  
  render () {
    const navData = this.props.language === "zh"? aboutdatabasic.chinese: aboutdatabasic.english;
    const navButtons = navData.map((navButton, index) => 
      <Button 
        bsSize="large" 
        style={this.state.activeIndex===index? styles.activeButton: styles.regularButton} 
        onClick={() => this.changeActive(index)}
      >
        {navButton.head}
      </Button>
    )

    return (
      <div>
        <div className="green-back" style={{paddingBottom: 30}}>
          <div className="container">
            <Intro
              language={this.props.language}
              data={introdata}
              color={{color: 'white'}}
            />
          </div>
          <div className="wow fadeIn text-center">
              {navButtons}
          </div>
        </div>
        <ParagraphsIntro language={this.props.language} data={navData} index={this.state.activeIndex}/>
      </div>
    )
  }
}

const styles = {
  regularButton: {
    margin: 10,
    color: 'white',
    backgroundColor: 'rgb(57, 182, 179)',
    border: 'solid 2px white'
  },

  activeButton: {
    margin: 10,
    color: 'rgb(57, 182, 179)',
    backgroundColor: 'white',
    border: 'solid 2px white'
  }
}