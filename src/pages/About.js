import React from 'react';
import {connect} from 'react-redux';
import { Image, Well } from 'react-bootstrap';
import SocialShare from '../components/SocialShare';
import ParagraphsIntro from '../components/ParagraphsIntro';
import aboutdatabasic from '../data/about/aboutdatabasic';

class About extends React.Component {
  
  render() {
    return (
      <div>
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