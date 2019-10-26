import React from 'react';
import './Equation.css';

function Equation(props) {
    return (
        <div className="equation">{props.value}</div>
    );
}

export default Equation;