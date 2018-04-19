import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainButton from './MainButton';

const ImgBlocks = (props) => {
  const { data, language } = props;
  const blocks = data.map(block =>
    <div key = {block.id}>
      <Columns       
        id = {block.id}
        icon = {block.icon}
        text = {block.text[language]}
        link = {block.link}
      />
    </div>
  )
  return (
      <div style={styles.row} className="wow fadeIn">
        <Row>
          {blocks}
        </Row>
        <div className="text-center">
          <Link to="/about/about-wisdom">
            <MainButton
              language = {language}
              buttonText = {{chinese:"了解更多", english: "Learn more"}}
            />
          </Link>
        </div>
      </div>
  )
}

class Columns extends React.Component {
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
    var linkStyle = this.state.hover === true? {backgroundColor: '#7ebc59', color: 'white'}: {backgroundColor: 'white', color: 'black'};
    return (
      <Col md={4} sm={6} xs={12}>
        <Link to={this.props.link}>
          <div className="card full-card wiggle-me" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}>
            <div className={this.props.icon} style={styles.icon}/>
            <div className="card-block">
              <h4 className="card-title caps">{this.props.text}</h4>
            </div>
          </div>
        </Link>
      </Col>
    )
  }
}

const styles = {
  row: {
    marginTop: 80,
    marginBottom: 80
  },

  icon: {
    fontSize: "6em",
    marginBottom: 20
  }
}

export default ImgBlocks;