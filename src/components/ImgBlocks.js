import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/imgblock.css';

const ImgBlocks = (props) => {
  const { data, language } = props;
  const blocks = data.map(block =>
    <div key = {block.id}>
      <Columns
        language={language}     
        id = {block.id}
        icon = {block.icon}
        text = {block.text[language]}
        link = {block.link}
      />
    </div>
  )
  return (
      <div style={styles.row} className="flex-container">
        {blocks}
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
    var linkStyle = this.state.hover === true ? {opacity: 0.5} : {opacity: 0.9};
    return (
      // <Col lg={2} md={4} xs={6}>
        <Link to={this.props.link}>
          <div className="card full-card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}>
            <Image src={this.props.icon} style={{height: "60px"}} />
            <div className="card-block">
              <h4 className={this.props.language === "zh" ? "chinese-caps" : "caps"}>{this.props.text}</h4>
            </div>
          </div>
        </Link>
      // </Col>
    )
  }
}

const styles = {
  row: {
    marginTop: 80,
    marginBottom: 80,
    paddingLeft: "64px",
    paddingRight: "64px",
  },

  icon: {
    fontSize: "6em",
    marginBottom: 20
  }
}

export default ImgBlocks;