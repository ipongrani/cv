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
    key: '',
    val: '',
    data: '',
    msg: ''
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({msg: "Loading... Please wait..."})

    axios.post('https://nucleus-0.herokuapp.com/cv/Registration?action=xtRet',{
              key: this.state.key,
              val: this.state.val,
              mlab: this.state.mlab,
              collection: this.state.collection
          })
          .then((r) => {
            console.log(JSON.stringify(r.data.data[0],null, 2))
            let i='';

            r.data.data.map((d) => {
              i += JSON.stringify(d,null, 2)
            })
            this.setState({data: i, msg: r.data.msg})
          })
          .catch((err) => {
            this.setState({msg: err.response.data.msg})
          })
  }


  render(){

    return (
      <Cont>
        <h3>Reading From Mongodb:</h3>
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

             <Label for="key" sm={2}>Key:</Label>
             <Col sm={10}>
                <Input onChange={this.handleChange} type="text" name="key" id="keyId" placeholder="_id, username, email, etc." value={this.state.key} />
             </Col>

             <Label for="val" sm={2}>Value:</Label>
             <Col sm={10}>
                <Input onChange={this.handleChange} type="text" name="val" id="valId" placeholder="mail@mail.com, John Doe, 12345, etc." value={this.state.val} />
             </Col>

             <span style={{width: '100%', color: 'red'}}>{this.state.msg}</span>

             <Label for="textData" sm={2}>Data:</Label>
             <Col sm={10}>
                <Input onChange={this.handleChange} type="textarea" rows="10" name="textData" id="textDataId" value={this.state.data} />
             </Col>

             <Col className="btnCont">
              <Button type="submit" color="primary">Find</Button>{' '}
             </Col>

           </FormGroup>
         </Form>
      </Cont>
    )
  }
}
