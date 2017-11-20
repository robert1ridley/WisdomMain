import React from 'react';
import axios from 'axios';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    axios.get('/api/data')
    .then((response) => { 
      this.setState({data: response.data})
    });
  }

  render() {
    var text = this.props.language === true? this.state.data.chinese: this.state.data.english;    
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}