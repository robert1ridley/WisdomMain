import React from 'react';
import { Link, Route } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import NotFound from '../pages/NotFound';
import Subnav from '../components/Subnav';
import newsheaddata from '../data/news/newsheaddata';
import newsdata from '../data/news/newsdata';
import background14 from '../images/subnav/background14.jpg';
import NewsItem from './NewsItem';

class News extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.calcSize = this.calcSize.bind(this);
    this.state = { 
      activeIndex: 0,
      windowWidth: window.innerWidth,
      notFound: false
    }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }

  calcSize(){
    this.setState({windowWidth: window.innerWidth})
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
  
  componentDidMount(){
    window.addEventListener('resize', this.calcSize)
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
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.calcSize)
  }

  render() {
    const { language } = this.props;
    const { activeIndex, windowWidth, notFound } = this.state;
    const navData = newsdata;
    const navButtons = language === "zh"? ["上一页", "下一页"]: ["Prev", "Next"];
    if(notFound){
      return(<NotFound />)
    }
    else{
      return (
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
          <div className="container" style={{marginTop: 50, marginBottom: 50}}>
            <OwlCarousel 
              className="owl-theme"
              loop margin={10} 
              nav
              navText={navButtons}
              items={windowWidth < 768 ? 1 : windowWidth < 1100 ? 2 : 3}
            >
            {
              navData[activeIndex].articles.map((item, index) => 
                <Link to={`/news/${item.id}`} className="black-text" key={item.id}>
                  <div className="item">
                    <Image src={item.headImage} alt="image" />
                    <div className="card-body text-center">
                      <h4 className="card-title">{item.head[language]}</h4>
                    </div>
                  </div>
                </Link>
              )
            }
            </OwlCarousel>
          </div>
          <Route path={`/news/:id`} exact component={NewsItem} />
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