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
      <div style={this.state.visible===false? styles.loading: styles.background}>
        <div className="container">
          <Intro 
            data={sharingdata}
            language={this.props.language}
            color={{color:'white'}}
          />
          <SocialShareBlock />
        </div>
      </div>
    )
  }
}

const styles = {
  background: {
    background: 'url(' + backgroundImage2 + ') no-repeat center center fixed',
    minHeight: 565
  },
  loading: {
    background: 'url(' + backgroundImage2tiny + ') no-repeat center center fixed',
    minHeight: 565
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(SocialShare);