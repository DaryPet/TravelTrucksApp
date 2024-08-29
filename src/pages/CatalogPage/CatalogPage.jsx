import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/camperSlice.js";
import CamperList from "../../components/CamperList/CamperList.jsx";

import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/selectors.js";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);

  useEffect(() => {
    console.log("fetchCampers вызывается");
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log("campers in CatalogPage:", campers);

  return (
    <div className={css.catalog}>
      <h1 className={css.title}>Catalog</h1>
      <CamperList campers={campers} />
    </div>
  );
}
