import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

//components
import Accordion from '../components/Accordion';
import ProjectsHead from '../headers/ProjectsHead';
import Subnav from '../components/Subnav';
import Sidebar from '../components/Sidebar';
import NotFound from '../pages/NotFound';

//data
import projectsdata from '../data/projects/projectsdata';

//assets
import background14 from '../images/subnav/background14.jpg';

class Projects extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.changeSubActive = this.changeSubActive.bind(this);
    this.state = { 
      activeIndex: 0,
      subActive: 0,
      notFound: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const pageId = nextProps.match.params.id;
    if (this.props.match.params.id !== pageId){
      const foundIndex = projectsdata.subCategories.findIndex((el) => (el.id === pageId));
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
    const foundIndex = projectsdata.subCategories.findIndex((el) => (el.id === pageId));
    foundIndex<0 ?
      this.setState ({
        notFound: true
      }):
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
    const { activeIndex, subActive, notFound } = this.state;
    console.log(activeIndex);
    const navData = projectsdata.subCategories;
    if(notFound){
      return(<NotFound />)
    }
    else {
      return (
        <div>
          <ProjectsHead />
          <Subnav
            path="projects"
            language={language}
            intro={projectsdata}
            aboutData={navData}
            currentActive={activeIndex}
            childActive={this.changeActive}
            background={styles.subnav}
          />
          <Accordion 
            data={navData}
            language={language}
            currentActive={activeIndex}
            currentSubActive={subActive}
            changeSubActive={this.changeSubActive}
          />
          {/* <Route path={`/projects/:id`} render={(props) =>
            <Sidebar 
              data={navData}
              language={language}
              currentActive={activeIndex}
              currentSubActive={subActive}
              changeSubActive={this.changeSubActive}
              {...props}
            />
          }/> */}
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

export default connect(mapStateToProps)(Projects);