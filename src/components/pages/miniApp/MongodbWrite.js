import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';



let Cont = Styled.div`
  background-color: white;
  padding: 10px 10px 5px 10px;
  height: auto;

  button{
    width: 100px;
  }

  h3 {
    margin: 15px 0 10px 0;
  }

  .btnCont {
    text-align: left;
    margin-top: 30px
    padding: 0 0 0 30px ;
    max-width: 35%;
  }

  .form-group {
    padding: 35px 0 0 0;
  }

  .resCont {
    text-align: left;
    margin-top: 30px;
  }
`;




export default class MLabWrite extends React.Component {

  state = {
    mlab: '',
    collection: '',
    textData: '',
    msg: ''
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({msg: "Loading... Please wait..."})

    console.log(this.state.textData)

    //let d = JSON.parse(this.state.textData.replace(/^\n+|\n+$/g, ""));
    axios.post('https://nucleus-0.herokuapp.com/cv/Registration?action=xtReg',{
              data: this.state.textData,
              mlab: this.state.mlab,
              collection: this.state.collection
          })
          .then((r) => {
            this.setState({msg: r.data.msg})
          })
          .catch((err) => {
            this.setState({msg: err.response.data.msg})
          })
  }


  render(){

    return (
      <Cont>
        <h3>Writing to Mongodb:</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>

             <Label for="mlab" sm={2}>Mongo/Mlab DB:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="mlab" id="unameId" placeholder="mongodb://<dbuser>:<dbpassword>@dsxxxxxx.mlab.com:xxxxx/<collection>" value={this.state.mlab} />
             </Col>

             <Label for="collection" sm={2}>Collection:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="collection" id="collectionId" placeholder="Users" value={this.state.collection} />
             </Col>

             <span style={{width: '100%', color: 'red'}}>{this.state.msg}</span>

             <Label for="textData" sm={2}>Data:</Label>
             <Col sm={10}>
                <Input onChange={this.handleChange} type="textarea" rows="10" name="textData" id="textDataId" placeholder="{email: 'mail@mail.com', password: 'password'}" value={this.state.textData} />
             </Col>

             <Col className="btnCont">
              <Button type="submit" color="primary">Register</Button>{' '}
             </Col>

           </FormGroup>
         </Form>
      </Cont>
    )
  }
}
