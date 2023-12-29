import { Form, Field, Button } from './ContactForm.styled';
import { Formik } from 'formik';
import { SectionInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../../redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const addContact = newContact => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addPhone(newContact));
  };

  return (
    <SectionInput>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          action.resetForm();
          addContact(values);
        }}
      >
        <Form>
          <label htmlFor="Name">
            Name
            <Field type="text" id="name" name="name" placeholder="" required />
          </label>

          <label htmlFor="Number">
            Number
            <Field
              id="number"
              name="number"
              type="tel"
              placeholder=""
              required
            />
          </label>

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </SectionInput>
  );
};
