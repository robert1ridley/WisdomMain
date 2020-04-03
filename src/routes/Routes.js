import React from 'react';
import Loadable from 'react-loadable';
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

const Innovation = Loadable({
  loader: () => import(/* webpackChunkName: "Innovationpage" */ '../pages/Innovation'),
  loading: () => null,
  modules: ['Innovation']
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
      <Route path="/innovation/:id" exact component={Innovation}/>
      <Route path="/news/:id" component={News}/>
      <Route path="/solutions/:id" exact component={Solutions}/>
      <Route path="/projects/:id" exact component={Projects}/>
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