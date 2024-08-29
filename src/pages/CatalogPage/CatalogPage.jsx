import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/camperSlice.js";
import CamperList from "../../components/CamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";
import { selectCampers } from "../../redux/selectors.js";
import Filters from "../../components/Filters/Filters.jsx";

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
    console.log("Values from form:", values);
    const filtred = campers.filter((camper) => {
      console.log("Checking camper:", camper);
      const matchLocation = values.location
        ? camper.location.toLowerCase().includes(values.location.toLowerCase())
        : true;

      // const matchEquipment =
      //   values.equipment.lenth > 0
      //     ? camper.equipment.every((equipmentItem) => {
      //         console.log(
      //           `Checking equipment ${equipmentItem}:`,
      //           camper[equipmentItem]
      //         );
      //         return camper[equipmentItem] === true;
      //       })
      //     : true;
      const matchEquipment =
        values.equipment.length > 0
          ? values.equipment.every((equipmentItem) => {
              console.log(
                `Checking equipment ${equipmentItem}:`,
                camper[equipmentItem]
              );
              return camper[equipmentItem] === true;
            })
          : true;

      const matchVehicleType = values.vehicleType
        ? camper.form === values.vehicleType
        : true;

      console.log("matchLocation:", matchLocation);
      console.log("matchVehicleType:", matchVehicleType);
      console.log("matchEquipment:", matchEquipment);

      return matchLocation && matchEquipment && matchVehicleType;
    });
    console.log("Filtered campers:", filtered);
    setFiltredCampers(filtred);
  };

  return (
    <div className={css.catalog}>
      <h1 className={css.title}>Catalog</h1>
      <Filters onFilterChange={handleFiltredChange} />
      <CamperList campers={filtredCampers} />
    </div>
  );
}
