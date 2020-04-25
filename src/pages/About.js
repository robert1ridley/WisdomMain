import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import AboutHead from '../headers/AboutHead';
import CompanyAbout from '../components/CompanyAbout';
import Subnav from '../components/Subnav';
import Timeline from '../components/Timeline';
import Certified from '../components/Certified';
import NotFound from '../pages/NotFound';

import '../styles/timeline.css';

import aboutheaddata from '../data/about/aboutheaddata';
import aboutdatabasic from '../data/NEW/aboutdatabasic';

import background14 from '../images/subnav/background14.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { 
      activeIndex: 0,
      notFound: false
    }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }

  componentWillReceiveProps(nextProps) {
    const pageId = nextProps.match.params.id;
    if (this.props.match.params.id !== pageId){
      const foundIndex = aboutdatabasic.findIndex((el) => (el.id === pageId));
      foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
      this.setState({
        activeIndex: foundIndex
      })
    }
  }

  componentDidMount() {
    const pageId = this.props.match.params.id;
    const foundIndex = aboutdatabasic.findIndex((el) => (el.id === pageId));
    foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
    this.setState({
      activeIndex: foundIndex
    })
  }
  
  render() {
    const { activeIndex, notFound } = this.state;
    const { language } = this.props;
    const navData = aboutdatabasic;
    if(notFound){
      return (<NotFound/>)
    }
    else{
      return (
        <div>
          <AboutHead />
          <Subnav
            path="about"
            language={language}
            intro={aboutheaddata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          {
            <Route path={`/about/:id`} exact render={(props) => 
              {
                console.log(navData[activeIndex].template)
                switch(navData[activeIndex].template) {
                  case('standard'):
                    return (
                      <CompanyAbout language={language}/>
                    )
                  case('timeline'):
                    return (
                      <Timeline
                        language={language}
                        data={navData}
                        index={activeIndex}
                        {...props}
                      />
                    )
                  case('certified'):
                    return (
                      <Certified
                        language={language}
                        data={navData}
                        index={activeIndex}
                        {...props}
                      />
                    )
                  default:
                    return (<NotFound />)
                }
              }            
            }/>
          }
        </div>
      )
    }
  }
}

const styles = {
  subnav: { 
    background: 'url(' + background14 + ')'
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);