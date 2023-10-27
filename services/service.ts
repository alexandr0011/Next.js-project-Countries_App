import { BorderCountries } from "@/interfaces/borderCountries.interface";
import { Country } from "@/interfaces/country.interface";

export async function getCountries(): Promise<Country[]> {
  const response = await fetch(`${process.env.BASE_URL}all`);

  return response.json();
}

export async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(
    `${process.env.BASE_URL}name/${name}?fullText=true`
  );
  const country = await response.json();

  return country[0];
}

export async function getCountryBordersByName(name: string): Promise<BorderCountries[]> {
  const response = await fetch(`${process.env.BASE_URL}all`);
  const countries: Country[] = await response.json();
  const country = countries.find(
    (country: Country) => country.name.common === name
  );

  return country?.borders?.map((border) => {
    const borderCountries = countries.find(
      (country) => country.cca3 === border
    );

    return {
      name: borderCountries?.name.common || "",
      rusName: borderCountries?.translations.rus.common || "",
      flag: borderCountries?.flags.svg || "",
      flagAlt: borderCountries?.flags.alt || "",
    };
  }) || [];
}
