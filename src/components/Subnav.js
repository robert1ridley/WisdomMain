import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Intro from '../components/Intro';

import introdata from '../data/introdata';

export default class Subnav extends React.Component {
  
  render () {
    return (
      <div className="green-back">
        <Intro
          language={this.props.language}
          data={introdata}
          color={{color: 'white'}}
        />
        <div className="wow fadeIn text-center">
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
        </div>
      </div>
    )
  }
}

class NavButton extends React.Component {
  constructor(props){
    super(props)
    
    this.changeActive = this.changeActive.bind(this);
    this.state = {
      active: true
    }
  }

  changeActive(selectedKey){
    this.setState({active: !this.state.active})
  }

  render() {
    const buttonStyle = this.state.active===true? styles.activeButton: styles.regularButton;

    return (
      <Button 
        bsSize="large" 
        style={buttonStyle} 
        onMouseEnter={this.changeActive}
        onMouseLeave={this.changeActive}
      >
        Default
      </Button>
    )
  }
}

const styles = {
  activeButton: {
    margin: 10,
    color: 'white',
    backgroundColor: 'rgb(57, 182, 179)',
    border: 'solid 2px white'
  },

  regularButton: {
    margin: 10,
    color: 'rgb(57, 182, 179)',
    backgroundColor: 'white',
    border: 'solid 2px white'
  }
}