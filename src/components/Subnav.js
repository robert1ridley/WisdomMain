import React from 'react';
import { Button } from 'react-bootstrap';
import Intro from '../components/Intro';
// import background1 from '../images/subnav/background1.jpg';

export default class Subnav extends React.Component {

  render () {
    const navButtons = this.props.aboutData.map((navButton, index) => 
      <Button 
        bsSize="large" 
        style={this.props.currentActive===index? styles.activeButton: styles.regularButton} 
        onClick={() => this.props.childActive(index)}
        key={index}
      >
        {navButton.head}
      </Button>
    )

    return (
        <div
          className={"background-loaded"} 
          style={this.props.background}>
          <div className="container">
            <Intro
              language={this.props.language}
              data={this.props.intro}
              color={{color: 'white'}}
            />
          </div>
          <div className="wow fadeIn text-center">
              {navButtons}
          </div>
        </div>
    )
  }
}

const styles = {
  regularButton: {
    margin: 10,
    color: 'white',
    // backgroundColor: '#2c739d',
    backgroundColor: 'Transparent',
    border: 'solid 2px white'
  },

  activeButton: {
    margin: 10,
    color: '#2c739d',
    backgroundColor: 'white',
    border: 'solid 2px white'
  }
}