import React from 'react';
import {connect} from 'react-redux';
import { Image, Well } from 'react-bootstrap';
import SocialShare from '../components/SocialShare';
import ParagraphsIntro from '../components/ParagraphsIntro';
import ScrollTo from '../components/ScrollTo';

import aboutdatabasic from '../data/about/aboutdatabasic';

//component imports
import SiteNav from '../components/SiteNav';

class About extends React.Component {
  
  render() {
    return (
      <div>
        <SiteNav />
        <div className="container upper-margin">
          {/* <Well className="wow fadeInLeft big-lower-margin">
            <ParagraphsIntro 
              language={this.props.language}
              data={aboutdatabasic}
            />
            <Image
              src={aboutdatabasic.imgUrl}
              className="center-img lower-margin"
              responsive 
            />
          </Well>
          <Well className="wow fadeInLeft ">
            <ParagraphsIntro 
              className="upper-margin"
              language={this.props.language}
              data={aboutdatabasic}
            />
            <Image
              src={aboutdatabasic.imgUrl}
              className="center-img"
              responsive 
            />
          </Well> */}
        </div>
        <SocialShare language={this.props.language}/>
        <ScrollTo />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);