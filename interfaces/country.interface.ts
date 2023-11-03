import { CountryLanguages } from "./countryLanguages.interface";

export interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  translations: {
    rus: {
      common: string;
      official: string;
    };
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages: CountryLanguages;
  borders?: string[];
  cca3: string;
}
