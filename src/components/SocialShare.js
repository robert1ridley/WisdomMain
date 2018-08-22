import React from 'react';
import { connect } from 'react-redux';
import backgroundImage14 from '../images/subnav/background14.jpg';
import backgroundImage14tiny from '../images/subnav/background14-tiny.jpg';
import Intro from '../components/Intro';
import SocialShareBlock from '../components/SocialShareBlock';
import sharingdata from '../data/sharingdata';

class SocialShare extends React.Component {
  constructor(props){
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      visible: false
    }
  }

  show(){
      this.setState({visible: true})
  }

  componentDidMount(){
      this.show()
  }

  render () {
    return (
      <div style={{backgroundColor: '#595959'}}>
        <div 
          style={this.state.visible===false? styles.loading: styles.background}
          className={this.state.visible===false? "background-loading": "background-loaded"}
        >
          <div className="container main-content-container">
            <Intro 
              data={sharingdata}
              language={this.props.language}
              color={'white'}
            />
            <SocialShareBlock />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundImage: 'url(' + backgroundImage14 + ')'
  },

  loading: {
    backgroundImage: 'url(' + backgroundImage14tiny + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(SocialShare);