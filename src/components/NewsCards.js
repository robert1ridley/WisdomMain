import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/news-cards.css';
import { getDateFromTimestamp } from '../utils/index';

const NewsCards = (props) => {
  const baseLink = props.match.params.id
  const { language, data } = props
  const MediaObjects = data.map(MediaObject => 
      <SingleMedia
        image={MediaObject.headImage}
        header={MediaObject.head[language]}
        paragraph={MediaObject.text[0].subText[0][language]}
        key={MediaObject.id}
        postId={MediaObject.id}
        baseLink={baseLink}
        timestamp={MediaObject.timestamp}
        language={language}
      />
    )
  return (
    <div className="central-info">
      {MediaObjects}
    </div>
  )
}

class SingleMedia extends React.Component {
  render() {
    const { image, header, paragraph, baseLink, postId, timestamp, language } = this.props;
    let publishDate = getDateFromTimestamp(timestamp, language);
    const headClass = language === 'zh' ? 'chinese-news-card-head' : 'english-news-card-head';
    const dateClass = language === 'zh' ? 'chinese-news-card-date' : 'english-news-card-date';
    const bodyClass = language === 'zh' ? 'chinese-news-card-body' : 'english-news-card-body';
    return (
      <div>
        <Link to={`${baseLink}/${postId}`}>
          <div className="news-card-item">
            <Row>
              <Col lg={5} md={5}>
                <img className="img-fluid" src={image} alt={image} style={styles.image} />
              </Col>
              <Col lg={7} md={7}>
                <div>
                  <h4 className={headClass}>{header}</h4>
                  <p className={dateClass}>{publishDate}</p>
                  <p className={bodyClass}>{paragraph}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Link>
        <div style={{paddingTop: 20, paddingBottom: 20}}>
          <hr style={{borderWidth: 1, borderColor: '#333333'}}/>
        </div>
      </div>
    )
  }
}

const styles = {
  image: {
    width: '100%'
  }
}

export default NewsCards;


