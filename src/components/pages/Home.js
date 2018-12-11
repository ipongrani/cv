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
        cursor: pointer;
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
    background-color: rgb(14, 130, 155);
    padding: 50px 0 20px 0;
    min-height: 100vh;
    //border: 3px solid red;

    @media screen and (min-width: 800px) {

      padding: 55px 10px 30px 10px !important;
      transition: padding .5s;
      padding-left: ${ props => props.drawer === true ? '230px !important' : '10px'};
    
    }

    .displayPage {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-top: 15px;
      padding: 10px
      //border: 3px solid blue;
    }

  }
`;


 class Home extends React.Component {

  //state
  state = {
    collapse: false,
    btnVal: 'react',
  }


  //initializers
  reactList = [{routeName: "todo", title: "Simple To-Do list", comp: ToDo},
                {routeName: "calc", title: "Simple Calculator", comp: Calc},
                {routeName: "randnum", title: "Random Number", comp: RandNum}];

  nodeList = [{routeName: "bcryptencryption", title: "BCrypt Encryption", comp: Encryption},
              {routeName: "jwtEncryption", title: "JWT Encryption", comp: JwtEnc}];

  dbList = [{routeName: "mongowrite", title: "Writing to MongoDb", comp: MLabWrite},
            {routeName: "mongread", title: "Reading from MongoDb", comp: MLabRead}];
  
  sideBtns = [ {btnName: 'React', btnVal: 'react'},
               {btnName: 'Node', btnVal: 'node'},
               {btnName: 'Databases', btnVal: 'db'} ];

  



  componentDidUpdate(prevProps, prevState) {
    
    window.scrollTo(0, 0);
  
  }


  //select drawer
  selectDrawer = ( event ) => {
    event.preventDefault();

    //initialize
    let { toggleDrawer, setDrawerOption, drawer, drawerOption } = this.props;
    let name = event['target'].getAttribute('name');
    let btnVal = event['target'].getAttribute('value');
    
    this.setState({btnVal});
    
    //case action
    if (drawer === true && drawerOption === name){
      toggleDrawer(false);
      setDrawerOption("default");
    } else {
      toggleDrawer(true);
      setDrawerOption(name);
    }

  }


  //generate side buttons
  genSideBtns = (param) => 
    param.map ( data => 
    <input type="button"
    name={data.btnName} 
    onClick={this.selectDrawer} 
    value={data.btnVal} /> 
  )

  //generate pane links
  genPanelLinks = (param) => 
    param.map(d => 
    <Link type="button" name={d.routeName} to={`/sample/${d.routeName}`}>{d.title}</Link>
  )


  //generate routes
  genRoute = (param) =>
    param.map((d,i) => 
    <Route path={`/sample/${d.routeName}`} component={d.comp} />
  )
    

  //dropdown toggle
  toggleDropdown = () => 
    this.setState({ collapse: !this.state.collapse });

  

  //Render
  render() {
   
    //initialize
    let { genPanelLinks, genRoute } = this;
    let { collapse, btnVal } = this.state;
    console.log("btnVal", btnVal);
    let { drawer, drawerOption } = this.props;
    let { selectDrawer, genSideBtns, toggleDropdown, handlePanelClick } = this; 
 

   

  //return
    return (
      <Cont drawer={drawer} drawerOption={drawerOption}>

        <div className="panel mainPanel">
            <div className="panel subPanel">
              <h3>{ drawerOption }</h3>
              { genPanelLinks( this[`${btnVal}List`] ) }
            </div>
            <div className="sideBtn">
              { genSideBtns(this['sideBtns']) }
            </div>
        </div>


        <Container fluid className="containerBody">
          <div className="displayPage">
              <Route exact path="/" component={Welcome} />
             { genRoute([...this.reactList,...this.nodeList,...this.dbList]) }
          </div>
        </Container>

      </Cont>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);