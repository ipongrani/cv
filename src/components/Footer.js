import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



let Cont = Styled.div`

  border-top: 12px solid #404040;



  nav {
    background-color: hsl(284, 100%, 10%);
    display: flex;
    justify-content: center;

    ul {
      margin: 0 !important;
    }


    .nb {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;

      span {
        font-size: 14px;
      }

    }

  }

`;




export default class Navoigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Cont>
        <Navbar dark expand="md">

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#Node">Node.js</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#React">React.js</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Mongo">Mongo.db</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ipongrani">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:ipongrani@gmail.com">Contact</NavLink>
              </NavItem>
            </Nav>

        </Navbar>
      </Cont>
    );
  }
}
