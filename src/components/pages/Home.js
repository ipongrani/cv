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
import { toggleDrawer, setDrawerOption, setSideButtons,
         setNodeList, setDdList, setReactList } from '../../lib/redux/actions/index';
import { connect } from 'react-redux';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
//import Home_ from './Home_';


const mapStateToProps = (state) => {
  return {
    drawer: state.centralState.drawer,
    drawerOption: state.centralState.drawerOption,
    reactList: state.centralState.reactList,
    nodeList: state.centralState.nodeList,
    dbList: state.centralState.dbList,
    sideBtns: state.centralState.sideBtns
  };
};


const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: param => dispatch(toggleDrawer(param)),
    setDrawerOption: param => dispatch(setDrawerOption(param)),
    setSideButtons: param => dispatch(setSideButtons(param)),
    setNodeList: param => dispatch(setNodeList(param)),
    setReactList: param => dispatch(setReactList(param)),
    setDdList: param => dispatch(setDdList(param)),
  };
};


let Cont = Styled.div`
  margin: 0;
  padding:  0;
  min-height: 100vh;


  .mainPanel {
    //border-right: ${ props => props.drawer === true ? '1.5px solid black' : '0'};
    width: ${ props => props.drawer === true ? '201px !important' : '200px'};
  }

  .subPanel {
    //border: 1px solid red;
    padding: 18px 0 0 0;
    //background-color: rgb(67, 0, 237);

    a {
      color: white;
      padding: 0 0 0 15px;
      text-align: left;
    }
  }

  .panel, .mainPanel {
    //border: 3px solid red;
    width: 200px;
    height: 100vh;
    position: fixed;
    color: white;
    top: 0;
    left: ${ props => props.drawer === true ? '0' : '-200px'};
    //background-image: linear-gradient(to bottom right, rgb(67, 0, 237) , rgb(98, 10, 214));
    background-color: #11454f;
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
      right: -80px
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
    //background-color: white; //rgb(14, 130, 155);
    //background-image: linear-gradient(to right, rgb(67, 0, 237) , rgb(237, 0, 134));
    background-color: rgb(225, 225, 225); //#93d9d8;
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



  componentDidMount() {
    let { setDdList, setNodeList, setReactList, setSideButtons } = this.props;

    let { history } = this.props;

    history.listen( _ => {
      window.scrollTo(0, 0)  
    })

    console.log("it went in")


    setReactList(
      [{routeName: "todo", title: "Simple To-Do list", comp: ToDo},
      {routeName: "calc", title: "Simple Calculator", comp: Calc},
      {routeName: "randnum", title: "Random Number", comp: RandNum}])

    setNodeList(
      [{routeName: "bcryptencryption", title: "BCrypt Encryption", comp: Encryption},
      {routeName: "jwtEncryption", title: "JWT Encryption", comp: JwtEnc}])

    setDdList(
      [{routeName: "mongowrite", title: "Writing to MongoDb", comp: MLabWrite},
      {routeName: "mongoread", title: "Reading from MongoDb", comp: MLabRead}])

    setSideButtons(
      [{btnName: 'React', btnVal: 'react'},
       {btnName: 'Node', btnVal: 'node'},
       {btnName: 'Databases', btnVal: 'db'}])
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
    <Link name={d.routeName} to={`/sample/${d.routeName}`}>{d.title}</Link>
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
    let { collapse, btnVal } = this.state;
    console.log("btnVal", btnVal);
    let { drawer, drawerOption, reactList, nodeList, dbList } = this.props;
    let { selectDrawer, genSideBtns, toggleDropdown, handlePanelClick,
          genPanelLinks, genRoute } = this; 

   

  //return
    return (
      <Cont drawer={drawer} drawerOption={drawerOption}>

        <div className="panel mainPanel">
            <div className="panel subPanel">
              <h3>{ drawerOption }</h3>
             { 
               this.props[`${btnVal}List`].length > 0 ?
               genPanelLinks( this.props[`${btnVal}List`] ) :
               <p>Error</p>    
             }
            </div>
            <div className="sideBtn">
             { 
               this.props['sideBtns'].length > 0 ?
               genSideBtns(this.props['sideBtns']) :
               <p>Error</p>
             } 
            </div>
        </div>


        <Container fluid className="containerBody">
          <div className="displayPage">
              <Route exact path="/" component={Welcome} />
             { 
               dbList.length > 0 && reactList.length > 0 && nodeList.length > 0 ?
               genRoute([...reactList,...nodeList,...dbList]) :
               <p>Error</p>
             }
          </div>
        </Container>

      </Cont>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);