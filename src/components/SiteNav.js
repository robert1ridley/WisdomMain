import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchLanguage} from '../actions/index';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import headers from '../data/headersdata';
import { getLocationFromParams } from '../utils/index';
import '../styles/sitenav.css';
import logo from '../images/logo.png';

class SiteNav extends React.Component {
  state = {
    path: '/'
  }

  componentDidMount() {
    if(typeof(window) !== 'undefined') {
      const path = getLocationFromParams(window.location.pathname);
      this.setState({
        path: path
      })
    }
  }

  updatePath = (newPath) => {
    newPath = getLocationFromParams(newPath)
    this.setState({
      path: newPath
    })
  }

  render() {
    console.log(this.state.path)
    const headings = this.props.language === "zh"? headers.chinese: headers.english;
    const titles = headings.map(heading => 
      <LinkContainer 
        to={heading.link} 
        key={heading.id} 
        onClick={() => this.updatePath(heading.link)}
        className={this.state.path === getLocationFromParams(heading.link) ? "clicked" : "not-clicked"}
      >
        <NavItem eventKey={heading.id}>{heading.head}</NavItem>
      </LinkContainer>
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
              <Image src={logo} responsive/>
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
      language: state.language
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchLanguage: switchLanguage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SiteNav);