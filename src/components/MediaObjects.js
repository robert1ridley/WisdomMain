import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MediaObjects extends React.Component {
  render () {
    var data = this.props.language === "zh"? this.props.data.chinese: this.props.data.english
    const MediaObjects = data.map(MediaObject =>
      <SingleMedia 
      image={MediaObject.imgUrl}
      class="wow fadeInLeft"
      header={MediaObject.head}
      text={MediaObject.text}
      key={MediaObject.id}
    />
    )
    return (
      <div className="central-info">
        {MediaObjects}
      </div>
    )
  }
}

class SingleMedia extends React.Component {
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
  
  render() {

    var linkStyle = this.state.hover === true? 
      {backgroundColor: '#39b6b3', color: 'white', padding: 10}: 
      {backgroundColor: 'white', color: 'black', padding: 10};
    var textStyle = this.state.hover === true? {color: 'white'}: {color: 'black'};

    return (
        <Media 
          className={this.props.class}
          onMouseEnter={this.toggleHover} 
          onMouseLeave={this.toggleHover} 
          style={linkStyle}
        >
          <Link to="/">
            <Media.Left>
              <img src={this.props.image} alt={this.props.header} className="media-img"/>
            </Media.Left>
            <Media.Body style={textStyle}>
              <Media.Heading className="medium-head">{this.props.header}</Media.Heading>
              <p className="medium-body">{this.props.text}</p>
            </Media.Body>
          </Link>
        </Media>
    )
  }
}

