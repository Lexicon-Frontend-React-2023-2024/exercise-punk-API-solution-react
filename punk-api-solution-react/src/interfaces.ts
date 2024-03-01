interface IAmount {
  value: number;
  unit: string;
}

export interface IBeer {
  abv: number;
  id: number;
  brewers_tips: string;
  description: string;
  food_pairing: string[];
  image_url: string;
  ingredients: IIngredients;
  name: string;
  tagline: string;
  volume: IVolume;
}

interface IHop {
  add: string;
  amount: IAmount;
  attribute: string;
  name: string;
}

interface IIngredients {
  hops: IHop[];
  malt: IMalt[];
  yeast: string;
}

interface IMalt {
  amount: IAmount;
  name: string;
}

export interface IRoute {
  id: number;
  name: string;
  path: string;
}

interface IVolume {
  value: number;
  unit: string;
}
