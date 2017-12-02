import React from 'react';
import {connect} from 'react-redux';
import { Image, Well } from 'react-bootstrap';

import Subnav from '../components/Subnav';

import aboutdatabasic from '../data/about/aboutdatabasic';

class About extends React.Component {
  
  render() {
    return (
      <div>
        {/* <div className="green-back" style={{paddingBottom: 30}}>
          <div className="container"> */}
            <Subnav language={this.props.language}/>
          {/* </div>
        </div>
        <div className="container both-margin">
          <div className="wow fadeInLeft big-lower-margin rounded-card" style={{padding:20}}>
            <ParagraphsIntro 
              language={this.props.language}
              data={aboutdatabasic}
            />
            <Image
              src={aboutdatabasic.imgUrl}
              className="center-img lower-margin"
              responsive 
            />
          </div>
        </div> */}
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