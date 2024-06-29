"use client";

import NextImage from "next/image";

import { motion } from "framer-motion";

import CostelaJanelaImage from "@/assets/learning/costela-janela.webp";
import CostelaImage from "@/assets/learning/costela.webp";
import CupimImage from "@/assets/learning/cupim.webp";
import LinguicaImage from "@/assets/learning/linguica.webp";
import PacentaButecoImage from "@/assets/learning/panceta-buteco.webp";
import PacetaImage from "@/assets/learning/panceta.webp";
import PicanhaImage from "@/assets/learning/picanha.webp";
import PorkImage from "@/assets/learning/pork.webp";
import PrimeImage from "@/assets/learning/prime.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function WhatYouLearning() {
  return (
    <section>
      <h1 className="text-3xl font-medium text-center mb-12">
        O que voce vai aprender?
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <LearningCard image={CostelaJanelaImage} title="Costela Ripa" />
        <LearningCard image={CostelaImage} title="Costela" />
        <LearningCard image={CupimImage} title="Cupim" />
        <LearningCard image={LinguicaImage} title="Linguica" />
        <LearningCard image={PacentaButecoImage} title="Paceta Buteco" />
        <LearningCard image={PacetaImage} title="Paceta" />
        <LearningCard image={PicanhaImage} title="Picanha" />
      </div>
    </section>
  );
}

type LearningCardProps = {
  image: string | StaticImport;
  title: string;
};

function LearningCard({ image, title }: LearningCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="w-full h-full flex flex-col  hover:cursor-pointer"
    >
      <div className="bg-gray-200/10 w-full flex flex-1 h-fit rounded-[5px]">
        <NextImage
          className="w-full h-full object-cover rounded-tr-xl rounded-tl-xl"
          src={image}
          width={340}
          height={414}
          alt={title}
        />
      </div>
      <button className="text-3xl inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled-opacity-50 text-primary-foreground h-10 w-full bg-red-500 p-6 py-8 hover:bg-red-400 rounded-br-xl rounded-bl-xl">
        {title}
      </button>
    </motion.div>
  );
}
