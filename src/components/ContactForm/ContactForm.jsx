import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" placeholder="Name..." />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field
            name="number"
            type="tel"
            placeholder="Number..."
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add new Contact</button>
      </Form>
    </Formik>
  );
};
