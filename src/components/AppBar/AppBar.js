import { AuthNav } from '../../components/AuthNav/AuthNav';
import { Navigation } from '../../components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu.js';
import { useAuth } from '../../hooks/useAuth';
import { Header } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
