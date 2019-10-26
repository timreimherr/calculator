import React from 'react';
import './EquationDisplay.css';
import Equation from './Equation';

function EquationDisplay(props) {
    return (
        <div className="equationDisplay">
            {props.equations.map(eq => <Equation key={ eq.id } value={ eq.text}/>)}
        </div>
    )
}

export default EquationDisplay;