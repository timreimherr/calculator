import React from 'react';
import './OperatorButton.css';

function OperatorButton(props) {
    return (
        <div className="operator-btn" onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}

export default OperatorButton;