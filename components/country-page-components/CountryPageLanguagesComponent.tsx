import { CountryLanguages } from "@/interfaces/countryLanguages.interface";

interface CountryPageLanguagesComponentProps {
  description: string;
  info: CountryLanguages;
}

export const CountryPageLanguagesComponent = ({
  description,
  info,
}: CountryPageLanguagesComponentProps) => {
  
  return (
    <h2 className="text-x1 text-gray-800 mt-3">
      <b>{description}: </b>
      {Object.values(info).map((language) => (
        <span
          key={language}
          className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
        >
          {language}
        </span>
      ))}
    </h2>
  );
};
