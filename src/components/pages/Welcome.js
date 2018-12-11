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
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { toggleDrawer, setDrawerOption } from '../../lib/redux/actions/index';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';


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
  padding: 0;
  width: 100%;
  //border: 3px solid green;

  @media screen and (min-width: 800px){
     width: 90%;
     padding:  15px;
  }

  
  /*
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  */

  .singleAppCont {
    //border: 3px solid red;
    border-radius: 30px;
    padding: .5% 1.5% .5% 1.5%;
    width: 100%;
    margin: 15px 0 30px 0
    background-color: rgb(240, 240, 240);
    
     h3 {
      width: 100%;
      padding: 0;
      text-align: left;
      margin: 15px;
    }

    @media screen and (min-width: 800px){
      border-radius: 30px;
      padding: 3%;

      h3 {
      width: 100%;
      padding: 0 0 0 16.5%;
      text-align: left;
      margin: 15px;
    }
    }

   
  }

  .singleApp {
    margin: 15px auto 35px auto;
    max-width: 780px;
    box-shadow: 0px 0px 9px rgb(66, 215, 244);

    
  }

  @media screen and (min-width: 800px) {

    .wide {
      //border: 3px solid blue;  
    }

    .small {
      max-width: 300px;
      //border: 3px solid red;
    }
 
  }
`;


 class Home extends React.Component {
  


  //generate display in main
  genDisplay = (param) => 
    param.map ( data => 
    <div className="singleAppCont">
      <h3>{data.title}:</h3>
      <div className={`singleApp ${data.class}`} > 
        { data.element }
      </div>
    </div> 
  )


  //Render
  render() {
   
    //initialize
    let { genDisplay } = this;
    let mainDisplay = [ {element: <Encryption />, class: 'wide', title: "BCrypt Encryption"},
                        {element: <JwtEnc />, class: 'wide', title: "JWT Encryption"},
                        {element: <Calc />, class: 'wide calc', title: "React Simple Calculator"},
                        {element: <ToDo />, class: 'wide todo', title: "React Simple To-Do List"},
                        {element: <RandNum />, class: 'wide randnum', title: "React Random Number"}, 
                        {element: <MLabWrite />, class: 'wide', title: "MongoDb Write example"},
                        {element: <MLabRead />, class: 'wide', title: "MongoDb Read Example"},
                        {element: <Gql />, class: 'wide', title: "BCrypt Encryption"} ];

    let display = <React.Fragment>
                      <Container fluid className="reactBasic topCont">
                        <Row id="Node">
                          <Col className="catTitle">
                            <h2>Node.js + Express.js:</h2>
                          </Col>
                        </Row>

                        <Row>
                          <div className="appSingleCont">
                            <div className="singleApp">
                              <Encryption />
                            </div>

                            <div className="singleApp">
                              <JwtEnc />
                            </div>
                          </div>
                        </Row>
                      </Container>

                      <Container id="React" fluid className="reactBasic">
                        <Row >
                          <Col className="catTitle">
                            <h2>React.js:</h2>
                          </Col>
                        </Row>

                        <div className="appList">
                          <div className="miniApp">
                            <Calc />
                          </div>

                          <div className="miniApp">
                            <ToDo />
                          </div>

                          <div className="miniApp">
                            <RandNum />
                          </div>
                        </div>
                      </Container>

                      <Container id="Mongo" fluid className="reactBasic">
                        <Row id="Mongodb">
                          <Col className="catTitle">
                            <h2>Mongodb:</h2>
                          </Col>
                        </Row>

                        <Row>
                          <div className="appSingleCont">
                            <div className="singleApp">
                              <MLabWrite />
                            </div>
                            <div className="singleApp">
                              <MLabRead />
                            </div>
                            <div className="singleApp">
                              <Gql />
                            </div>
                          </div>
                        </Row>

                      </Container>
                  </React.Fragment>

  //return
    return (
      <Cont>
        { genDisplay(mainDisplay) }
      </Cont>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);