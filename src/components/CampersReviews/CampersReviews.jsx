import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import css from "./CamperReviews.module.css";

export default function CampersReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        setLoading(true);
        setError(false);
        const camper = await fetchCamperById(id);
        setReviews(camper.reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsData();
  }, [id]);

  return (
    <div className={css.container}>
      {loading && <p>Loading equipment...</p>}
      {error && <p>Error fetching equipment.</p>}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index} className={css.item}>
              <div className={css.reviewer}>
                <div className={css.avatar}>{review.reviewer_name[0]}</div>
                <div className={css.reviewerInfo}>
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <div className={css.rating}>
                    {Array(review.reviewer_rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className={css.star}>
                          ⭐
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews avaliable</p>
      )}
    </div>
  );
}
