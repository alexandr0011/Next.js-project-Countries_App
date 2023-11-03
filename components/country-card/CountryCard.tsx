import Link from "next/link";
import Image from "next/image";

interface CoutryCardProps {
  name: string;
  rusName: string;
  flag: string;
  flagAlt: string;
}

export const CountryCard = ({
  name,
  rusName,
  flag,
  flagAlt = "country flag",
}: CoutryCardProps): JSX.Element => {
  
  return (
    <Link href={`/country/${name}`} key={name}>
      <article className="h-64 min-w-full p-2 bg-white border-2 rounded-x1 hover:border-indigo-200 transition-all">
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-x1">
          <Image src={flag} alt={flagAlt} className="object-cover" fill />
        </div>
        <h1 className="font-bold text-x1 text-center mt-1">{rusName}</h1>
      </article>
    </Link>
  );
};
