// We don't need a component here, since we are not going to use classes
import React from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

// This will return a React component - provided by the third party library
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`

// Using ES6 for its features and to make the useage of 'this' easier
// props.children refers to anything that is between the passing object's open and closing part
const person = (props) => {
/*     const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }; */

    return (
        //<div className="Person" style={style}>
        <StyleDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
    )
}

export default person;
//export default Radium(person);