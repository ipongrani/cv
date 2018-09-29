import React from 'react';
import Styled from 'styled-components';


const CalcScreen = Styled.input`
  width: 100%;
  height: 65px;
  padding: 2.5px;
  font-size: 36px;
  text-align: right;
  background-color: hsl(211,100%,91%);
  border: .5px solid hsl(166,100%,59%);
`;

const CalcKeys = Styled.div`
  width: 100%;
  height: 210px;
  border: .5px solid hsl(196,100%,63%);
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const NumCont = Styled.div`
width: 100%;
height: auto;
display: grid;
grid-gap: 0;
grid-template-columns: 1fr 1fr 1fr;
`;

const OpCont = Styled.div`
width: 100%;
height: auto;
display: grid;
grid-gap: 1px;
grid-template-columns: auto;
`;

const Numpad = Styled.div`
width: 100%;
height: auto;
border: .5px solid hsl(196,100%,63%);
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
`;





export default class Calc extends React.Component {

  state = {
    screenVal: ''
  }

  Nums = [];

  Ops = [];

  eq = () => {

    let clean;

    try {

      clean = this.state.screenVal.split('');
      clean = clean.filter((data) => {
        if(isNaN(data) === false || data === "*" || data === "/" || data === "+" || data === "-"){
          return data;
        }
      });
      clean = clean.toString().replace(/,/g,'');

    } catch (err){
      console.log(err);
    }


  console.log(clean);
    try {
      eval(clean)

      if(clean === undefined) {
        this.setState({screenVal: this.state.screenVal});
      } else {
        this.setState({screenVal: eval(clean)})
      }

    } catch (e) {
      console.log(e.message)
    }
  }

  handleClick = (e) => {
    console.log(e.target.innerHTML);

    switch(e.target.innerHTML){

      case '=' :
        this.eq();
      break;

      case 'C' :
        this.setState({screenVal: ''});
      break;

      default :
        this.setState({screenVal: `${this.state.screenVal}${e.target.innerHTML}`})
      break;
    }

  }

  handleChange = (e) => {
    if (e.keyCode === 13){
      this.eq();
    } else {
      this.setState({screenVal: `${e.target.value}`});
    }
  }

  componentWillMount () {
    for(let x = 0; x <= 12; x++) {

      let n = x;

      switch (x) {
        case 0 :
          continue;
        break;

        case 10 :
          this.Nums.push(<Numpad onClick={this.handleClick}>0</Numpad>)
        break;

        case 11 :
          this.Nums.push(<Numpad eq={true} onClick={this.handleClick}>=</Numpad>)
        break;

        case 12 :
          this.Nums.push(<Numpad onClick={this.handleClick}>C</Numpad>)
        break;

        default :
          this.Nums.push(<Numpad onClick={this.handleClick}>{n}</Numpad>)
        break;
      }
    };
  }

  render(){

    return (
      <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', margin: '0', padding: '0', width: '100%'}}>
        <CalcScreen onKeyUp={this.handleChange} onChange={this.handleChange} value={this.state.screenVal} placeholder="0" />
        <CalcKeys>
          <NumCont>{this.Nums}</NumCont>
          <OpCont>
            <Numpad onClick={this.handleClick} >+</Numpad>
            <Numpad onClick={this.handleClick} >-</Numpad>
            <Numpad onClick={this.handleClick} >*</Numpad>
            <Numpad onClick={this.handleClick} >/</Numpad>
          </OpCont>
        </CalcKeys>
      </div>
    )
  }
}
