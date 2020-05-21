import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import MembraneHead from '../headers/MembraneHead';
import GenericTech from '../components/GenericTech';
import MembraneCases from '../components/MembraneCases';
import Subnav from '../components/Subnav';
import NotFound from '../pages/NotFound';

import membraneheaddata from '../data/membrane/membraneheaddata';
import membranebasic from '../data/membrane/membranebasic';
import membranesolutions from '../data/membrane/membranesolutions';

import membraneBackground from '../images/mission/membrane-background.jpg';

class Membrane extends React.Component {
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
      const foundIndex = membranebasic.findIndex((el) => (el.id === pageId));
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
    const foundIndex = membranebasic.findIndex((el) => (el.id === pageId));
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
    const navData = membranebasic;
    if(notFound){
      return (<NotFound/>)
    }
    else{
      return (
        <div>
          <MembraneHead />
          <Subnav
            path="mission/membrane"
            language={language}
            intro={membraneheaddata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          {
            <Route path={`/mission/membrane/:id`} exact render={(props) => 
              {
                switch(navData[activeIndex].template) {
                  case('standard'):
                    return (
                      <GenericTech 
                        language={language} 
                        currentData={navData[activeIndex]} 
                        solutionsData={membranesolutions}
                      />
                    )
                  case('standard2'):
                    return (
                      <MembraneCases
                        language={language}
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
    background: 'url(' + membraneBackground + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Membrane);