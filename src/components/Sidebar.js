import React from 'react';
import '../styles/sidebar.css';
import { Image } from 'react-bootstrap';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.changeActive = this.changeActive.bind(this);
    this.calcSize = this.calcSize.bind(this);
    if (typeof window !== 'undefined') {
      this.state = {
          active: true,
          windowWidth: window.innerWidth
      };
    } else {
      this.state = {
        active: true
      }
    }
}

calcSize(){
  if (typeof window !== 'undefined') {
    this.setState({windowWidth: window.innerWidth})
  }
}

componentDidMount(){
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', this.calcSize)
  }
}

componentWillUnmount(){
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', this.calcSize)
  }
}

changeActive(){
  this.setState({active: !this.state.active})
}

  render() {
    const { data, currentSubActive, changeSubActive, language, currentActive } = this.props;
    const { active } = this.state;
    const Items = data[currentActive].items.map((item, index) => 
      <li key={index}>
        <a 
          className={currentSubActive===index? "clicked": "not-clicked"} 
          style={{cursor:"pointer"}} 
          onClick={() => changeSubActive(index)}
        >
          {item.articleHead[language]}
        </a>
      </li>
    )
    return (
        <div className="sidebar-wrapper">
          <nav id="sidebar" className={active===true?"wow fadeInLeft": "notActive wow fadeInLeft"}>
            <div className="sidebar-header">
              <h3>{data[currentActive].head[language]}</h3>
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
                  {data[currentActive].items[currentSubActive].articleHead[language]}
                </h3>
                <Image 
                  style={{width: "100%"}} 
                  src={data[currentActive].items[currentSubActive].articleImage} 
                  responsive
                />
                <p className="medium-body">
                  {data[currentActive].items[currentSubActive].articleText[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}