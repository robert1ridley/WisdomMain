import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/media-objects.css';

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
      <Row className="row-container">
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
      {opacity: 0.5, backgroundColor: '#FFFFFF'}: 
      {opacity: 1, backgroundColor: '#FFFFFF'};
    const { image, header, text } = this.props;
    return (
      <Col md={4} sm={6} xs={12} className="lower-margin">
        <Link to="/">
          <div
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}
            style={linkStyle}
          >
          <figure className="wp-caption">
            <img className="img-fluid" src={image} alt={image} style={styles.image} />
            <figcaption 
              className="wp-caption-text"
              style={this.props.language === "zh" ? styles.wpCaptionTextChinese : styles.wpCaptionTextEnglish}
            >
              {header}
            </figcaption>
          </figure>
            <div className="text-center card-body">
              <p 
                className="card-text clampMe"
                style={this.props.language === "zh" ? styles.smallCaptionChinese : styles.smallCaptionEnglish}
              >
                {text}
              </p>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

const styles = {
  image: {
    width: '100%',
  },

  wpCaptionTextChinese: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: '34px',
    color: '#FFFFFF',
    letterSpacing: '0.27px',
    textAlign: 'center',
    lineHeight: '24px',
  },
  
  wpCaptionTextEnglish: {
    fontSize: '28px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '20px',
  },

  smallCaptionChinese: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#666666',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: '22px',
  },

  smallCaptionEnglish: {
    fontSize: '16px',
    color: '#666666',
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: '22px',
  }
}

export default MediaObjects;


