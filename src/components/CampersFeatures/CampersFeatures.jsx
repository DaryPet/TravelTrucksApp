import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../services/api.js";
import { BsWind, BsCupHot, BsTv, BsDroplet, BsUiRadios } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import css from "./CampersFeatures.module.css";

// export default function CampersFeatures() {
//   const { id } = useParams();
//   const [features, setFeatures] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchFeaturesData() {
//       try {
//         setLoading(true);
//         setError(false);
//         const camper = await fetchCamperById(id);
//         console.log("Camper data:", camper);
//         setFeatures(camper);
//       } catch (error) {
//         setError(true);
//         console.error("Error fetching camper data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchFeaturesData();
//   }, [id]);

//   const featureIcons = {
//     AC: <BsWind />,
//     kitchen: <BsCupHot />,
//     TV: <BsTv />,
//     bathroom: <BsDroplet />,
//     radio: <BsUiRadios />,
//     gas: <MdLocalGasStation />,
//     refrigerator: <MdLocalGasStation />,
//     microwave: <MdLocalGasStation />,
//     water: <BsUiRadios />,
//     transmission: <BsUiRadios />,
//   };

//   const details = [
//     { label: "Form", value: features.form },
//     { label: "Length", value: features.length },
//     { label: "Width", value: features.width },
//     { label: "Height", value: features.height },
//     { label: "Tank", value: features.tank },
//     { label: "Consumption", value: features.consumption },
//     // { label: "Transmission", value: features.transmission },
//     // { label: "Engine", value: features.engine },
//   ];

//   return (
//     <div className={css.container}>
//       <h2 className={css.title}>Vehicle Equipment</h2>
//       {loading && <p>Loading equipment...</p>}
//       {error && <p>Error fetching equipment.</p>}
//       {features ? (
//         <>
//           <ul className={css.list}>
//             {Object.entries(features).map(([key, value]) =>
//               value && featureIcons[key] ? (
//                 <li key={key} className={css.item}>
//                   {featureIcons[key]} {key}
//                 </li>
//               ) : null
//             )}
//           </ul>
//           <div className={css.details}>
//             <h3 className={css.detailsTitle}>Vehicle details</h3>
//             <ul className={css.detailsList}>
//               {details.map(
//                 (detail) =>
//                   detail.value && (
//                     <li key={detail.label}>
//                       <span className={css.detailsLabel}>{detail.label}:</span>{" "}
//                       {detail.value}
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         </>
//       ) : (
//         <p>No equipment information available.</p>
//       )}
//     </div>
//   );
// }

export default function CampersFeatures() {
  const { id } = useParams();
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFeaturesData() {
      try {
        setLoading(true);
        setError(false);
        const camper = await fetchCamperById(id);
        console.log("Camper data:", camper);
        setFeatures(camper);
      } catch (error) {
        setError(true);
        console.error("Error fetching camper data:", error);
      } finally {
        setLoading(false);
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
    refrigerator: <MdLocalGasStation />,
    microwave: <MdLocalGasStation />,
    water: <MdLocalGasStation />,
    transmission: <BsWind />,
    engine: <BsWind />,
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Vehicle Equipment</h2>
      {loading && <p>Loading equipment...</p>}
      {error && <p>Error fetching equipment.</p>}
      {features ? (
        <>
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
          <div className={css.details}>
            <h3 className={css.detailsTitle}>Vehicle details</h3>
            <ul className={css.detailsList}>
              {features.form && (
                <li>
                  <span className={css.detailsLabel}>Form:</span>{" "}
                  {features.form}
                </li>
              )}
              {features.length && (
                <li>
                  <span className={css.detailsLabel}>Length:</span>{" "}
                  {features.length}
                </li>
              )}
              {features.width && (
                <li>
                  <span className={css.detailsLabel}>Width:</span>{" "}
                  {features.width}
                </li>
              )}
              {features.height && (
                <li>
                  <span className={css.detailsLabel}>Height:</span>{" "}
                  {features.height}
                </li>
              )}
              {features.tank && (
                <li>
                  <span className={css.detailsLabel}>Tank:</span>{" "}
                  {features.tank}
                </li>
              )}
              {features.consumption && (
                <li>
                  <span className={css.detailsLabel}>Consumption:</span>{" "}
                  {features.consumption}
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <p>No equipment information available.</p>
      )}
    </div>
  );
}
