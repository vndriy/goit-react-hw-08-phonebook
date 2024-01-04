import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { UserBtn, Text, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Text>{user.email}</Text>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout👋
      </UserBtn>
    </Wrapper>
  );
};
