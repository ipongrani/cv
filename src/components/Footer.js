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

import { connect } from 'react-redux';








const mapStateToProps = (state) => {
  return {
    drawer: state.centralState.drawer,
  };
};


const mapDispatchToProps = dispatch => {
  return {

  };
};






let Cont = Styled.div`
 
  z-index: 100;
  padding: ${ props => props.drawer === true ? '0 0 0 200px' : '0' };
  transition: padding .5s;

  nav {
    
    border-top: 12px solid #404040;
    background-color: black; //hsl(284, 100%, 10%);
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



class Footer extends React.Component {
  

  //render
  render() {

    //initializer
    let { drawer } = this.props;

    return (
      <Cont drawer={drawer}>
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


export default connect(mapStateToProps,mapDispatchToProps)(Footer)