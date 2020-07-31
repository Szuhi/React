import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Don't need "Person.js" -> the build takes care of that + 'Person' must be uppercase after the import
import Person from './Person/Person';
//import Radium, { StyleRoot } from 'radium';

// Mantra of React - Everything is JavaScript
// This is not HTML, but JSX - JavaScript at runtime
// It has limitations, e.g.: class cannot be used, that's why we need to use className instead
// It is typical to use one root element to return, just like below - even though it is not a strict limitation

// state property can be used due we are extending Component here - React Hooks makes it available elsewhere; state should be used with care
// state's speciality is that if it is changes, it will lead React to update the DOM
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28},
      { id: '2', name: 'Manu', age: 29},
      { id: '3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Don't mutate directly because it is a reference type! - Using spread operator
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alternative:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // This is already the copy
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // At this point we have an updated array, so we can do the update - and it will remove all the warnings as well
    this.setState({persons: persons});
  }

  // Delete one and update the state
  // We use a copy (with the spread operator, .slice() is the older) of the state instead of the real one to avoid certain flaws - this is best practice
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    // What we write here in the end will be js. We cannot use block statements like if-else etc.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

// Radium is a higher order component
//export default Radium(App);
export default App;
