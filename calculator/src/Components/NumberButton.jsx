import React from 'react';
import './NumberButton.css';

function NumberButton(props) {
    return (
      <div className="number-btn" onClick={() => props.handleClick(props.children)}>
        {props.children}
      </div>
    );
  }
  
  export default NumberButton;