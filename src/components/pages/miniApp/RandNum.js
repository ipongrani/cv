import React from 'react';
import Styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';



let Cont = Styled.div`
  background-color: white;
  padding: 10px 10px 5px 10px;
  height: 275px;


  .btnCont {
    text-align: center;
    margin-top: 30px
    padding: 0;
    max-width: 50%
  }

  .form-group {
    padding: 35px 0 0 0;
  }

  .resCont {
    text-align: left;
    margin-top: 30px;

    h3 {
      margin: 0;
    }

  }
`;




export default class RandNum extends React.Component {

  state = {
    result: '',
    error: '',
    range: '',
    fs: '18px',
    fc: 'red'
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { range } = this.state;
    let minMax = range.split('-');


    switch(minMax.length) {

      case 2 :
      console.log("min ", minMax[0]);
      console.log("max ", minMax[1]);

        if (parseInt(minMax[0]) >= parseInt(minMax[1])) {
          this.setState({error: "Wrong Format!",fs: '18px', fc: 'red', result: ''})
        } else {
          this.setState({result: Math.floor(Math.random() * (parseInt(minMax[1]) - parseInt(minMax[0]) + 1)) + parseInt(minMax[0]), fs: '30px', fc: 'blue', error: ''})
        }
      break;

      default :
        this.setState({result: Math.floor(Math.random() * (10 - 0 + 1)) + 0, fs: '30px', fc: 'blue', error: ''})
      break;
    }
  }


  render(){

    return (
      <Cont>
        <h3>Random Number Generator</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
             <Label for="range" sm={2}>Range:</Label>
             <Col sm={10}>
               <Input onChange={this.handleChange} type="text" name="range" id="randgeId" placeholder="Input number in 'min-max' format." value={this.state.range} />
               <span>Ex. '1-5' or '1-15' Default '0-10'</span>
             </Col>

             <Col className="btnCont">
              <Button type="submit" color="primary">Generate</Button>{' '}
             </Col>

             <Col className="resCont">
              <h3>Result:  <span style={{color: this.state.fc}}>{this.state.result}</span></h3>
              <span style={{display: 'block' , width: '100%', fontSize: this.state.fs, textAlign: 'center', color: this.state.fc}}>{this.state.error}</span>
             </Col>
           </FormGroup>
         </Form>
      </Cont>
    )
  }
}
