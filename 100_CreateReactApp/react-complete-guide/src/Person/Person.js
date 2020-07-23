// We don't need a component here, since we are not going to use classes
import React from 'react';
import './Person.css';

// Using ES6 for its features and to make the useage of 'this' easier
// props.children refers to anything that is between the passing object's open and closing part
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;