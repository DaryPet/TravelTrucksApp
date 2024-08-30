import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsTv,
  BsDroplet,
  BsUiRadios,
} from "react-icons/bs";
import { IoMapOutline } from "react-icons/io5";
import { MdLocalGasStation } from "react-icons/md";

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
              €{camper.price.toFixed(2).replace(".", ",")}
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
              <IoMapOutline className={css.locationIcon} /> {camper.location}
            </span>
          </div>
          <div>
            <p className={css.description}>{camper.description}</p>

            <div className={css.features}>
              {camper.transmission && (
                <span className={css.feature}>
                  <BsDiagram3 className={css.icon} />
                  Automatic
                </span>
              )}
              {camper.transmission && (
                <span className={css.feature}>
                  <BsDroplet className={css.icon} />
                  Bathroom
                </span>
              )}
              {camper.tv && (
                <span className={css.feature}>
                  <BsTv className={css.icon} />
                  TV
                </span>
              )}
              {camper.kitchen && (
                <span className={css.feature}>
                  <BsCupHot className={css.icon} />
                  Kitchen
                </span>
              )}
              {camper.AC && (
                <span className={css.feature}>
                  <BsWind className={css.icon} />
                  AC
                </span>
              )}
              {camper.radio && (
                <span className={css.feature}>
                  <BsUiRadios className={css.icon} />
                  Radio
                </span>
              )}
              {camper.patrol && (
                <span className={css.feature}>
                  <MdLocalGasStation className={css.icon} />
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
