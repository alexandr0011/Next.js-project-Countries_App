interface CountryPageInfoComponentProps {
  description: string;
  info: string;
  additionalInfo?: string;
}

export const CountryPageInfoComponent = ({
  description,
  info,
  additionalInfo,
}: CountryPageInfoComponentProps) => {
  
  return (
    <h2 className="text-x1 text-gray-800 mt-3">
      <b>{description}:</b> {info}
      {additionalInfo && ` - ${additionalInfo}`}
    </h2>
  );
};
