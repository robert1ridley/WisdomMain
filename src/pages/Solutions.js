import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import NotFound from '../pages/NotFound';
// import ParagraphsNew from '../components/ParagraphsNew';
import ParagraphsNew from '../components/NEW/ParagraphsNew';

// import plansdata from '../data/plans/plansdata';
import solutionsdata from '../data/NEW/solutionsdata';
import solutionsheaddata from '../data/solutions/solutionsheaddata';

import background14 from '../images/subnav/background14.jpg';
import SolutionCards from '../components/SolutionCards';

class Solutions extends React.Component {
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
    const pageId = Number(nextProps.match.params.id);
    if (this.props.match.params.id !== pageId){
      const foundIndex = solutionsdata.findIndex((el) => (el.id === pageId));
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
    const pageId = Number(this.props.match.params.id);
    const foundIndex = solutionsdata.findIndex((el) => (el.id === pageId));
    foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
    this.setState({
      activeIndex: foundIndex
    })
  }
  
  render() {
    const navData = solutionsdata;
    const { language } = this.props;
    const { activeIndex, notFound } = this.state;
    if(notFound){
      return(<NotFound />)
    }
    else{
      return (
        <div>
          <Subnav
            path="solutions"
            language={language}
            intro={solutionsheaddata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          <Route path={`/solutions/:id`} exact render={(props) =>
            <div className="container">
              <SolutionCards
                language={language}
                data={navData}
                activeIndex={activeIndex}
              />
            </div>
          }/>
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

export default connect(mapStateToProps)(Solutions);