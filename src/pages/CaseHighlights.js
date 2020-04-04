import React from 'react';
import {connect} from 'react-redux';
import CaseHighlightsHead from '../headers/CaseHighlightsHead';
import CaseHighlightsMain from '../components/CaseHighlightsMain';
import SubNoNav from '../components/SubNoNav';
import casehighheaddata from '../data/casehighlightsdata/casehighheaddata';
import background14 from '../images/subnav/background14.jpg';

const CaseHighlights = (props) => {
    const { language } = props;
    return (
        <div>
            <CaseHighlightsHead />
            <SubNoNav
                language={language}
                intro={casehighheaddata}
                background={styles.subnav}
            />
            <CaseHighlightsMain language={language} />
        </div>
    )
}

const styles = {    
    subnav: { 
        background: 'url(' + background14 + ')'
    }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(CaseHighlights);