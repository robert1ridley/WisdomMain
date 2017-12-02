import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchLanguage} from '../actions/index';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import headers from '../data/headersdata';
import '../styles/sitenav.css';
import logo from '../images/logo.png';

class SiteNav extends React.Component {
  render() {
    const headings = this.props.language === "zh"? headers.chinese: headers.english;
    const titles = headings.map(heading => 
      <LinkContainer to={heading.link}>
        <NavItem eventKey={heading.id}>{heading.head}</NavItem>
      </LinkContainer>
    )

    const langTitle = this.props.language === "zh"? "中文": "English";

    return (
      <Navbar collapseOnSelect>
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