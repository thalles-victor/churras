import NextImage from "next/image";

import LogoImage from "@/assets/logo.svg";
import TommateImage from "@/assets/Tomatte-background.webp";
import FireBgLeftImage from "@/assets/fire-bg-left-background.webp";
import CuttingBoardImage from "@/assets/tabua de carne.webp";
import FireBgRightImage from "@/assets/fire-bg-right.webp";

export function Header() {
  return (
    <header className="flex  flex-row pt-5 relative z-10 w-full">
      <NextImage
        className="absolute top-0 w-[400px] h-[600px] -left-[100px] -z-10 xl:-left-[25px]"
        src={FireBgLeftImage}
        width={400}
        height={600}
        alt=""
      />
      <div className="flex text-wrap w-full  items-center  flex-col-reverse laptop:flex-row justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between w-[60vw]">
          <div className="flex flex-col gap-8 max-w-[384px]">
            <NextImage src={LogoImage} width={256} height={140} alt="logo" />
            <h1 className="text-[3rem]">
              Domine a arte do
              <span className="bg-gradient-to-br from-red-400 to-[#DE4A48] bg-clip-text text-transparent">
                {" "}
                churrasco{" "}
              </span>
              desde o inicio
            </h1>

            <p className="text-lg max-w-[384px]">
              Torne-se um mestre do churrasco e impressione seus amigos e
              familiare com habilidades de grelhar excepcionais!
            </p>

            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 bg-red-500 text-lg hover:bg-red-400 max-w-md w-full p-8 rounded-[5px]">
              GARANTIR MINHA VAGA
            </button>
          </div>
          <NextImage src={CuttingBoardImage} width={600} height={690} alt="" />
        </div>
      </div>

      <NextImage
        className="absolute right-0 z-[-1]"
        fetchPriority="high"
        src={FireBgRightImage}
        width={700}
        height={600}
        alt=""
      />
      <NextImage
        className="absolute top-[60px] md:top-[160px] w-[320px] md:w-[458px] md:h-[637px] -right-[140px] md:right-[50px] z-[-1]"
        fetchPriority="high"
        src={TommateImage}
        width={458}
        height={717}
        alt=""
      />
    </header>
  );
}
