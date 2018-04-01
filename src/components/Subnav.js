import React from 'react';
import { Button } from 'react-bootstrap';
import Intro from '../components/Intro';
// import background1 from '../images/subnav/background1.jpg';

const Subnav = (props) => {
  const { aboutData, currentActive, childActive, language, background, intro } = props;
  const navButtons = aboutData.map((navButton, index) => 
    <Button 
      bsSize="large" 
      style={currentActive===index? styles.activeButton: styles.regularButton} 
      onClick={() => childActive(index)}
      key={index}
    >
      {navButton.head[language]}
    </Button>
  )
  return (
      <div
        className={"background-loaded"} 
        style={background}>
        <div className="container">
          <Intro
            language={language}
            data={intro}
            color={{color: 'white'}}
          />
        </div>
        <div className="wow fadeIn text-center">
            {navButtons}
        </div>
      </div>
  )
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

export default Subnav;