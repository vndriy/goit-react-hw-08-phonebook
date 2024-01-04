import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Field, Button, Wrapper } from './LoginForm.styled';
import { useEffect } from 'react';
import { resetError } from '../../redux/auth/slice';
import { selectIsError } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isError) {
      Notiflix.Notify.failure(
        'Your email or password is incorrect. Please try again.',
        { position: 'center-top', distance: '200px' }
      );

      dispatch(resetError());
    }
  }, [isError, dispatch]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </Wrapper>
  );
};
