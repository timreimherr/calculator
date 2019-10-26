import React from 'react';
import './NumberButton.css'

function NumberButton(props) {
    return (
      <div className="number-btn">
        {props.children}
      </div>
    );
  }
  
  export default NumberButton;