import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
// import { newDate } from "react-datepicker/dist/date_utils";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    try {
      toast.success("Your boonikg was successfully submited!", {
        position: "top-center",
      });

      actions.resetForm();
      setStartDate(null);
    } catch (error) {
      toast.error("Sumthing went wrong. Try again!", {
        position: "top-center",
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string(),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: null, comment: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <div className={css.container}>
            <div className={css.titles}>
              <h3 className={css.title}>Book your campervan now</h3>
              <p className={css.text}>
                Stay connected! We are always ready to help you.
              </p>
            </div>
            <Form className={css.formWrapper}>
              <div className={css.formItems}>
                <div className={css.formItem}>
                  <label htmlFor="name"></label>
                  <Field
                    type="text"
                    name="name"
                    className={css.field}
                    placeholder="Name*"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="email"></label>
                  <Field
                    type="email"
                    name="email"
                    className={css.field}
                    placeholder="Email*"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="bookingDate"></label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue("bookingDate", date);
                    }}
                    minDate={new Date()}
                    placeholderText="Select a date*"
                    dateFormat="dd/mm/yyyy"
                    className={css.field}
                  />
                  <ErrorMessage
                    name="bookingDate"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="comment"></label>
                  <Field
                    as="textarea"
                    name="comment"
                    className={css.fieldTextarea}
                    placeholder="Comment"
                  />
                  <ErrorMessage name="comment" component="div" />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
              >
                Send
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
