import React from 'react';
import '../styles/sidebar.css';
import { Image } from 'react-bootstrap';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.changeActive = this.changeActive.bind(this);
    this.setIndex = this.setIndex.bind(this);

    this.state = {
        active: true,
        index: 0
    };
}

changeActive(){
  this.setState({active: !this.state.active})
}

setIndex(idx){
  this.setState({index: idx})
  console.log(this.state.index)
}


  render() {
    const Items = this.props.data[this.props.currentActive].items.map((item, index) => 
      <li key={index}>
        <a 
          className={this.state.index===index? "clicked": "not-clicked"} 
          style={{cursor:"pointer"}} 
          onClick={() => this.setIndex(index)}>
          {item.articleHead}
        </a>
      </li>
    )

    return (
        <div className="sidebar-wrapper">
          <nav id="sidebar" className={this.state.active===true?"wow fadeInLeft": "active wow fadeInLeft"}>
            <div className="sidebar-header">
              <h3>{this.props.data[this.props.currentActive].head}</h3>
            </div>
            <ul className="list-unstyled components">
              {Items}
            </ul>
          </nav>
          <div className="container">
            <div id="content" className="wow fadeIn">
              <button type="button" id="sidebarCollapse" className="btn navbar-btn toggle-button" onClick={this.changeActive}>
                <i className="glyphicon glyphicon-align-justify"></i>
              </button>
              <div className="rounded-card" 
                style={{padding: 25, marginBottom: 40}}>
                <h3 className="text-center medium-head">
                  {this.props.data[this.props.currentActive].items[this.state.index].articleHead}
                </h3>
                <Image 
                  style={{width: "100%"}} 
                  src={this.props.data[this.props.currentActive].items[this.state.index].articleImage} 
                  responsive
                />
                <p className="medium-body">
                  {this.props.data[this.props.currentActive].items[this.state.index].articleText}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}