import { Input } from './Filter.styled';
export const Filter = ({ filter, onFilter }) => {
  return (
    <>
      <span>Find Contacts by name</span>
      <Input value={filter} type="text" placeholder="" onChange={onFilter} />
    </>
  );
};
