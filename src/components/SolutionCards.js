import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoModal from '../components/InfoModal';

const SolutionCards = (props) => {
  const { data, language, activeIndex } = props;
  const CardObjects = data[activeIndex].items.map((CardObject, index) =>
    <SingleCard
      fullItemData={CardObject}
      header={CardObject.articleHead[language]}
      text={CardObject.articleContent[0].text[language]}
      key={index}
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

class SingleCard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false, num: 'nnn' });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { header, text, language, fullItemData } = this.props;
    const { show, num } = this.state;
    console.log(fullItemData.articleContent[0].text[language])
    return (
      <div>
        <Col md={4} sm={6} xs={12} className="lower-margin" onClick={this.handleShow}>
          <div className="card wow fadeInLeft rounded-card green-hover" style={styles.padding}>
            <div className="card-body text-center">
              <h4 className="card-title" style={styles.head}>{header}</h4>
              <p className="card-text clampMe">{text}</p>
            </div>

          </div>
        </Col>
        <InfoModal
          language={language}
          showModal={show}
          close={this.handleClose}
          data={fullItemData}
        />
      </div>
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
  },

  head: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

export default SolutionCards;