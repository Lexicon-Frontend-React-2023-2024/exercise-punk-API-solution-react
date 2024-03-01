import { useEffect, useState } from "react";
import { Beer } from "../components/Beer";
import { IBeer } from "../interfaces";

export function LandingPage(): JSX.Element {
  const [beer, setBeer] = useState<null | IBeer>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchRandomBeer = async () => {
    setIsLoading(true);

    const response = await fetch("https://api.punkapi.com/v2/beers/random");
    const beer: IBeer[] = await response.json();

    setBeer(beer[0]);
    setIsLoading(false);
  };

  // If the dependency array is empty, the effect will only run when the component is mounted the first time.
  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return (
    // An empty element is called af fragment and lets us return multiple "root" elements.
    <main id="landing-page">
      <section>
        <h2>You random beer of the day!</h2>
        <article className={`random-beer ${isLoading ? "loading" : ""}`}>
          {isLoading ? <div className="loader"></div> : <Beer beer={beer!} />}
        </article>
      </section>
      <footer>
        <button className="generate-random-beer" onClick={() => fetchRandomBeer()}>
          Generate new random beer
        </button>
      </footer>
    </main>
  );
}
