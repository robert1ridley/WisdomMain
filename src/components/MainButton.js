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
    const buttonStyle = !this.state.hover === true? styles.regButton: styles.hoverButton;
    const { language, buttonText } = this.props;
    return (
      <div>
        <Button 
          className="wiggle-me rounded-card"
          onMouseEnter={this.toggleHover} 
          onMouseLeave={this.toggleHover} 
          style={buttonStyle}>{language === "zh"? buttonText.chinese: buttonText.english}
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
    backgroundColor: '#7ebc59',
    color: 'white'
  }
}