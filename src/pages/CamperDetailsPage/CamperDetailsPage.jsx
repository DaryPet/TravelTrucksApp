import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import { IoMapOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const [camper, setCamper] = useState();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchCamperDetails() {
      try {
        setError(false);

        const response = await fetchCamperById(id);
        setCamper(response);
      } catch (error) {
        setError(true);
      }
    }
    fetchCamperDetails();
  }, [id]);

  if (error) {
    return <p>Error loading camper details.</p>;
  }

  if (!camper) {
    return null;
  }
  const {
    name,
    price,
    rating,
    location: camperLocation,
    description,
    gallery,
    reviews,
  } = camper;

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.info}>
          <div>
            <h2 className={css.title}>{name}</h2>
          </div>
          <div className={css.subheader}>
            <div className={css.reviews}>
              <p className={css.text}>
                <FaStar className={css.starIcon} />
                {rating} ({reviews.length} Reviews)
              </p>
              <p className={css.text}>
                <IoMapOutline className={css.locationIcon} /> {camperLocation}
              </p>
            </div>
            <p className={css.price}>€{price.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>

        <div className={css.gallery}>
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image.original}
              alt={`${name} ${index + 1}`}
              className={css.img}
            />
          ))}
        </div>
        <div>
          <p className={css.text}>{description}</p>
        </div>
      </div>

      <div className={css.moreInfo}>
        <ul className={css.links}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, {
                [css.linkActive]: isActive || pathname === `/catalog/${id}`,
              })
            }
            to="features"
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.linkActive]: isActive })
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </ul>
      </div>
      <div className={css.subContainer}>
        <Outlet />

        <BookingForm />
      </div>
    </div>
  );
}
