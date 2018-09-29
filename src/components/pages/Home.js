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



let Cont = Styled.div`
  margin: 0;
  padding:  0;


  .topCont {

    padding-top: 70px;

    @media screen and (min-width: 800px){
      padding-top: 100px;
    }

  }


  .reactBasic {
    background-color: hsl(224, 52%, 21%);
    padding-bottom: 100px;
    height: auto;
    border-bottom: .5px solid white;

    .appList {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;



      @media screen and (min-width: 800px) {
        justify-content: flex-start;
        padding-left: 16%;
      }

      @media screen and (min-width: 1050px) {
        padding: 0 10% 0 10%;
        justify-content: space-around;
      }
    }


    .appSingleCont {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-top: 15px;
      margin-bottom: 10px;

      @media screen and (min-width: 800px) {
        padding: 0 10% 0 10%;
      }

    }


    .singleApp {

      width: 100%;
      margin: 15px 3px 10px 3px;
      height: auto;

      @media screen and (min-width: 600px) {
        width: 75%;
      }

      @media screen and (min-width: 800px) {
        width: 65%;
      }

      @media screen and (min-width: 1050px) {
        width: 100%;
      }
    }




    .miniApp {

      width: 100%;
      margin: 15px 3px 10px 3px;
      height: auto;

      @media screen and (min-width: 600px) {
        width: 65%;

      }

      @media screen and (min-width: 800px) {
        width: 40%;

      }

      @media screen and (min-width: 1050px) {
        width: 30%;
      }
    }

    .row {
      padding: 0 3% 0 3%;

      .catTitle {
        margin: 50px 0 10px 0;
        text-align: left;
        color: white;

        @media screen and (min-width: 800px){
          margin: 75px 0 10px 10%;
        }
      }

    }

  }

`;


export default class ReactPage extends React.Component {
  render() {
    return (
      <Cont>

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
            </div>
          </Row>

        </Container>

      </Cont>
    );
  }
}
