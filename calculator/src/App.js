import React from 'react';
import './App.css';
import NumberButton from './Components/NumberButton';
import OperatorButton from './Components/OperatorButton';

function App() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="row">
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
          <OperatorButton>÷</OperatorButton>
        </div>
        <div className="row">
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <OperatorButton>x</OperatorButton>
        </div>
        <div className="row">
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <OperatorButton>+</OperatorButton>
        </div>
        <div className="row">
          <OperatorButton>.</OperatorButton>
          <NumberButton>0</NumberButton>
          <OperatorButton>+</OperatorButton>
          <OperatorButton>=</OperatorButton>
        </div>
      </div>
    </div>
  );
}

export default App;
