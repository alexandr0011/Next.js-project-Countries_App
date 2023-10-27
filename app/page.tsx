import { CountryCard } from "@/components/country-card/CountryCard";
import { getCountries } from "@/services/service";

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
      {countries.map(({ name, translations, flags }) => (
        <CountryCard
          key={name.common}
          name={name.common}
          rusName={translations.rus.common}
          flag={flags.svg}
          flagAlt={flags.alt}
        />
      ))}
    </section>
  );
}
