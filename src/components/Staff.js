import React from 'react';
import backgroundImage from '../images/background1.jpg';
import backgroundImagetiny from '../images/background1-tiny.jpg';
import Intro from './Intro';
import Cards from './Cards';


export default class Staff extends React.Component {
  constructor(props){
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      visible: false
    }
  }

  show(){
      this.setState({visible: true})
  }

  componentDidMount(){
      this.show()
  }

  render () {
    return (
      <div style={this.state.visible===false? styles.loading: styles.background}>
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
  },

  loading: {
    background: 'url(' + backgroundImagetiny + ') no-repeat center center fixed',
    minHeight: 565
  }
}