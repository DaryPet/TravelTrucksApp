import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/camperSlice.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/selectors.js";
import Filters from "../../components/Filters/Filters.jsx";
// import Pagination from "../../components/Pagination/Pagination.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const [filtredCampers, setFiltredCampers] = useState(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setFiltredCampers(campers);
  }, [campers]);

  const handleFiltredChange = (values) => {
    const filtred = campers.filter((camper) => {
      const matchLocation = values.location
        ? camper.location.toLowerCase().includes(values.location.toLowerCase())
        : true;

      const matchEquipment =
        values.equipment.length > 0
          ? values.equipment.every((equipmentItem) => {
              return camper[equipmentItem] === true;
            })
          : true;

      const matchVehicleType = values.vehicleType
        ? camper.form === values.vehicleType
        : true;

      return matchLocation && matchEquipment && matchVehicleType;
    });
    setFiltredCampers(filtred);
  };
  return (
    <div className={css.catalog}>
      <Filters onFilterChange={handleFiltredChange} />
      {filtredCampers.length > 0 ? (
        <CamperList campers={filtredCampers} />
      ) : (
        <p className={css.noCampers}>
          Sorry, no campers match your search! Try another one!
        </p>
      )}
    </div>
  );
}
