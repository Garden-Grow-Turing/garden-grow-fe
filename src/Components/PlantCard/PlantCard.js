import { Link } from "react-router-dom";
import { LOAD_VEGETABLE } from "../../Graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import "./PlantCard.css";

const PlantCard = ({ id, name, img, growzone }) => {

  return (
    <Link to={`${growzone}/${id}`}>
      <div className="plant-card">
        <img
          alt={`Click for more information about ${name}`}
          src={`/Assets/${img}`}
          className="card-image"
        ></img>
        <h2 className="card-title">{name}</h2>
        <button className="update-my-garden-button">+ to my garden</button>
      </div>
    </Link>
  );
};

export default PlantCard;
