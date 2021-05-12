import './App.css';
import React, { Component }  from 'react';
import Radium from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '23e3d3r4', name: "Ronak Bhatt", age: 27 },
      { id: 'd4rw4f44', name: "John Davis", age: 35 },
      { id: 'g5g4d3d5', name: "Kevin Cooper", age: 17 },
    ],
    personShow: false
  } 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }
  
  togglePersonsHandler = () => {
    const dowsShow = this.state.personShow;
    this.setState({ personShow: !dowsShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    
    let persons = null;

    if (this.state.personShow){
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id} 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}  />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style.border = '1px solid red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p className={classes.join(' ')}>THis is Really Working!!!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          {this.state.personShow ? 'Hide' : 'Show'} Person
        </button>
        { persons }
      </div>
    );
  }
}
export default Radium(App);