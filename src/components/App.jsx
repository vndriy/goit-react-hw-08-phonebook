import { Component } from 'react';
import { Phonebook } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-54' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      const contactsFromStorage = JSON.parse(savedContacts);
      this.setState({
        contacts: contactsFromStorage,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactObject = {
      ...newContact,
      id: nanoid(8),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactObject],
      };
    });
  };

  updateContactFilter = filteredContact => {
    this.setState({
      filter: filteredContact,
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filterByContacts = this.state.contacts.filter(item => {
      const hasContact = item.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());

      return hasContact;
    });

    return (
      <Phonebook>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilter={evt => this.updateContactFilter(evt.target.value)}
        />
        <ContactList filter={filterByContacts} onDelete={this.deleteContact} />
      </Phonebook>
    );
  }
}
