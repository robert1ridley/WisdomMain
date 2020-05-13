import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import SubNoNav from './SubNoNav';
import '../styles/subnav.css';

class Subnav extends React.Component {

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render() {
    const { aboutData, currentActive, childActive, language, background, intro, path } = this.props;
    const navButtons = aboutData.map((navButton, index) => 
      <Link to={`/${path}/${navButton.id}`} key={index} onClick={() => this.updatePath(`/${path}/${navButton.id}`)}>
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

function mapStateToProps(state) {
  return {
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Subnav);