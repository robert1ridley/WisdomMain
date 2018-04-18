import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PopModal from './PopModal';

const TextCards = (props) => {
  const { data, language } = props;
  const CardObjects = data.map(CardObject =>
    <SingleCard 
      header={CardObject.head[language]}
      text={CardObject.text[language]}
      key={CardObject.id}
      language={language}
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

const SingleCard = (props) => {
  const { header, text, language } = props;
  return (
    <Col md={4} sm={6} xs={12} className="lower-margin">
      <div className="card wow fadeInLeft rounded-card" style={styles.padding}>
        <div className="card-body text-center">
          <h4 className="card-title">{header}</h4>
          <p className="card-text clampMe">{text}</p>
          <PopModal
            language = {language} 
            buttonText = {{chinese:"申请", english:"Apply"}}
            name = {header}
            style = {styles.margin}
          />
        </div>
      </div>
    </Col>
  )
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

export default TextCards;
