import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MediaObjects = (props) => {
  const { language, data } = props
  const MediaObjects = data.map(MediaObject =>
    <SingleMedia 
      image={MediaObject.imgUrl}
      header={MediaObject.head[language]}
      text={MediaObject.text[language]}
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
    const linkStyle = this.state.hover === true? 
      {backgroundColor: '#7ebc59', color: 'white', padding: 10}: 
      {backgroundColor: 'white', color: 'black', padding: 10};
    const { image, header, text } = this.props;
    return (
      <Col md={4} sm={6} xs={12} className="lower-margin">
        <Link to="/">
          <div className="card wow fadeInLeft rounded-card" 
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}
            style={linkStyle}
          >
            <img className="img-fluid" src={image} alt={image} style={styles.image} />
            <div className="card-body text-center">
              <h4 className="card-title">{header}</h4>
              <p className="card-text clampMe">{text}</p>
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

export default MediaObjects;


