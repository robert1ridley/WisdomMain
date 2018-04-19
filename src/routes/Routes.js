import React from 'react';
import SiteNav from '../components/SiteNav';
import SocialShare from '../components/SocialShare';
import Footer from '../components/Footer';
import ScrollTo from '../components/ScrollTo';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Solutions from '../pages/Solutions';
import Projects from '../pages/Projects';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => (
  <BrowserRouter>
      <div>
        <Route component={ScrollToTop} />
        <SiteNav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about/:id" component={About}/>
          <Route path="/news/:id" component={News}/>
          <Route path="/solutions/:id" component={Solutions}/>
          <Route path="/projects/:id" component={Projects}/>
          <Route path="/careers/:id" component={Careers}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <SocialShare />
        <Footer />
        <ScrollTo />
      </div>
  </BrowserRouter>
)

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};