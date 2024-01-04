import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsError } from '../../redux/auth/selectors';
import { register } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { resetError } from '../../redux/auth/slice';
import { Button, Field, Form } from 'components/LoginForm/LoginForm.styled';
import { Wrapper } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isError) {
      Notiflix.Notify.failure(
        'Probably this email is already registered, please try another one.',
        { position: 'center-top', distance: '200px' }
      );

      dispatch(resetError());
    }
  }, [isError, dispatch]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
};
