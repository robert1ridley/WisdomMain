import React from 'react';
import { Button } from 'react-bootstrap';
import Intro from '../components/Intro';

export default class Subnav extends React.Component {

  render () {
    const navButtons = this.props.aboutData.map((navButton, index) => 
      <Button 
        bsSize="large" 
        style={this.props.currentActive===index? styles.activeButton: styles.regularButton} 
        onClick={() => this.props.childActive(index)}
      >
        {navButton.head}
      </Button>
    )

    return (
        <div className="green-back" style={{paddingBottom: 30}}>
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