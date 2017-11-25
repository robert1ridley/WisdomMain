import React from 'react';
import { Button } from 'react-bootstrap';

export default class MainButton extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
        hover: false
    };
}

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render () {
    var buttonStyle = !this.state.hover === true? styles.regButton: styles.hoverButton;
   console.log(this.props.language) 
    return (
      <div className="wow bounceInUp">
        <Button 
          className="wiggle-me"
          onMouseEnter={this.toggleHover} 
          onMouseLeave={this.toggleHover} 
          style={buttonStyle}>{this.props.language === "zh"? this.props.buttonText.chinese: this.props.buttonText.english}
        </Button>
      </div>
    )
  }
}

const styles = {
  regButton: {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 100,
    backgroundColor: 'white',
    color: 'black'
  },

  hoverButton: {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 100,
    backgroundColor: '#39b6b3',
    color: 'white'
  }
}