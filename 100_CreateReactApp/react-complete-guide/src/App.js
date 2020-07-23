import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Don't need "Person.js" -> the build takes care of that + 'Person' must be uppercase after the import
import Person from './Person/Person';
import person from './Person/Person';

// Mantra of React - Everything is JavaScript
// This is not HTML, but JSX - JavaScript at runtime
// It has limitations, e.g.: class cannot be used, that's why we need to use className instead
// It is typical to use one root element to return, just like below - even though it is not a strict limitation

// state property can be used due we are extending Component here - React Hooks makes it available elsewhere; state should be used with care
// state's speciality is that if it is changes, it will lead React to update the DOM
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilan';
    // This is a merge, will leave any other state untouched
    this.setState({persons: [
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 27}
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    });
  }

  // Previous false warning will appear in the console because that's the moment when React renders the div
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // .bind() syntax is prefered, the other can be inefficient
  // At rerender everything is being executed not just the return
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
                name={person.name} 
                age={person.age}/>
          })}
        </div>
      );
    }

    // What we write here in the end will be js. We cannot use block statements like if-else etc.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
