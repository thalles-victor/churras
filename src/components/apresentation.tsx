import NextImage from "next/image";

import HowOrganizeImage from "@/assets/com-organizar-um-churrasco.webp";
import TableImage from "@/assets/table.webp";
import UniqueTomatoImage from "@/assets/uniqueTomato.webp";

export function Apresentaton() {
  return (
    <section className="flex desktop:flex-row flex-col justify-between items-center w-[50%] pt-20">
      <div className="relative flex flex-col mb-40 mr-0 desktop:mr-20 ">
        <NextImage
          className="rounded-md"
          src={HowOrganizeImage}
          width={280}
          height={365}
          alt=""
        />
        <NextImage
          className="absolute rounded-md -right-10 top-40"
          src={TableImage}
          width={218}
          height={311}
          alt=""
        />
        <NextImage
          className="absolute rounded-md bottom-10 -left-20 object-fill "
          src={UniqueTomatoImage}
          width={800}
          height={600}
          alt=""
        />
      </div>
      <div className="flex flex-col w-[420px] gap-8">
        <h1 className="text-2xl font-bold text-red-400">
          churrascochurrascochurrasco Prezado amante do churrasco...
        </h1>
        <p className="text-lg">
          Você já se imaginou como seria ser capaz de preparar churrascos
          suculentos, saborosos e que deixam todos com água na boca?
        </p>
        <p>
          Se você é um iniciante e deseja aprender todos os segredos para se
          tornar um mestre do churrasco, temos a solução perfeita para você!
        </p>
        <p>
          Apresentamos o curso <strong>Churrasco para Iniciantes</strong>, um
          programa completo e detalhado que foi cuidadosamente desenvolvido para
          ensinar até mesmo os mais inexperientes a dominar a arte do churrasco.
        </p>
        <p>
          Chegou a hora de deixar para trás os dias de carnes queimadas ou
          ressecadas e surpreender todos com suas habilidades de grelhar!
        </p>
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 bg-red-500 text-lg hover:bg-red-400 max-w-md w-full p-8 rounded-[5px]">
          QUERO ENTRAR NO CURSO
        </button>
      </div>
    </section>
  );
}
