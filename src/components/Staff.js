import React from 'react';
import backgroundImage from '../images/background1.png';
import Intro from './Intro';
import Cards from './Cards';

//data imports
import staffintrodata from '../data/staffintrodata';

export default class Staff extends React.Component {
  render () {
    return (
      <div style={styles.background}>
        <div className="container">
          <Intro 
            language={this.props.language}
            data={staffintrodata}
            color={{color:'white'}}
          />
          <Cards language={this.props.language}/>
        </div>
      </div>
    )
  }
}

const styles = {
  background: {
    background: 'url(' + backgroundImage + ') no-repeat center center',
    minHeight: 565
  }
}