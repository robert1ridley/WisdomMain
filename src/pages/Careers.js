import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import CareersHead from '../headers/CareersHead';
import NotFound from '../pages/NotFound';
import Subnav from '../components/Subnav';
import TextCards from '../components/TextCards';
import InfoCards from '../components/InfoCards';
import careersheaddata from '../data/careers/careersheaddata';
import careerslistdata from '../data/careers/careerslistdata';
import jobsdata from '../data/careers/jobsdata';

import background14 from '../images/subnav/background14.jpg';

class Careers extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { 
      activeIndex: 0,
      notFound: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const pageId = nextProps.match.params.id;
    if (this.props.match.params.id !== pageId){
      const foundIndex = careerslistdata.findIndex((el) => (el.id === pageId));
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
    const foundIndex = careerslistdata.findIndex((el) => (el.id === pageId));
    foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
    this.setState({
      activeIndex: foundIndex
    })
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }
  
  render() {
    const navData = careerslistdata;
    const { language } = this.props;
    const { activeIndex, notFound } = this.state;
    if(notFound){
      return (<NotFound />)
    }
    else{
      return (
        <div>
          <CareersHead />
          <Subnav
            path="careers"
            language={language}
            intro={careersheaddata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          <div className="container">
            {
              navData[activeIndex].id === 'jobs'?
              <Route path={`/careers/:id`} exact render={(props) => 
                <TextCards
                  language={language}
                  data={jobsdata}
                  {...props}
                />
              }/>:
              <Route path={`/careers/:id`} exact render={(props) => 
                <InfoCards
                  language={language}
                  {...props}
                />
              }/>
            }
          </div>
        </div>
      )
    }
  }
}

const styles = {
  subnav: {
    paddingBottom: 30, 
    background: 'url(' + background14 + ')'
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Careers);