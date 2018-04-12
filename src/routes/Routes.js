import React from 'react';
import SiteNav from '../components/SiteNav';
import SocialShare from '../components/SocialShare';
import Footer from '../components/Footer';
import ScrollTo from '../components/ScrollTo';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Plans from '../pages/Plans';
import Achievements from '../pages/Achievements';
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
          <Route path="/plans/:id" component={Plans}/>
          <Route path="/achievements/:id" component={Achievements}/>
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
  // window.scrollTo(0, 0);
  return null;
};