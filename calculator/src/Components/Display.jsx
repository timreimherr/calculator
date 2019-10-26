import React from 'react';
import './Display.css';

function Display(props){
    return (
        <div className="display">
            {props.input}
        </div>
    );
}

export default Display;