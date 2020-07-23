import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Don't need "Person.js" -> the build takes care of that + 'Person' must be uppercase after the import
import Person from './Person/Person';

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
    ]
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

  // .bind() syntax is prefered, the other can be inefficient
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
