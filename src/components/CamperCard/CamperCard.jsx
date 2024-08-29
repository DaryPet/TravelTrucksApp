import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import { FaRegHeart } from "react-icons/fa";

export default function CamperCard({ camper }) {
  return (
    <div className={css.card}>
      <img src={camper.image} alt={camper.name} className={css.image} />
      <div className={css.details}>
        <div className={css.header}>
          <h3 className={css.name}>{camper.name}</h3>
          <span className={css.reviews}>{camper.reviews.length} Reviews</span>
        </div>
        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          {camper.ac && <span className={css.feature}>AC</span>}
          {camper.automatic && <span className={css.feature}>Automatic</span>}
          {camper.petrol && <span className={css.feature}>Petrol</span>}
          {camper.kitchen && <span className={css.feature}>Kitchen</span>}
        </div>

        <p className={css.price}>
          €{camper.price.toFixed(2).replace(".", ",")}
        </p>
        <Link to={`/catalog/${camper.id}`} className={css.moreButton}>
          Show more
        </Link>
      </div>
      <button className={css.favoriteButton}>
        <FaRegHeart />
      </button>
    </div>
  );
}
