import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';

class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
  return (
    <div className="App">
      < Contacts contacts={contacts} />
    </div>
  );
}
}

export default App;
