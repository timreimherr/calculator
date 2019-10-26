import React from 'react';
import './App.css';
import NumberButton from './Components/NumberButton'

function App() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="row">
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
        </div>
        <div className="row">
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
        </div>
        <div className="row">
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>4</NumberButton>
        </div>
      </div>
    </div>
  );
}

export default App;
