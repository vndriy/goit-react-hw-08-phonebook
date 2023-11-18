import { Form, Field, Button } from './ContactForm.styled';
import { Formik } from 'formik';
import { SectionInput } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  return (
    <SectionInput>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          action.resetForm();
          onAddContact(values);
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
