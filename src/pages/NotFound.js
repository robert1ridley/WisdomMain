import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const text = {
  head: {
    zh: "发生错误",
    en: "Oops! Something went wrong"
  },
  body: {
    zh: "或许这个网页不存在了",
    en: "Perhaps the webpage doesn't exist any longer!"
  },
  button: {
    zh: "返回",
    en: "Go back"
  }
}

class NotFound extends React.Component {

  goBack = (props) => {
    this.props.history.goBack();
  }

  render() {
    const { language } = this.props;
    return (
      <div className="text-center central-info wow fadeIn">
        <h1 className="big-head">{text.head[language]}</h1>
        <p className="big-body">{text.body[language]}</p>
        <Button 
          onClick={this.goBack.bind(this)}
          className="rounded-card"
          style={styles.buttonStyle}
        >
        {text.button[language]}
        </Button>
      </div>
    )
  }
}

const styles = {
  buttonStyle: {
    marginTop: 20,
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 100,
    backgroundColor: '#7ebc59',
    color: 'white'
  }
}

function mapStateToProps(state) {
  return {
      language: state.language
  };
}

const wrappedComponent = connect(mapStateToProps)(NotFound)
export default withRouter(wrappedComponent);