import Image from "next/image";
import { Metadata } from "next";
import { CountryPageInfoComponent } from "@/components/country-page-components/CountryPageInfoComponent";
import { CountryPageLanguagesComponent } from "@/components/country-page-components/CountryPageLanguagesComponent";
import { getCountryBordersByName, getCountryByName } from "@/services/service";
import { BackBtnComponent } from "@/components/back-btn/BackBtnComponent";
import { NeighbourCountriesComponent } from "@/components/country-page-components/NeighbourCountriesComponent";

interface CountryDetailProps {
  params: {
    name: string;
  };
}

export async function generateMetadata({
  params: { name },
}: CountryDetailProps): Promise<Metadata> {
  return {
    title: `${decodeURI(name)} | Countries App`,
  };
}

export default async function CountryDetail({
  params: { name },
}: CountryDetailProps) {
  const country = await getCountryByName(name);
  const borderCountries = await getCountryBordersByName(decodeURI(name));
  const formatter = Intl.NumberFormat("rus", { notation: "compact" });

  return (
    <section className="flex flex-col container">
      <h1 className="text-5x1 font-bold text-center text-gray-800 mt-16">
        {country.translations.rus.official}
      </h1>

      <BackBtnComponent />

      <article className="flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
        <section>
          {country.capital && (
            <CountryPageInfoComponent
              description="Столица"
              info={country.capital}
            />
          )}

          {country.region && (
            <CountryPageInfoComponent
              description="Регион"
              info={country.region}
              additionalInfo={country.subregion}
            />
          )}

          {country.population && (
            <CountryPageInfoComponent
              description="Население"
              info={formatter.format(country.population)}
            />
          )}

          {country.languages && (
            <CountryPageLanguagesComponent
              description="Язык"
              info={country.languages}
            />
          )}
        </section>

        <div className="relative h-48 my-2 md:h-auto w-96 shadow-md md:order-last order-first">
          <Image src={country.flags.svg} alt={country.flags.alt} fill />
        </div>
      </article>

      <NeighbourCountriesComponent countries={borderCountries} />
    </section>
  );
}
