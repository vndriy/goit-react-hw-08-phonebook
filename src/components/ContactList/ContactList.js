import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <div>
      {contacts.map(flt => (
        <List key={flt.id}>
          {flt.name}: {flt.number}{' '}
          <button onClick={() => handleDelete(flt.id)}>Delete</button>
        </List>
      ))}
    </div>
  );
};
