import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MediaObjects extends React.Component {
  render () {
    var data = this.props.language === "zh"? this.props.data.chinese: this.props.data.english
    const MediaObjects = data.map(MediaObject =>
      <SingleMedia 
      image={MediaObject.imgUrl}
      header={MediaObject.head}
      text={MediaObject.text}
      key={MediaObject.id}
    />
    )
    return (
      <div className="central-info">
        <Row>
          {MediaObjects}
        </Row>
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

    return (
      <Col md={4} sm={6} xs={12} className="lower-margin">
        <Link to="/">
          <div className="card wow fadeInLeft rounded-card" 
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}
            style={linkStyle}
          >
            <img className="img-fluid" src={this.props.image} alt={this.props.image} style={styles.image} />
            <div className="card-body text-center">
              <h4 className="card-title">{this.props.header}</h4>
              <p className="card-text clampMe">{this.props.text}</p>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

const styles = {
  image: {
    width: '100%'
  }
}


