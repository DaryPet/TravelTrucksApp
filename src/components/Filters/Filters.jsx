import { Formik, Form, Field } from "formik";

export default function Filters({ onFilterChange }) {
  const initialValues = {
    location: "",
    equipment: [],
    vehicleType: "",
  };

  const handleSubmit = (values) => {
    onFilterChange(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="location">Location</label>
          <Field
            type="text"
            id="location"
            name="location"
            placeholder="Enter Location"
          />
        </div>

        <div>
          <h3>Vehicle equipment</h3>
          <div>
            <label htmlFor="AC">
              <Field type="checkbox" id="ac" name="equipment" value="AC" />
              <img src="../../../public/images" alt="AC" />
              AC
            </label>
            <label htmlFor="automatic">
              <Field
                type="checkbox"
                id="automatic"
                name="equipment"
                value="automatic"
              />
              <img src="../../../public/images" alt="automatic" />
              Automatic
            </label>
            <label htmlFor="kitchen">
              <Field
                type="checkbox"
                id="kitchen"
                name="equipment"
                value="kitchen"
              />
              <img src="../../../public/images" alt="kitchen" />
              Kitchen
            </label>
            <label htmlFor="tv">
              <Field type="checkbox" id="tv" name="equipment" value="TV" />
              <img src="../../../public/images" alt="tv" />
              TV
            </label>
            <label htmlFor="bathroom">
              <Field
                type="checkbox"
                id="bathroom"
                name="equipment"
                value="bathroom"
              />
              <img src="../../../public/images" alt="bathroom" />
              Bathroom
            </label>
            <label htmlFor="radio">
              <Field
                type="checkbox"
                id="radio"
                name="equipment"
                value="radio"
              />
              <img src="../../../public/images" alt="radio" />
              Radio
            </label>
            <label htmlFor="patrol">
              <Field
                type="checkbox"
                id="patrol"
                name="equipment"
                value="patrol"
              />
              <img src="../../../public/images" alt="patrol" />
              Patrol
            </label>
          </div>
        </div>

        <div>
          <h3>Vehicle type</h3>
          <div>
            <label htmlFor="van">
              <Field
                type="radio"
                id="van"
                name="vehicleType"
                value="panelTruck"
              ></Field>
              <img src="../../../public/images" alt="van" /> Van
            </label>
            <label htmlFor="fully-integrated">
              <Field
                type="radio"
                id="fully-integrated"
                name="vehicleType"
                value="fullyIntegrated"
              ></Field>
              <img src="../../../public/images" alt="fully-integrated" /> Fully
              integrated
            </label>
            <label htmlFor="alcove">
              <Field
                type="radio"
                id="alcove"
                name="vehicleType"
                value="alcove"
              ></Field>
              <img src="../../../public/images" alt="alcove" />
              Alcove
            </label>
          </div>
        </div>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
