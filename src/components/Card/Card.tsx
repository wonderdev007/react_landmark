import React from "react";
import "./Card.css";

interface Props {
  natural: boolean;
  dateBuilt: string;
  imageUrl: string;
  title: string;
  location: string;
  googleMapsUrl: string;
  description: string;
  key: number;
}

const Card: React.FC<Props> = (props) => {
  let dateText;
  if (props.natural === true) {
    dateText = "NATURAL";
  } else {
    dateText = `COMPLETED IN ${props.dateBuilt}`;
  }

  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" alt={props.title} />
      <div className="card--info">
        <div className="card--location--data">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/Octicons-location.svg"
            className="card--pin"
            alt="pin"
          />
          <p className="card--location">{props.location.toUpperCase()}</p>
          <a
            href={props.googleMapsUrl}
            className="card--maps"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <p className="card--title">{props.title}</p>
        <div className="card--date">{dateText}</div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
