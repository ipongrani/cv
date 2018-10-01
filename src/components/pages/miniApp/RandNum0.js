import React from 'react';
import Styled from 'styled-components';
import SmallCards from '../parts/SmallCards';
import LargeContainer from '../parts/LargeContainer';
import CardsContainer from '../parts/CardsContainer';
import ButtonsContainer from '../parts/ButtonsContainer';
import { Button } from 'react-bootstrap';







export default class Calc extends React.Component {

  state = {

  }


  render(){

    return (
      <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center'}}>
        <h2>RandNum Here</h2>
      </div>
    )
  }
}
