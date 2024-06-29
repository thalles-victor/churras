import NextImage from "next/image";

import BonusImage from "@/assets/bonus.webp";
import GroupImage from "@/assets/grupo.webp";

export function Benefits() {
  return (
    <section className="flex flex-col gap-40 items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Tenha acesso imediato a</h2>
        <h1 className="text-3xl">
          <strong>+ de 45 Aulas em Video</strong>
        </h1>
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 bg-red-500 text-lg hover:bg-red-400 max-w-md w-full p-8 rounded-[5px] mt-8">
          GARANTIR MINHA VAGA!
        </button>
      </div>

      <div className="relative md-12 flex flex-col laptop:flex-row items-center max-w-[800px] w-[90vw]">
        <div>
          <NextImage
            className="w-[clamp(280px,40vw,350px)] md:absolute -top-20 -left-12"
            src={BonusImage}
            width={800}
            height={600}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 w-full bg-[#1D1D1D] items-center md:items-end md:pr-5 py-5 rounded-xl ">
          <div className="flex flex-col gap-[clamp(14px,1vw,24px)]">
            <h1 className="font-extrabold text-2xl md:text-5xl relative">
              +2 Bonus
            </h1>
            <p className="md:text-xl w-[380px]">
              Você recebera 2 E-books com 40 receitas de molhos e temperos para
              poder turbinar ainda mais o seu churrasco.
            </p>
            <div className="flex flex-row justify-between">
              <div className="bg-black rounded-[10px] text-white p-2 text-nowrap">
                De: R$ 69,00
              </div>
              <div className="rounded-[10px] text-white font-bold text-xl text-nowrap bg-red-500 p-2">
                Por: R$ 0,00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative md-12 flex flex-col laptop:flex-row items-center max-w-[800px] w-[90vw]">
        <div>
          <NextImage
            className="w-[clamp(280px,30vw,350px)] md:absolute -top-20 -left-12"
            src={GroupImage}
            width={400}
            height={478}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-8 w-full bg-[#1D1D1D] items-center md:items-end md:pr-5 py-10 md:py-16 rounded-xl">
          <div className="flex flex-col gap-[clamp(14px,1vw,24px)]">
            <h2 className="font-extrabold text-xl md:text-3xl">
              Grupo de Alunos
            </h2>
            <p className="md:text-xl w-[380px]">
              Tenha acesso exclusivo ao grupo de alunos, onde podrao tirar
              duvidas diretamente com o Doutor Churras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
