import { Benefits } from "@/components/Benefits";
import { WhatYouLearning } from "@/components/WhatWillYouLearning";
import { Apresentaton } from "@/components/apresentation";
import { Header } from "@/components/header";
import { Recommendations } from "@/components/recommendations";

export default function Home() {
  return (
    <main className="flex flex-col bg-black items-center min-h-100vh gap-20 pb-40">
      <Header />
      <Apresentaton />
      <Recommendations />
      <WhatYouLearning />
      <Benefits />
    </main>
  );
}
