//import React from 'react';
import React, { Component } from 'react'; 
// destructuring! allows us to pull props off an object and set them to constants

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box-component';

import logo from './logo.svg';

import './App.css';

//class App extends React.Component {
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        /*
        // Don't need to hardcode data. Instead we are fetching the data
        // when 'componentDidMount' funciton is called when React mounts the 
        // Component in the DOM.
        {
          id: 'asc1',
          name: 'Frankenstein'
        },
        {
          id: 'asr21',
          name: 'Dracula'
        },
        {
          id: 'asw1',
          name: 'Zombie'
        }
        */
      ],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json()) // gives response in the json format
    //.then( users => console.log(users)); // returns new 'PROMISE' which is users array
    .then(users => this.setState({monsters: users }))
    .catch(error => console.log(error));
  }
 
  /*
  Using arrow function saves us having to bind 'this' in the constructor.
  We could have written 
  this.handleChange = this.handleChange.bind(this); 
  in constructor, but arrow functions automatically bind this to the 
  place where they are first defined.
  */
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } =  this.state; 
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes( searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
