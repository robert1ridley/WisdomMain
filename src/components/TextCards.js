import React from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';
import PopModal from './PopModal';

export default class TextCards extends React.Component {
  render () {
    var data = this.props.language === "zh"? this.props.data.chinese: this.props.data.english
    const CardObjects = data.map(CardObject =>
      <SingleCard 
      header={CardObject.head}
      text={CardObject.text}
      key={CardObject.id}
      language={this.props.language}
    />
    )
    return (
      <div className="central-info">
        <Row>
          {CardObjects}
        </Row>
      </div>
    )
  }
}

class SingleCard extends React.Component {
  render(){
    return (
      <Col md={4} sm={6} xs={12} className="lower-margin">
        <div className="card wow fadeInLeft rounded-card" style={styles.padding}>
          <div className="card-body text-center">
            <h4 className="card-title">{this.props.header}</h4>
            <p className="card-text clampMe">{this.props.text}</p>
            <PopModal
              language = {this.props.language} 
              buttonText = {{chinese:"申请", english:"Apply"}}
              name = {this.props.header}
              style = {styles.margin}
            />
          </div>
        </div>
      </Col>
    )
  }
}

const styles = {
  padding: {
    padding: 15
  },

  margin: {
    marginBottom: 15,
    marginTop: 15
  }
}

