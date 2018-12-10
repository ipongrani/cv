import React from 'react';
import Styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Calc from './miniApp/Calc';
import ToDo from './miniApp/ToDo';
import RandNum from './miniApp/RandNum';
import Encryption from './miniApp/Encryption';
import JwtEnc from './miniApp/JwtEnc';
import MLabWrite from './miniApp/MongodbWrite';
import MLabRead from './miniApp/MongodbRead';
import Gql from './miniApp/gql';
import Welcome from './Welcome';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { toggleDrawer, setDrawerOption } from '../../lib/redux/actions/index';
import { connect } from 'react-redux';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
//import Home_ from './Home_';


const mapStateToProps = (state) => {
  return {
    drawer: state.centralState.drawer,
    drawerOption: state.centralState.drawerOption,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: param => dispatch(toggleDrawer(param)),
    setDrawerOption: param => dispatch(setDrawerOption(param))
  };
};


let Cont = Styled.div`
  margin: 0;
  padding:  0;
  min-height: 100vh;


  .mainPanel {
    border-right: ${ props => props.drawer === true ? '3px solid grey' : '0'};
    width: ${ props => props.drawer === true ? '205px !important' : '200px'};
  }

  .subPanel {
    //border: 1px solid red;
    padding: 18px 0 0 0;
  }

  .panel, .mainPanel {
    //border: 3px solid red;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${ props => props.drawer === true ? '0' : '-200px'};
    background-color: ${ props => 
                        props.drawerOption === "React" ? 
                        'rgb(160, 208, 255)' : 
                        props.drawerOption === "Node" ? 
                        'rgb(182, 255, 175)' :
                        props.drawerOption === "Databases" ? 
                        'rgb(255, 255, 209)' : 
                        "white"
                      };  
    transition: all .5s;
    z-index: 101;
    display: none;


    @media screen and (min-width: 768px) {
      display: flex;
      flex-flow: column nowrap;
     
     
      h3 {
        text-align: left;
        padding: 0 0 0 15px;
        margin: 0 0 15px 0;
      }
    }
    

    .sideBtn{
      width: 100px;
      height: 200px;
      position: absolute;
      right: -90px
      top: 85px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      //border: 3px solid red;

      input[type='button'] {
        height 60px;
        width:100%;
        transition: all .5s;
        text-align: center;
        padding: 0 0 0 8px;
        border-radius: 15px;
        outline:none;
        background-color: ${ props => 
                        props.drawerOption === "React" ? 
                        'rgb(160, 208, 255)' : 
                        props.drawerOption === "Node" ? 
                        'rgb(182, 255, 175)' :
                        props.drawerOption === "Databases" ? 
                        'rgb(255, 255, 209)' : 
                        "white"
                      };  
      }

    }
  }



  .containerBody {
    background-color: rgb(240, 240, 240);
    padding: 50px 0 20px 0;
    min-height: 100vh;
    //border: 3px solid red;

    @media screen and (min-width: 800px) {

      padding: 55px 10px 30px 10px !important;
      transition: padding .5s;
      padding-left: ${ props => props.drawer === true ? '215px !important' : '10px'};
    
    }

    .displayPage {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-top: 15px;
      padding: 10px
      //order: 3px solid blue;
    }

  }
`;


 class Home extends React.Component {

  //state
  state = {
    collapse: false,
    miniApp: '',
  }


  componentDidUpdate(prevProps, prevState) {
    
    window.scrollTo(0, 0);
  
  }


  //select drawer
  selectDrawer = ( event ) => {
    event.preventDefault();

    //initialize
    let { toggleDrawer, setDrawerOption, drawer, drawerOption } = this.props;
    let name = event['target'].getAttribute('name');

    //case action
    drawer === true && drawerOption === name ? 
    (toggleDrawer(false), setDrawerOption("default")) : 
    (toggleDrawer(true), setDrawerOption(name)) ;

  }


  //generate side buttons
  genSideBtns = (param) => 
    param.map ( data => 
    <input type="button" 
    name={data.btnName} 
    onClick={this.selectDrawer} 
    value={data.btnName} /> 
  )


  //dropdown toggle
  toggleDropdown = () => this.setState({ collapse: !this.state.collapse });

  


  //Render
  render() {
   
    //initialize
    let { collapse } = this.state;
    let { drawer, drawerOption } = this.props;
    let { selectDrawer, genSideBtns, toggleDropdown, handlePanelClick } = this; 
    let sideBtns = [ {btnName: 'React'}, {btnName: 'Node'}, {btnName: 'Databases'} ];
   

  //return
    return (
      <Cont drawer={drawer} drawerOption={drawerOption}>

        <div className="panel mainPanel">
            <div className="panel subPanel">
              <h3>{ drawerOption }</h3>
              { 
                drawerOption === "React" ?
                (
                 <React.Fragment>
                  <Link type="button" name="ToDo" to="/sample/todo">Simple To-Do list</Link>
                  <Link type="button" name="Calc" to="/sample/calc">Simple Calculator</Link>
                  <Link type="button" name="RandNum" to="/sample/randnum">Random Number</Link>
                 </React.Fragment>
                 ) : 
                 drawerOption === "Node" ?
                 (
                 <React.Fragment>
                  <Link type="button" name="Encryption" to="/sample/encryption">BCrypt Encryption</Link>
                  <Link type="button" name="JwtEnc" to="/sample/jwtEncryption">JWT Encryption</Link>
                 </React.Fragment>
                 ) :
                 drawerOption === "Databases" ?
                 (
                 <React.Fragment>
                  <Link type="button" name="Encryption" to="/sample/mongowrite">Writing to MongoDb</Link>
                  <Link type="button" name="JwtEnc" to="/sample/mongread">Reading from MongoDb</Link>
                 </React.Fragment>
                 ) : null 
              }
            </div>
            <div className="sideBtn">
              { genSideBtns(sideBtns) }
            </div>
        </div>


        <Container fluid className="containerBody">
          <div className="displayPage">
              <Route exact path="/" component={Welcome} />
              <Route path="/sample/todo" component={ToDo} />
              <Route path="/sample/calc" component={Calc} />
              <Route path="/sample/randnum" component={RandNum} />
              <Route path="/sample/encryption" component={Encryption} />
              <Route path="/sample/jwtEncryption" component={JwtEnc} /> 
              <Route path="/sample/mongowrite" component={MLabWrite} />
              <Route path="/sample/mongread" component={MLabRead} /> 
          </div>
        </Container>

      </Cont>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);