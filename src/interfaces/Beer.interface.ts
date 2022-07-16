export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

interface Volume {
  value: number;
  unit: string;
}

interface BoilVolume {
  value: number;
  unit: string;
}

interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: any;
}

interface MashTemp {
  temp: TempMashTemp;
  duration: number;
}

interface TempMashTemp {
  value: number;
  unit: string;
}

interface Fermentation {
  temp: TempFermentation;
}

interface TempFermentation {
  value: number;
  unit: string;
}

interface Ingredients {
  malt: Malt[];
  hops: any[];
  yeast: string;
}

interface Malt {
  name: string;
  amount: Amount;
}

interface Amount {
  value: number;
  unit: string;
}