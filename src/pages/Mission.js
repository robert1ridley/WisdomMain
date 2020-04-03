import React from 'react';
import {connect} from 'react-redux';
import MissionHead from '../headers/MissionHead';
import SubNoNav from '../components/SubNoNav';
import MissionMain from '../components/MissionMain';
import missionheaddata from '../data/missiondata/missionheaddata';
import background14 from '../images/subnav/background14.jpg';

const Mission = (props) => {
    const { language } = props;
    return (
        <div>
            <MissionHead />
            <SubNoNav
                language={language}
                intro={missionheaddata}
                background={styles.subnav}
            />
            <MissionMain language={language} />        
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

export default connect(mapStateToProps)(Mission);