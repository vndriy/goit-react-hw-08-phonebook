import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterPhone } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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
