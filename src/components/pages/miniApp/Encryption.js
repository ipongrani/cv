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




export default class RandNum extends React.Component {

  state = {
    raw: '',
    enc: '',
    msg: ''
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({msg: "Encrypting... Please wait..."})

    axios.post('https://nucleus-0.herokuapp.com/cv/Encryption?action=bcrypt',{
              raw: this.state.raw,
          })
          .then((r) => {
            this.setState({enc: r.data.hashed, msg: "Completed!"})
          })
          .catch((err) => {
          this.setState({enc: err.response.data.hashed, msg: "Something went wrong, Try again."})
        })
  }


  render(){

    return (
      <Cont>
        <h3>BCrypt Encryption via API</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
             <Label for="raw" sm={2}>Input raw string:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="raw" id="rawId" placeholder="Input raw string here." value={this.state.raw} />
             </Col>
             <Label for="enc" sm={2}>Encrypted string:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="enc" id="rawId" placeholder="Encrypted string result here." value={this.state.enc} />
             </Col>

             <span style={{width: '100%', color: 'red'}}>{this.state.msg}</span>

             <Col className="btnCont">
              <Button type="submit" color="primary">Encrypt</Button>{' '}
             </Col>


           </FormGroup>
         </Form>
      </Cont>
    )
  }
}
