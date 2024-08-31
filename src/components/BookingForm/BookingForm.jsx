import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

export default function BookingForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className={css.container}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>
          <Form>
            <div className={css.formItem}>
              <label htmlFor="name">Name*</label>
              <Field type="text" name="name" className={css.field} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formItem}>
              <label htmlFor="email">Email*</label>
              <Field type="email" name="email" className={css.field} />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={css.formItem}>
              <label htmlFor="bookingDate">Booking Date*</label>
              <Field type="date" name="bookingDate" className={css.field} />
              <ErrorMessage name="bookingDate" component="div" />
            </div>
            <div className={css.formItem}>
              <label htmlFor="comment">Comment</label>
              <Field as="textarea" name="comment" className={css.field} />
              <ErrorMessage name="comment" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
