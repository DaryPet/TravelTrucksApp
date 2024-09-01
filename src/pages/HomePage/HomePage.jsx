import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={css.wraper}>
      <div className={css.container}>
        <div className={css.textWraper}>
          <h2 className={css.title}>Campers of your dreams</h2>
          <h2 className={css.subtitle}>
            You can find everything you want in our catalog
          </h2>
        </div>

        <Link to="/catalog/" className={css.button}>
          View Now
        </Link>
      </div>
    </div>
  );
}
