import React from 'react';
import { Row, Col } from 'react-bootstrap';
import staffdata from '../data/staffdata';
import PopModal from './PopModal';

export default class Cards extends React.Component {
  render () {

    var data = this.props.language === "zh"? staffdata.chinese: staffdata.english

    var allCards = data.map(oneCard =>
      <Col md={3} sm={6} xs={6} key={oneCard.id}>
        <div className="card wow fadeInLeft" style={styles.whiteBack}>
          <img className="img-fluid" src={oneCard.imageUrl} alt={oneCard.name} style={styles.img}/>
          <div className="card-body text-center">
            <h4 className="card-title">{oneCard.name}</h4>
            <p className="card-text" style={styles.green}>{oneCard.role}</p>
            <PopModal
              language = {this.props.language} 
              buttonText = {{chinese:"联系我", english:"Contact me"}}
              name = {oneCard.name}
            />
          </div>
        </div>
      </Col>
    )

    return (
      <Row style={styles.margin}>
        {allCards}
      </Row>
    )
  }
}

const styles = {
  whiteBack: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 20
  },
  margin: {
    marginBottom: 80
  },
  img: {
    width: '100%'
  },
  green: {
    color: 'rgb(126, 188, 89)'
  }
}