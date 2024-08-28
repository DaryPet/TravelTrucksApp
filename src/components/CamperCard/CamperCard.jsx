import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  return (
    <div className="camper-card">
      <img src={camper.image} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>
        Price:{" "}
        {camper.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Link to={`/catalog/${camper.id}`}>Show More</Link>
    </div>
  );
};

export default CamperCard;
