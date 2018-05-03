import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import NotFound from '../pages/NotFound';
import Subnav from '../components/Subnav';
import newsheaddata from '../data/news/newsheaddata';
import newsdata from '../data/news/newsdata';
import background14 from '../images/subnav/background14.jpg';
import NewsItem from './NewsItem';
import NewsCards from '../components/NewsCards';

class News extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.notFound = this.notFound.bind(this);
    this.state = { 
      activeIndex: null,
      notFound: false
    }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }

  componentWillReceiveProps(nextProps) {
    const pageId = nextProps.match.params.id;
    if (this.props.match.params.id !== pageId){
      const foundIndex = newsdata.findIndex((el) => (el.id === pageId));
      foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
      this.setState({
        activeIndex: foundIndex
      })
    }
  }

  notFound() {
    this.setState({
      notFound: true
    })
  }
  
  componentDidMount(){
    const pageId = this.props.match.params.id;
    const foundIndex = newsdata.findIndex((el) => (el.id === pageId));
    foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
    this.setState({
      activeIndex: foundIndex
    })
  }

  render() {
    const { language } = this.props;
    const { activeIndex, windowWidth, notFound } = this.state;
    const navData = newsdata;
    if(notFound){
      return(<NotFound />)
    }
    else{
      return (
        activeIndex !== null &&
        <div>
          <Subnav
            path="news"
            language={language}
            intro={newsheaddata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          <div className="container">
            <Route path={`/news/:id`} exact render={(props) =>
              <NewsCards
                language={language}
                data={navData[activeIndex].articles}
                {...props}
              />
            }/>
            <Route path={`/news/:id/:postid`} exact render={(props) => 
              <NewsItem
                data={navData[activeIndex].articles}
                language={language}
                notFound={this.notFound}
                {...props}
              />
            }/>
          </div>
        </div>
      )
    }
  }
}

const styles = {
  subnav: {
    paddingBottom: 30, 
    background: `url(${background14})`
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(News);