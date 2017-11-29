import React from 'react';
import { Image } from 'react-bootstrap';
import footer from '../images/footer.jpg';

export default class Footer extends React.Component {
  render () {
    return (
      <div id="footer">
        <div class="container">
          <Image className="center-img" src={footer} responsive/>
          <p>This is a header in the Footer</p>
        </div>
      </div>
    )
  }
}