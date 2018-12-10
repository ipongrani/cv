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
  padding:  15px;
  width: 90%;
  //border: 3px solid green;

  
  /*
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  */

  .singleApp {
    margin: 15px auto 15px auto;
    max-width: 780px;
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
    <div className={`singleApp ${data.class}`} > 
      { data.element }
    </div> 
  )


  //Render
  render() {
   
    //initialize
    let { genDisplay } = this;
    let mainDisplay = [ {element: <Encryption />, class: 'wide'},
                        {element: <JwtEnc />, class: 'wide'},
                        {element: <Calc />, class: 'wide calc'},
                        {element: <ToDo />, class: 'wide todo'},
                        {element: <RandNum />, class: 'wide randnum'}, 
                        {element: <MLabWrite />, class: 'wide'},
                        {element: <MLabRead />, class: 'wide'},
                        {element: <Gql />, class: 'wide'} ];

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