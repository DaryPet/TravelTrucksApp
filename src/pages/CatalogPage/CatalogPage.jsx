import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/camperSlice.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/selectors.js";
import { addValue } from "../../redux/paginationSlice.js";
import { selectPaginationPage } from "../../redux/paginationSelector.js";
import Filters from "../../components/Filters/Filters.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const [filtredCampers, setFiltredCampers] = useState(campers);
  const itemsPerPage = useSelector(selectPaginationPage);

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

  const paginatedCampers = filtredCampers.slice(0, itemsPerPage);

  const handleLoadMore = () => {
    dispatch(addValue(4));
  };

  return (
    <div className={css.catalog}>
      <Filters onFilterChange={handleFiltredChange} />
      {filtredCampers.length > 0 && (
        <div>
          <CamperList campers={paginatedCampers} />
          {paginatedCampers.length < filtredCampers.length && (
            <button onClick={handleLoadMore} className={css.loadMore}>
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}
