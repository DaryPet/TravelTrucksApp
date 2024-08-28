// src/pages/CatalogPage/CatalogPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import {
  selectCampers,
  selectCampersLoading,
  selectCampersError,
} from "../../redux/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
}
