"use client";

import { BackBtnComponent } from "@/components/back-btn/BackBtnComponent";

const ERROR_MESSAGE = "Oop, an Error occured!";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5x1 text-center font-bold text-gray-800 my-16">
        {ERROR_MESSAGE}
      </h1>
      <BackBtnComponent />
    </section>
  );
}
