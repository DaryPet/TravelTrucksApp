import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsTv,
  BsDroplet,
  BsUiRadios,
} from "react-icons/bs";
import { LuRefrigerator } from "react-icons/lu";
import { MdLocalGasStation } from "react-icons/md";
import { TbMicrowave } from "react-icons/tb";
import css from "./CampersFeatures.module.css";

export default function CampersFeatures() {
  const { id } = useParams();
  const [features, setFeatures] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFeaturesData() {
      try {
        setError(false);
        const camper = await fetchCamperById(id);
        setFeatures(camper);
      } catch (error) {
        setError(true);
      }
    }
    fetchFeaturesData();
  }, [id]);

  const featureIcons = {
    AC: <BsWind />,
    kitchen: <BsCupHot />,
    TV: <BsTv />,
    bathroom: <BsDroplet />,
    radio: <BsUiRadios />,
    gas: <MdLocalGasStation />,
    refrigerator: <LuRefrigerator />,
    microwave: <TbMicrowave />,
    water: <BsDroplet />,
    transmission: <BsDiagram3 />,
    engine: <MdLocalGasStation />,
  };

  return (
    <div className={css.container}>
      {error && <p>Error fetching equipment.</p>}
      {features && (
        <>
          <div className={css.features}>
            <ul className={css.list}>
              {Object.entries(features).map(([key, value]) =>
                value && featureIcons[key] ? (
                  <li key={key} className={css.item}>
                    {featureIcons[key]}
                    {key === "transmission" || key === "engine"
                      ? ` ${value}`
                      : ` ${key}`}
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div className={css.details}>
            <h3 className={css.detailsTitle}>Vehicle details</h3>
            <ul className={css.detailsList}>
              {features.form && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Form:</span>{" "}
                  <span className={css.detailsData}>{features.form}</span>
                </li>
              )}
              {features.length && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Length:</span>{" "}
                  <span>{features.length}</span>
                </li>
              )}
              {features.width && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Width:</span>{" "}
                  <span className={css.detailsData}>{features.width}</span>
                </li>
              )}
              {features.height && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Height:</span>{" "}
                  <span className={css.detailsData}>{features.height}</span>
                </li>
              )}
              {features.tank && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Tank:</span>{" "}
                  <span className={css.detailsData}>{features.tank}</span>
                </li>
              )}
              {features.consumption && (
                <li className={css.detailsForm}>
                  <span className={css.detailsLabel}>Consumption:</span>{" "}
                  <span className={css.detailsData}>
                    {features.consumption}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
