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




export default class JwtEnc extends React.Component {

  state = {
    uname: '',
    email: '',
    token: ''
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();




    axios.post('https://nucleus-0.herokuapp.com/cv/Encryption?action=jwt',{
              username: this.state.uname,
              email: this.state.email,
          })
          .then((r) => {
            this.setState({token: r.data.token})
          })
          .catch((err) => {
            this.setState({token: err.response.data.token})
          })
  }


  render(){

    return (
      <Cont>
        <h3>JSON Web Token Encryption via API</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>

             <Label for="uname" sm={2}>Username:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="uname" id="unameId" placeholder="Input sample username" value={this.state.uname} />
             </Col>

             <Label for="email" sm={2}>Email:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="email" id="emailId" placeholder="Input sample email" value={this.state.email} />
             </Col>

             <Label for="textToken" sm={2}>Token:</Label>
             <Col sm={10}>
                <Input onChange={this.handleChange} type="textarea" rows="6" name="textToken" id="textTokenId" value={this.state.token} />
             </Col>

             <Col className="btnCont">
              <Button type="submit" color="primary">Get Token</Button>{' '}
             </Col>

           </FormGroup>
         </Form>
      </Cont>
    )
  }
}
