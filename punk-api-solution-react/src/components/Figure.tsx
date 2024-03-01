import { ReactElement } from "react";

interface IFiguerProps {
  height?: string;
  imageUrl: string;
}

export function Figure({ height, imageUrl }: IFiguerProps): ReactElement {
  return (
    <figure className="figure">
      <img src={imageUrl} />
    </figure>
  );
}
