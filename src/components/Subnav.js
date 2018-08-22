import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SharedIntro from '../components/SharedIntro';

const Subnav = (props) => {
  const { aboutData, currentActive, childActive, language, background, intro, path } = props;
  const navButtons = aboutData.map((navButton, index) => 
    <Link to={`/${path}/${navButton.id}`} key={index}>
      <button 
        style={currentActive===index? styles.activeButton: styles.regularButton} 
        onClick={() => childActive(index)}
        key={index}
      >
        {navButton.head[language]}
      </button>
    </Link>
  )
  return (
    <div style={{backgroundColor: '#595959'}}>
      <div
        className={"background-header"} 
        style={background}>
        <div className="container main-content-container">
          <SharedIntro
            language={language}
            data={intro}
          />
          <div style={{marginBottom: 40}}>
            {navButtons}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  regularButton: {
    background: '#FFFFFF',
    border: '1px solid #1951B4',
    whiteSpace: 'normal',
    paddingTop: 13,
    paddingBottom: 14,
    paddingRight: 42,
    paddingLeft: 42,

    fontFamily: 'PingFangSC-Semibold',
    fontSize: '20px',
    color: '#1951B4',
    letterSpacing: '0.16px',
    textAlign: 'center',
  },

  activeButton: {
    background: '#1951B4',
    border: '1px solid #1951B4',
    whiteSpace: 'normal',
    paddingTop: 13,
    paddingBottom: 14,
    paddingRight: 42,
    paddingLeft: 42,

    fontFamily: 'PingFangSC-Semibold',
    fontSize: '20px',
    color: '#FFFFFF',
    letterSpacing: '0.16px',
    textAlign: 'center',
  }
}

export default Subnav;