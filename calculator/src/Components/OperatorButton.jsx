import React from 'react';
import './OperatorButton.css';

function OperatorButton(props) {
    return (
        <div className="operator-btn">
            {props.children}
        </div>
    );
}

export default OperatorButton;