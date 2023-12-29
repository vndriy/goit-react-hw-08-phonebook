import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactList.styled';

import { deletePhone } from '../../redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDelete = contactId => dispatch(deletePhone(contactId));

  const filterByContacts = contacts.filter(item => {
    const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());

    return hasContact;
  });

  return (
    <div>
      {filterByContacts.map(flt => (
        <List key={flt.id}>
          {flt.name}: {flt.number}{' '}
          <button onClick={() => handleDelete(flt.id)}>Delete</button>
        </List>
      ))}
    </div>
  );
};
