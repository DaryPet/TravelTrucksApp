import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import { FaStar } from "react-icons/fa";
import css from "./CamperReviews.module.css";
import clsx from "clsx";

export default function CampersReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        setError(false);
        const camper = await fetchCamperById(id);
        setReviews(camper.reviews);
      } catch (error) {
        setError(true);
      }
    }
    fetchReviewsData();
  }, [id]);

  return (
    <div className={css.container}>
      {error && <p>Error fetching equipment.</p>}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index} className={css.item}>
              <div className={css.reviewer}>
                <div className={css.avatar}>{review.reviewer_name[0]}</div>
                <div className={css.info}>
                  <p className={css.name}>{review.reviewer_name}</p>
                  <div className={css.rating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={clsx({
                          [css.activeStar]: i < review.reviewer_rating,
                          [css.inactiveStar]: i >= review.reviewer_rating,
                        })}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
