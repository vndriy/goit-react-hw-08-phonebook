import { useAuth } from 'hooks/useAuth';
import { Wrapper } from './HomePage.styled';

export default function Home() {
  const { user } = useAuth();

  return (
    <Wrapper>
      <h3>Welcome,</h3>
      <h2>{user.name}</h2>
      <h3>
        to Phonebook!{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h3>
    </Wrapper>
  );
}
