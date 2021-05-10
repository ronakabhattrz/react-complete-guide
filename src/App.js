import './App.css';
import Person from './Person/Person'
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      { name: "Ronak Bhatt", age: 27 },
      { name: "John Davis", age: 35 },
      { name: "Kevin Cooper", age: 17 },
    ],
    personShow: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 55 },
        { name: "John Davis", age: 35 },
        { name: "Kevin Cooper", age: 17 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ajay Bhatt", age: 55 },
        { name: event.target.value, age: 35 },
        { name: "Kevin Cooper", age: 17 },
      ]
    })
  }
  
  togglePersonsHandler = () => {
    const dowsShow = this.state.personShow;
    this.setState({ personShow: !dowsShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;

    if (this.state.personShow){
      persons = (
        <div >
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Ronak Bhatt")}
            changed={this.nameChangeHandler} > My Hobbies: Music </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>THis is Really Working!!!!</p>
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

export default App;