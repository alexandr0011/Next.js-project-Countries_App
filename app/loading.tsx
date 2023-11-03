import Image from "next/image";

export default function Loading() {
  const arr = Array.from({ length: 20 });

  return (
    <section className="grid grid-cols-5 container mt-12 gap-3">
      {arr.map((_, index) => (
        <article
          key={index}
          className="h-64 min-w-full p-2 transition-shadow bg-white border-2 border-transparent animate-pulse group rounded-xl hover:shadow-2xl hover:shadow-indigo-200/40 hover:border-indigo-200"
        >
          <div className="flex items-center justify-center w-full h-40 p-2 mb-4 overflow-hidden bg-gray-300 rounded-xl">
            <Image
              src="/mountain.svg"
              alt="loading image"
              width={50}
              height={50}
            />
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

          <span className="sr-only">Loading...</span>
        </article>
      ))}
    </section>
  );
}
