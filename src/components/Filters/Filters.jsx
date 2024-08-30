import { Formik, Form, Field } from "formik";
import css from "./Filters.module.css";
import { IoMapOutline } from "react-icons/io5";
import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsTv,
  BsDroplet,
  BsUiRadios,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";

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
        <div className={css.location}>
          <label htmlFor="location" className={css.locationText}>
            Location
          </label>
          <div className={css.inputWrapper}>
            <IoMapOutline className={css.locationIcon} />
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="City"
              className={css.locationForm}
            />
          </div>
        </div>

        <div className={css.equipmentWrapper}>
          <h3 className={css.text}>Vehicle equipment</h3>
          <div className={css.items}>
            <label htmlFor="AC">
              <Field
                type="checkbox"
                id="ac"
                name="equipment"
                value="AC"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsWind className={css.icon} />
                <span>AC</span>
              </div>
            </label>
            <label htmlFor="automatic">
              <Field
                type="checkbox"
                id="automatic"
                name="equipment"
                value="automatic"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsDiagram3 className={css.icon} />
                <span>Automatic</span>
              </div>
            </label>
            <label htmlFor="kitchen">
              <Field
                type="checkbox"
                id="kitchen"
                name="equipment"
                value="kitchen"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsCupHot className={css.icon} />
                <span>Kitchen</span>
              </div>
            </label>
            <label htmlFor="tv">
              <Field
                type="checkbox"
                id="tv"
                name="equipment"
                value="TV"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsTv className={css.icon} />
                <span>TV</span>
              </div>
            </label>
            <label htmlFor="bathroom">
              <Field
                type="checkbox"
                id="bathroom"
                name="equipment"
                value="bathroom"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsDroplet className={css.icon} />
                <span>Bathroom</span>
              </div>
            </label>
            <label htmlFor="radio">
              <Field
                type="checkbox"
                id="radio"
                name="equipment"
                value="radio"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsUiRadios className={css.icon} />
                <span>Radio</span>
              </div>
            </label>
            <label htmlFor="patrol">
              <Field
                type="checkbox"
                id="patrol"
                name="equipment"
                value="patrol"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <MdLocalGasStation className={css.icon} />
                <span>Patrol</span>
              </div>
            </label>
          </div>
        </div>

        <div className={css.typeWrapper}>
          <h3 className={css.text}>Vehicle type</h3>
          <div className={css.items}>
            <label htmlFor="van">
              <Field
                type="radio"
                id="van"
                name="vehicleType"
                value="panelTruck"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsGrid1X2 className={css.icon} />
                <span>Van</span>
              </div>
            </label>
            <label htmlFor="fully-integrated">
              <Field
                type="radio"
                id="fully-integrated"
                name="vehicleType"
                value="fullyIntegrated"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsGrid className={css.icon} />
                <span>Fully</span>
                <span>Integrated</span>
              </div>
            </label>
            <label htmlFor="alcove">
              <Field
                type="radio"
                id="alcove"
                name="vehicleType"
                value="alcove"
                className={css.hiddenInput}
              />
              <div className={css.item}>
                <BsGrid3X3Gap className={css.icon} />
                <span>Alcove</span>
              </div>
            </label>
          </div>
        </div>
        <button type="submit" className={css.button}>
          Search
        </button>
      </Form>
    </Formik>
  );
}
