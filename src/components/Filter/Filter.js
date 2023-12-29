import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterPhone } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const updateFilter = value => {
    dispatch(filterPhone(value));
  };

  return (
    <>
      <span>Find Contacts by name</span>
      <Input
        value={filter}
        type="text"
        placeholder=""
        onChange={evt => updateFilter(evt.target.value)}
      />
    </>
  );
};
