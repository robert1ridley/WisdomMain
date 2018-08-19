import React from 'react';
import Loadable from 'react-loadable';
// import SiteNav from '../components/SiteNav';
// import SocialShare from '../components/SocialShare';
// import Footer from '../components/Footer';
// import ScrollTo from '../components/ScrollTo';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import News from '../pages/News';
// import Solutions from '../pages/Solutions';
// import Projects from '../pages/Projects';
// import Careers from '../pages/Careers';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';
import { Route, Switch } from 'react-router-dom';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ '../pages/Home'),
  loading: () => null,
  modules: ['Home']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "Aboutpage" */ '../pages/About'),
  loading: () => null,
  modules: ['About']
});

const News = Loadable({
  loader: () => import(/* webpackChunkName: "Newspage" */ '../pages/News'),
  loading: () => null,
  modules: ['News']
});

const Solutions = Loadable({
  loader: () => import(/* webpackChunkName: "Solutionspage" */ '../pages/Solutions'),
  loading: () => null,
  modules: ['Solutions']
});

const Projects = Loadable({
  loader: () => import(/* webpackChunkName: "Projectspage" */ '../pages/Projects'),
  loading: () => null,
  modules: ['Projects']
});

const Careers = Loadable({
  loader: () => import(/* webpackChunkName: "Careerspage" */ '../pages/Careers'),
  loading: () => null,
  modules: ['Careers']
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "Contactpage" */ '../pages/Contact'),
  loading: () => null,
  modules: ['Contact']
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFoundpage" */ '../pages/NotFound'),
  loading: () => null,
  modules: ['NotFound']
});

const SiteNav = Loadable({
  loader: () => import(/* webpackChunkName: "SiteNavpage" */ '../components/SiteNav'),
  loading: () => null,
  modules: ['SiteNav']
});

const SocialShare = Loadable({
  loader: () => import(/* webpackChunkName: "SocialSharepage" */ '../components/SocialShare'),
  loading: () => null,
  modules: ['SocialShare']
});

const Footer = Loadable({
  loader: () => import(/* webpackChunkName: "Footerpage" */ '../components/Footer'),
  loading: () => null,
  modules: ['Footer']
});

const ScrollTo = Loadable({
  loader: () => import(/* webpackChunkName: "ScrollTopage" */ '../components/ScrollTo'),
  loading: () => null,
  modules: ['ScrollTo']
});

export default () => (
  <div>
    <Route component={ScrollToTop} />
    <SiteNav />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about/:id" exact component={About}/>
      <Route path="/news/:id" component={News}/>
      <Route path="/solutions/:id" exact component={Solutions}/>
      <Route path="/projects/:id" exact component={Projects}/>
      <Route path="/careers/:id" exact component={Careers}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="*" component={NotFound}/>
    </Switch>
    <SocialShare />
    <Footer />
    <ScrollTo />
  </div>
)

const ScrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
};