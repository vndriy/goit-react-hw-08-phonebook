import { useAuth } from '../../hooks/useAuth';
import { LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNav to="/">Home 🏠</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts 🙍‍♂️</LinkNav>}
    </nav>
  );
};
