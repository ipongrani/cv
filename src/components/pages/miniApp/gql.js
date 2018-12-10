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


    var dice = 3;
    var sides = 6;
    let courseID1 = 1
    let courseID2 = 2
    let emailSearch = "ipongrani@gmail.com"

    var query1 = `query ($courseID: Int!) {
                      course(id: $courseID) {
                          title
                          author
                          description
                          topic
                          url
                      }
                  }
                 `;


    var query  = `mutation ($FormInfo: MemberForm) {
                      newMember(FormInfo: $FormInfo) {
                        msg
                      }
                  }
                 `;

    var Test  = `query ($email: String!) {
                      prof(email: $email) {
                          name
                      }
                  }
                 `;


    var q2 = `query ($courseID1: Int!, $courseID2: Int!) {
                    course1: course(id: $courseID1) {
                           ...courseFields
                    },
                    course2: course(id: $courseID2) {
                          ...courseFields
                    }
                  }

              fragment courseFields on Course {
                title
                author
                description
                topic
                url
              }`;



    fetch(`https://wnv8g541zc.execute-api.us-east-1.amazonaws.com/dev/BlueCare`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'none'
      },
      body: JSON.stringify({
                            query,
                            variables: {
                              FormInfo: {
                                name: "rani4",
                                address: "somewhere",
                                email: "email4@email4.com",
                                password: "somePassword"
                              }
                            }
                            })
    })
      .then(r => r.json())
      .then(d => {this.setState({data: JSON.stringify(d.data, null, 2), msg: "Done"})
                  console.log(JSON.stringify(d.data, null, 2))})
      .catch(err => this.setState({data: "Nothing To Display", msg: "Something went wrong"}))



/*
        axios({
          method: 'post',
          url: 'http://localhost:3006/graphql',

          data: JSON.stringify({
                  query,
                  variables: {courseID}
                })
        })
        .then(r => r.json())
        .then(d => this.setState({data: JSON.stringify(d.data, null, 2), msg: "Done"}))
        .catch(err => this.setState({data: "Nothing To Display", msg: "Something went wrong"}))
*/
}



  render(){

    return (
      <Cont>
        <h3>Graph QL:</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>

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
