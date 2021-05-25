import React from 'react';
import './App.css';
import Contacts from './Contacts';

const ContactList = () => {
    return (
    <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
    )}

class App extends Component {
  render() {
  return (
    <div className="App">
      < Contacts contacts={contacts} />
    </div>
  );
}

removeContact = (contact) => {
  setState((currentState) => ({
    contacts: currentState.contacts.filter((c) => {
      return c.id !== contact.id
    })
  }))
}
render() {
  return (
    <div>
      <ListContacts
        contacts={contacts}
        onDeleteContact={removeContact}
      />
    </div>
  )
}
}

export default App;
