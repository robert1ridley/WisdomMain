import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchLanguage, switchPage} from '../actions/index';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import headers from '../data/headersdata';
import { getLocationFromParams } from '../utils/index';
import '../styles/sitenav.css';
import logo from '../images/logo-orig2.png';

class SiteNav extends React.Component {

  componentDidMount() {
    if(typeof(window) !== 'undefined') {
      const path = getLocationFromParams(window.location.pathname);
      this.props.switchPage(path)
    }
  }

  componentDidUpdate() {
    window.onpopstate  = (e) => {
      const path = getLocationFromParams(window.location.pathname);
      this.props.switchPage(path)
    }
  }

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.props.switchPage(newPath)
  }

  render() {
    const headings = this.props.language === "zh"? headers.chinese: headers.english;
    const titles = headings.map(heading => 
      heading.id !== 4?
      <LinkContainer 
        to={heading.link} 
        key={heading.id} 
        onClick={() => this.updatePath(heading.link)}
        className={this.props.page === getLocationFromParams(heading.link) ? "clicked" : "not-clicked"}
      >
        <NavItem eventKey={heading.id}>{heading.head}</NavItem>
      </LinkContainer> :
      <NavDropdown 
        eventKey={heading.id} 
        key={heading.id} 
        title={heading.head} 
        id="basic-nav-dropdown" 
        className={this.props.page === getLocationFromParams(heading.link) ? "clicked" : "not-clicked"}>
          <LinkContainer 
            to={heading.link}
            onClick={() => this.updatePath(heading.link)}
          >
            <MenuItem className="nav-background" >{heading.head}</MenuItem>
          </LinkContainer>
          <hr style={{margin: 10}}/>
          {heading.sublist.map(subItem => 
            <LinkContainer 
              to={subItem.link}
              key={subItem.id}
              onClick={() => this.updatePath(heading.link)}
            >
              <MenuItem className="nav-background" >{subItem.head}</MenuItem>
            </LinkContainer>
          )}
      </NavDropdown>
    )

    const langTitle = this.props.language === "zh"? "中文/Chinese": "English/英语";

    return (
      <Navbar 
        className={this.props.language === "zh" ? 'chinese-head' : 'english-head'} 
        collapseOnSelect
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image src={logo} alt="logo" responsive/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {titles}
            <NavDropdown eventKey={8} title={langTitle} id="basic-nav-dropdown">
              <MenuItem className="nav-background" eventKey={8.1} onClick={() => this.props.switchLanguage("zh")}>中文</MenuItem>
              <MenuItem className="nav-background" eventKey={8.2} onClick={() => this.props.switchLanguage("en")}>English</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
      language: state.language,
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchLanguage: switchLanguage, switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SiteNav);