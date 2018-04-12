import React from 'react';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import Sidebar from '../components/Sidebar';

import achievementsdata from '../data/achievements/achievementsdata';

import background14 from '../images/subnav/background14.jpg';

class Achievements extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.changeSubActive = this.changeSubActive.bind(this);
    this.state = { 
      activeIndex: 0,
      subActive: 0 
    }
  }

  componentDidMount() {
    const pageId = Number(this.props.match.params.id);
    const foundIndex = achievementsdata.subCategories.findIndex((el) => (el.id === pageId));
    this.setState({
      activeIndex: foundIndex
    })
  }

  changeActive(active) {
    this.setState({ activeIndex: active, subActive: 0 })
  }
  
  changeSubActive(subActive) {
    this.setState({ subActive: subActive })
  }

  render() {
    const { language } = this.props;
    const navData = achievementsdata.subCategories;
    console.log(navData);
    return (
      <div>
        <Subnav
          path="achievements"
          language={language}
          intro={achievementsdata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        <Sidebar 
          data={navData}
          language={language}
          currentActive={this.state.activeIndex}
          currentSubActive={this.state.subActive}
          changeSubActive={this.changeSubActive}
        />
      </div>
    )
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

export default connect(mapStateToProps)(Achievements);