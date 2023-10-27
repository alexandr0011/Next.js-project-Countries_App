import Link from "next/link";
import Image from "next/image";

export const BackBtnComponent = () => {
  
  return (
    <Link href="/" className="flex items-center py-2 gap-1">
      <Image src="/arrow.svg" alt="go back home" width={24} height={24} />
      <h2>Back</h2>
    </Link>
  );
};
