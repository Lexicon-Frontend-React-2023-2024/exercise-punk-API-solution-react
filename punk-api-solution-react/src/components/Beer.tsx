import { ReactElement } from "react";
import { IBeer } from "../interfaces";
import { Figure } from "./Figure";
import { useNavigate } from "react-router-dom";

interface IBeerProps {
  beer: IBeer;
}

export function Beer({ beer }: IBeerProps): ReactElement {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/beer-info/${beer.id}`);
  };

  return (
    <>
      <Figure imageUrl={beer.image_url} />
      <div className="random-beer-content">
        <h4 className="beer-name">{beer.name}</h4>
        <div className="see-more" onClick={handleOnClick}>
          <span>See more</span>
          <span className="material-symbols-outlined">keyboard_arrow_right</span>
        </div>
      </div>
    </>
  );
}
