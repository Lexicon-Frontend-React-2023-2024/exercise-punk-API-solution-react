import { ReactElement, useEffect, useState } from "react";
import { Figure } from "../components/Figure";
import { IBeer } from "../interfaces";
import { useParams } from "react-router-dom";

export function BeerInfoPage(): ReactElement {
  const [beer, setBeer] = useState<IBeer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // NOTE: Research on how to type this up in TS.
  const { beerId } = useParams();

  const fetchBeerById = async (beerIdString: string) => {
    const response: Response = await fetch(`https://api.punkapi.com/v2/beers/${beerIdString}`);
    const beer: IBeer[] = await response.json();

    setBeer(beer[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBeerById(beerId!);
  }, [beerId]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <main id="beer-info-page">
      <section className="base-info" data-beerid="${routeState.beerId}">
        <Figure imageUrl={beer!.image_url} />
        <h3 className="name">{beer!.name}</h3>
        <div className="details">
          <div className="detail">
            <span className="detail-name">Alcohol by volume:</span> {beer!.abv}%
          </div>
          <div className="detail">
            <span className="detail-name">Volume:</span>
            {beer!.volume.value} {beer!.volume.unit}
          </div>
          {/* <div className="detail">
            <span className="detail-name">Hops:</span>{ingredients.hops.join(", ")}
          </div>
          <div className="detail">
            <span className="detail-name">Malts:</span>{ingredients.malts.join(", ")}
          </div>
          <div className="detail">
            <span className="detail-name">Yeast:</span> {ingredients.yeast}
          </div> */}
        </div>
      </section>

      <section className="description">{beer!.description}</section>

      <section className="food-pairing">
        <div className="list-description">Food pairing tips</div>
        <ul className="food-pairing-tips"></ul>
      </section>

      <section className="brewers-tips">
        <div className="brewers-tips-header">Brewer's tips</div>
        {beer!.brewers_tips}
      </section>
    </main>
  );
}
