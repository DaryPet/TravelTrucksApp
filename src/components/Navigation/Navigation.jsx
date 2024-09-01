import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <nav className={css.list}>
      <div className={css.logo}>
        <img src="/images/Logo.svg" alt="logo" />
      </div>
      <div className={css.links}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog/"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}
