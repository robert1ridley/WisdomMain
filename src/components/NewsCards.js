import React from 'react';
import ReactPaginate from 'react-paginate';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import '../styles/news-cards.css';
import { getDateFromTimestamp } from '../utils/index';

class NewsCards extends React.Component {
  state = {
    indexRange: [0,1,2,3,4,5,6,7,8,9],
    maxPage: 10
  }
  
  handlePageClick = (data) => {
    let maxPage = this.state.maxPage;
    let selected = data.selected;
    let offset = Math.ceil(selected * maxPage);
    let indexRange = [];
    for (let i=offset; i<(offset + maxPage); i++){
      indexRange.push(i)
    };
    this.setState({
      indexRange: indexRange
    })
  };
  
  render() {
    const baseLink = this.props.match.params.id
    const { language, data, switchPage } = this.props
    const numPages = Math.ceil(data.length / this.state.maxPage);
    const MediaObjects = data.map((MediaObject, i) => 
      this.state.indexRange.includes(i) &&
      <SingleMedia
        image={MediaObject.headImage}
        header={MediaObject.head[language]}
        paragraph={MediaObject.text[0].subText[0][language]}
        key={MediaObject.id}
        postId={MediaObject.id}
        baseLink={baseLink}
        timestamp={MediaObject.timestamp}
        language={language}
        switchPage={switchPage}
      />
    )
    return (
      <div className="news-main-container" style={{marginTop: 30}}>
        {MediaObjects}
        <ReactPaginate
          previousLabel={'上一页'}
          nextLabel={'下一页'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={numPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

class SingleMedia extends React.Component {
  
  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render() {
    const { image, header, paragraph, baseLink, postId, timestamp, language } = this.props;
    let publishDate = getDateFromTimestamp(timestamp, language);
    const headClass = language === 'zh' ? 'chinese-news-card-head' : 'english-news-card-head';
    const dateClass = language === 'zh' ? 'chinese-news-card-date' : 'english-news-card-date';
    const bodyClass = language === 'zh' ? 'chinese-news-card-body' : 'english-news-card-body';
    return (
      <div>
        <Link to={`${baseLink}/${postId}`} onClick={() => this.updatePath(`/news/${baseLink}/${postId}`)}>
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
        <div style={{paddingTop: 30, paddingBottom: 30}}>
          <hr style={{borderWidth: 1, borderColor: '#7F7F7F', marginTop: 0, marginBottom: 0}}/>
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

function mapStateToProps(state) {
  return {
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsCards);