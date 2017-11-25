import React from 'react';
import SiteNav from '../components/SiteNav';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <SiteNav />
        <h1>Page Not Found</h1>
      </div>
    )
  }
}