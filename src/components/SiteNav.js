import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/sitenav.css';
import logo from '../images/logo.png';

export default class SiteNav extends React.Component {
  render() {
    var headings = this.props.headings.map(heading => 
      <NavItem key={heading.id} eventKey={heading.id}
       href="#"><span className={heading.icon}/> {heading.head}</NavItem>
    )

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
            {headings}
            <NavDropdown eventKey={8} title={this.props.lingua} id="basic-nav-dropdown">
              <MenuItem eventKey={8.1} onClick={this.props.action}>中文</MenuItem>
              <MenuItem eventKey={8.2} onClick={this.props.actiontwo}>English</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
