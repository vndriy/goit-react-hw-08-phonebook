import { List } from './ContactList.styled';

export const ContactList = ({ filter, onDelete }) => {
  return (
    <div>
      {filter.map(flt => (
        <List key={flt.id}>
          {flt.name}: {flt.number}{' '}
          <button onClick={() => onDelete(flt.id)}>Delete</button>
        </List>
      ))}
    </div>
  );
};
