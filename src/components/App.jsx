import { useEffect, useState } from 'react';
import { Phonebook } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const storageKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-54' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isNameExists = contacts.some(
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

    setContacts(prevState => [...prevState, contactObject]);
  };

  const updateContactFilter = filteredContact => {
    setFilter(filteredContact);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterByContacts = contacts.filter(item => {
    const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());

    return hasContact;
  });

  return (
    <Phonebook>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onFilter={evt => updateContactFilter(evt.target.value)}
      />
      <ContactList filter={filterByContacts} onDelete={deleteContact} />
    </Phonebook>
  );
};
