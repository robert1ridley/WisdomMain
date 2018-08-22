import React from 'react';
import { connect } from 'react-redux';
import backgroundImage2 from '../images/background2.jpg';
import backgroundImage2tiny from '../images/background2-tiny.jpg';
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
          <div className="container">
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
    backgroundImage: 'url(' + backgroundImage2 + ')'
  },

  loading: {
    backgroundImage: 'url(' + backgroundImage2tiny + ')'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(SocialShare);