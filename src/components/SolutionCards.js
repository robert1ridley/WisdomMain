import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoModal from '../components/InfoModal';
import '../styles/solution-cards.css';

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
    const { show } = this.state;
    const headTextClass = language === 'zh' ? 'chinese-solution-card-head hover-white' : 'english-solution-card-head hover-white';
    const bodyTextClass = language === 'zh' ? 'chinese-solution-card-body solutions-clamp hover-white' : 'english-solution-card-body solutions-clamp hover-white';
    return (
      <div>
        <Col md={4} sm={6} xs={12} className="lower-margin" onClick={this.handleShow}>
          <div className="solutions-card blue-hover">
            <div className="solutions-card-body text-center">
              <h4 className={headTextClass} style={styles.head}>{header}</h4>
              <p className={bodyTextClass}>{text}</p>
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