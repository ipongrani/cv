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


  position: fixed;
  width: 100%;
  z-index: 100; 
  padding: ${ props => props.drawer === true ? '0 0 0 200px' : '0' };
  transition: padding .5s;
  

  nav {
    background-color: black;
    border-bottom: .3px solid #404040;
    padding: ${ props => props.drawer === true ? '3px 10px 3px 25px' : '3px 10px 3px 15px' };
    transition: all .3s;

    .nav-link { 
      color: white !important;
    }

    .topLinks { 
      display: initial;

      @media screen and (min-width: 768px) {
        display: none;
      }
    }
    

    .nb {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      color: white;

      span {
        font-size: 14px;
        color: white;
      }

    }

  }

`;




class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      headColor: 'white',
      headFont: 'black'
    };
  }



  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  handleScroll = () => {

    window.scrollY > 100 ?
        this.setState({headColor: 'black', headFont: 'white'}) :
        this.setState({headColor: 'white', headFont: 'black'});
  }



  componentDidMount(){
      this.setState({lastScrollY: window.scrollY});
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount(){
      window.removeEventListener('scroll', this.handleScroll);
  }


  render() {

    let { headColor, headFont } = this.state;
    let { drawer } = this.props


    return (
      <Cont headColor={headColor} drawer={drawer} headFont={headFont}>
        <Navbar dark expand="md">
          <NavbarBrand href="/"><div className="nb" >Rani T. Ipong<span>Back-end / Front-end Developer</span></div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="topLinks">
                <NavLink href="#Node">Node.js</NavLink>
              </NavItem>
              <NavItem className="topLinks">
                <NavLink href="#React">React.js</NavLink>
              </NavItem>
              <NavItem className="topLinks">
                <NavLink href="#Mongo">Mongo.db</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a style={{color: 'black'}} href="https://github.com/ipongrani">GitHub</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <a style={{color: 'black'}} href="mailto:ipongrani@gmail.com">Contact</a>              
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Cont>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navigation);