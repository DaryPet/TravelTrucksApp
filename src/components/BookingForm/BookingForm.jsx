import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    try {
      toast.success("Your boonikg was successfully submited!", {
        position: "top-center",
      });

      actions.resetForm();
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
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
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
                  <Field
                    type="date"
                    name="bookingDate"
                    className={css.field}
                    placeholder="Booking Date*"
                    // onFocus={(e) => (e.target.type = "date")}
                    // onBlur={(e) =>
                    //   (e.target.type = e.target.value ? "date" : "text")
                    // }
                    // onChange={(e) => (e.target.type = "date")}
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
