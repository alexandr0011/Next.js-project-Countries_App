import { BorderCountries } from "@/interfaces/borderCountries.interface";
import { CountryCard } from "../country-card/CountryCard";

interface NeighbourCountriesComponentProps {
  countries: BorderCountries[];
}

export const NeighbourCountriesComponent = ({
  countries,
}: NeighbourCountriesComponentProps) => {
  
  return (
    <section>
      <h3 className="mt-12 text-2x1 font-semibold text-gray-800">
        Neighbour countries
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2">
        {countries.map((border) => (
          <CountryCard key={border.name} {...border} />
        ))}
      </div>
    </section>
  );
};
