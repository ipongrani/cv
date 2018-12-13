import React from 'react';
import Styled from 'styled-components';


const CalcScreen = Styled.input`
  width: 90%;
  height: 45px;
  padding: 2.5px;
  font-size: 24px;
  text-align: right;
  margin-top: 3%;
  background-color: hsl(211,100%,91%);
  border: .5px solid hsl(166,100%,59%);
`;

const CalcKeys = Styled.div`
  width: 90%;
  height: 200px;
  border: .5px solid hsl(196,100%,63%);
  display: grid;
  grid-template-columns: 3fr 1fr;

  .numCont {
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: auto auto auto;

    .keys {
      width: 100%;
      height: 40px;
      border: .5px solid hsl(196,100%,63%);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }
  }


  .opCont {
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: auto;
  }


`;

const NumCont = Styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: auto auto auto;

  .keys {
    width: 100%;
    height: 40px;
    border: .5px solid hsl(196,100%,63%);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }


`;





export default class Calc extends React.Component {

  state = {
    screenVal: '',
    nums: [],
  }


  eq = () => {

    try {
      if(this.state.screenVal !== '') {
        let clean = this.state.screenVal.split('');
        
        clean = clean.filter((data) => {
          if(isNaN(data) === false || data === "*" || data === "/" || data === "+" || data === "-"){
            return data;
          }
        });
        
        clean = clean.toString().replace(/,/g,'');

        if(clean === undefined) {
          this.setState({screenVal: this.state.screenVal});
        } else {
          this.setState({screenVal: eval(clean)})
        }

      }  else {
        this.setState({screenVal: ''});
      }

    } catch (err){
      console.log(err);
    }

  }

  handleClick = (e) => {
   

    switch(e['target'].value){

      case '=' :
        this.eq();
      break;

      case 'C' :
        this.setState({screenVal: ''});
      break;

      default :
        this.setState({screenVal: `${this.state.screenVal}${e['target'].value}`})
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

  componentDidMount () {
    
    for(let x = 0; x <= 12; x++) {
      
      let { nums } = this.state;
      let n = x;

      switch (x) {
        case 0 :
          continue;
        break;

        case 10 :
          this.setState({nums: nums.push(<input type="button" onClick={this.handleClick} value="0" />)})
        break;

        case 11 :
          this.setState({nums: nums.push(<input type="button" onClick={this.handleClick} value="=" />)})
        break;

        case 12 :
          this.setState({nums: [...nums, <input type="button" onClick={this.handleClick} value="C" />]})
        break;

        default :
          this.setState({nums: nums.push(<input type="button" onClick={this.handleClick} value={n} />)})
        break;
      }
    };
  }

  render(){

    let { nums } = this.state;


    return (
      <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center'}}>
        <CalcScreen onKeyUp={this.handleChange} onChange={this.handleChange} value={this.state.screenVal} placeholder="0" />
        <CalcKeys>
          <div className="numCont">{nums}</div>
          <div className="opCont">
            <input type="button" onClick={this.handleClick} value= "+" />
            <input type="button" onClick={this.handleClick} value="-" />
            <input type="button" onClick={this.handleClick} value="*" />
            <input type="button" onClick={this.handleClick} value="/"/>
          </div>
        </CalcKeys>
      </div>
    )
  }
}
