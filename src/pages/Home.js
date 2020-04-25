import React from 'react';
import {connect} from 'react-redux';
import LazyLoad from 'react-lazy-load';
import Loadable from 'react-loadable';
import welcomeImage from '../images/welcome-bg.png';
import '../styles/home.css';

//component imports
import HomeHead from '../headers/HomeHead';
// import CarouselImages from '../components/CarouselImages';
// import Stats from '../components/Stats';
// import AboutBlocks from '../components/AboutBlocks';

const CarouselImages = Loadable({
	loader: () => import(/* webpackChunkName: "CarouselImages" */ '../components/CarouselImages'),
	loading: () => null,
	modules: ['CarouselImages']
});

const Stats = Loadable({
	loader: () => import(/* webpackChunkName: "Stats" */ '../components/Stats'),
	loading: () => null,
	modules: ['Stats']
});

const AboutBlocks = Loadable({
	loader: () => import(/* webpackChunkName: "AboutBlocks" */ '../components/AboutBlocks'),
	loading: () => null,
	modules: ['AboutBlocks']
});

class Home extends React.Component {
  render() {
    const { language } = this.props
    return (
      <div>
        <HomeHead />
        <CarouselImages language={language}/>
        <LazyLoad offsetVertical={70} onContentVisible={() => console.log('Welcome background lazyloaded!')}>
          <div className="background-loaded" style={styles.mainBackground}>
            <div className="main-content-container container">
              <Stats
                language={language}
                color={'black'}
              />
            </div>
          </div>
        </LazyLoad>
        <div style={{backgroundColor: '#eef0f1'}}>
          <AboutBlocks
            language={language}
            color={'black'}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  mainBackground: {
    backgroundImage: 'url(' + welcomeImage + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(Home);