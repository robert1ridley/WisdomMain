import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainButton from './MainButton';

export default class ImgBlocks extends React.Component {
  render () {

    var data = this.props.language === "zh"? this.props.data.chinese: this.props.data.english;
    var blocks = data.map(block =>
      <div key = {block.id}>
        <Columns       
          id = {block.id}
          icon = {block.icon}
          text = {block.text}
          link = {block.link}
        />
      </div>
    )

    return (
        <div style={styles.row} className="wow fadeInRight">
          <Row>
            {blocks}
          </Row>
          <div className="text-center">
            <Link to="/about">
              <MainButton
                language = {this.props.language}
                buttonText = {{chinese:"学习更多", english: "Learn more"}}
              />
            </Link>
          </div>
        </div>
    )
  }
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
    var linkStyle = this.state.hover === true? {backgroundColor: '#39b6b3', color: 'white'}: {backgroundColor: 'white', color: 'black'};
    console.log(this.props)
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