import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const URL = 'https://jsonplaceholder.typicode.com/users'

    fetch(URL)
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.setState({ searchField: e.target.value })} type='search' placeholder='Search Monsters'/>
        <CardList  monsters={this.state.monsters}/>
      </div>
    );
  }


}

export default App;
