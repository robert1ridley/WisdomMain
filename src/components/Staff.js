import React from 'react';
import backgroundImage from '../images/background1.jpg';
import Intro from './Intro';
import Cards from './Cards';


export default class Staff extends React.Component {
  render () {
    return (
      <div style={styles.background}>
        <div className="container">
          <Intro 
            language={this.props.language}
            data={this.props.data}
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
    background: 'url(' + backgroundImage + ') no-repeat center center fixed',
    minHeight: 565
  }
}