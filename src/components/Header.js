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


  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: .3px solid #404040;

  nav {
    background-color: ${props => props.headColor};

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
      isOpen: false,
      headColor: 'hsl(264, 100%, 14%)'
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  handleScroll = () => {

    window.scrollY > 100 ?
        this.setState({headColor: 'hsl(284, 100%, 10%)'}) :
        this.setState({headColor: 'hsl(264, 100%, 14%)'});
  }



  componentDidMount(){
      this.setState({lastScrollY: window.scrollY});
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount(){
      window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <Cont headColor={this.state.headColor}>
        <Navbar dark expand="md">
          <NavbarBrand href="/"><div className="nb" >Rani T. Ipong<span>Back-end / Front-end Developer</span></div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
