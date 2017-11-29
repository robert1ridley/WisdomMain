import React from 'react';
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
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/news" exact component={News}/>
            <Route path="/plans" exact component={Plans}/>
            <Route path="/achievements" exact component={Achievements}/>
            <Route path="/careers" exact component={Careers}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="*" exact component={NotFound}/>
          </Switch>
      </div>
  </BrowserRouter>
)

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};