import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import {
  FaRegHeart,
  FaStar,
  FaMapMarkedAlt,
  FaFan,
  FaGasPump,
  FaCarSide,
  FaCoffee,
} from "react-icons/fa";

export default function CamperCard({ camper }) {
  const imageUrl =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].thumb
      : "path/to/placeholder-image.jpg";

  return (
    <div className={css.card}>
      <div>
        <img src={imageUrl} alt={camper.name} className={css.image} />
      </div>

      <div className={css.info}>
        <div className={css.details}>
          <div className={css.header}>
            <h3 className={css.name}>{camper.name}</h3>
            <p className={css.price}>
              €{camper.price.toFixed(2)}
              <button className={css.favoriteButton}>
                <FaRegHeart className={css.likeIcon} />
              </button>
            </p>
          </div>

          <div className={css.subheader}>
            <span className={css.raiting}>
              <FaStar className={css.starIcon} />
              {camper.rating}
            </span>
            <span className={css.reviewCount}>
              ({camper.reviews.length} Reviews)
            </span>
            <span className={css.location}>
              <FaMapMarkedAlt className={css.locationIcon} /> {camper.location}
            </span>
          </div>
          <div>
            <p className={css.description}>{camper.description}</p>

            <div className={css.features}>
              {camper.transmission && (
                <span className={css.feature}>
                  <FaCarSide className={css.icon} />
                  Automatic
                </span>
              )}
              {camper.tv && (
                <span className={css.feature}>
                  <FaGasPump className={css.icon} />
                  TV
                </span>
              )}
              {camper.kitchen && (
                <span className={css.feature}>
                  <FaCoffee className={css.icon} />
                  Kitchen
                </span>
              )}
              {camper.AC && (
                <span className={css.feature}>
                  <FaFan className={css.icon} />
                  AC
                </span>
              )}
              {camper.radio && (
                <span className={css.feature}>
                  <FaFan className={css.icon} />
                  Radio
                </span>
              )}
              {camper.patrol && (
                <span className={css.feature}>
                  <FaFan className={css.icon} />
                  Patrol
                </span>
              )}
            </div>
            <Link to={`/catalog/${camper.id}`} className={css.moreButton}>
              Show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
