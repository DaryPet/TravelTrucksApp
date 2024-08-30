// export default function CampersReviews() {
//   return (
//     <div>
//       <h1>I AM REVIEWS</h1>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";

import css from "./CamperReviews.module.css";

export default function CampersReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        setLoading(true);
        setError(false);
        const camper = await fetchCamperById(id);
        setReviews(camper);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCamperById();
  }, [id]);

  // const featureIcons = {
  //   AC: <BsWind />,
  //   kitchen: <BsCupHot />,
  //   TV: <BsTv />,
  //   bathroom: <BsDroplet />,
  //   radio: <BsUiRadios />,
  //   gas: <MdLocalGasStation />,
  //   refrigerator: <MdLocalGasStation />,
  //   microwave: <MdLocalGasStation />,
  //   water: <MdLocalGasStation />,
  //   transmission: <BsWind />,
  //   engine: <BsWind />,
  // };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      {loading && <p>Loading equipment...</p>}
      {error && <p>Error fetching equipment.</p>}
      {reviews ? (
        <>
          <ul className={css.list}>
            {Object.entries(reviews).map(([key, value]) =>
              value(<li key={key} className={css.item}></li>)
            )}
          </ul>
          <div className={css.details}>
            <h3 className={css.detailsTitle}>Vehicle details</h3>
            <ul className={css.detailsList}>
              {features.form && (
                <li>
                  <span className={css.detailsLabel}>Form:</span>{" "}
                  {features.form}
                </li>
              )}
              {features.length && (
                <li>
                  <span className={css.detailsLabel}>Length:</span>{" "}
                  {features.length}
                </li>
              )}
              {features.width && (
                <li>
                  <span className={css.detailsLabel}>Width:</span>{" "}
                  {features.width}
                </li>
              )}
              {features.height && (
                <li>
                  <span className={css.detailsLabel}>Height:</span>{" "}
                  {features.height}
                </li>
              )}
              {features.tank && (
                <li>
                  <span className={css.detailsLabel}>Tank:</span>{" "}
                  {features.tank}
                </li>
              )}
              {features.consumption && (
                <li>
                  <span className={css.detailsLabel}>Consumption:</span>{" "}
                  {features.consumption}
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <p>No equipment information available.</p>
      )}
    </div>
  );
}
