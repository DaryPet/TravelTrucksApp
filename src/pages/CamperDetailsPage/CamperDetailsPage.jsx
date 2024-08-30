import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import { Suspense } from "react";
import { IoMapOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const [camper, setCamper] = useState();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCamperDetails() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchCamperById(id);
        setCamper(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCamperDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
            <p className={css.price}>€{price.toFixed(2)}</p>
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
          <NavLink className={css.link} to="features">
            Features
          </NavLink>
          <NavLink className={css.link} to="reviews">
            Reviews
          </NavLink>
        </ul>
      </div>
      <div>
        <Suspense
          fallback={
            <div>
              <p>Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
