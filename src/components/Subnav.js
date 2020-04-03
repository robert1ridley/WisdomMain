import React from 'react';
import { Link } from 'react-router-dom';
import SubNoNav from './SubNoNav';

const Subnav = (props) => {
  const { aboutData, currentActive, childActive, language, background, intro, path } = props;
  const navButtons = aboutData.map((navButton, index) => 
    <Link to={`/${path}/${navButton.id}`} key={index}>
      <span 
        style={currentActive===index? styles.activeButton: styles.regularButton} 
        onClick={() => childActive(index)}
        key={index}
      >
        {navButton.head[language]}
      </span>
    </Link>
  )
  return (
    <div>
      <SubNoNav language={language} intro={intro} background={background} />
      <div className='container' style={{paddingTop: 20, paddingBottom: 17}}>
        {navButtons}
      </div>
    </div>
  )
}

const styles = {
  regularButton: {
    border: '0px',
    borderBottom: '0px',
    whiteSpace: 'normal',
    paddingTop: 13,
    paddingBottom: 14,
    marginRight: 56,
    // paddingLeft: 32,

    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#5F6464',
    textAlign: 'center',
  },

  activeButton: {
    border: '0px',
    borderBottom: '2px solid rgb(68, 149, 205)',
    whiteSpace: 'normal',
    paddingTop: 13,
    paddingBottom: 14,
    marginRight: 56,
    // paddingLeft: 32,

    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#2a2e2e',
    letterSpacing: '0.16px',
    textAlign: 'center',
  }


}

export default Subnav;