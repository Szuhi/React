import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Don't need "Person.js" -> the build takes care of that + 'Person' must be uppercase after the import
import Person from './Person/Person';

class App extends Component {
  render() {
    // This is not HTML, but JSX - JavaScript at runtime
    // It has limitations, e.g.: class cannot be used, that's why we need to use className instead
    // It is typical to use one root element to return, just like below - even though it is not a strict limitation
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
