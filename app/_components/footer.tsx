import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-8 space-y-3">
      <div className="flex max-w-6xl mx-auto px-4 flex-col items-center justify-between gap-8 md:gap-4 md:flex-row md:items-start">
        <Image
          src="/logo-imperio-footer.png"
          alt="logo Império das pikups"
          width={176}
          height={125}
        />

        <div className="space-y-3">
          <h4 className="text-base text-white font-medium text-center md:text-center">
            Mapa do site
          </h4>
          <ul className="space-y-2">
            <li className="text-sm cursor-pointer text-white text-center md:text-center">
              Início
            </li>
            <li className="text-sm cursor-pointer text-white text-center md:text-center">
              Nossa estrutura
            </li>
            <li className="text-sm cursor-pointer text-white text-center md:text-center">
              Quem somos
            </li>
            <li className="text-sm cursor-pointer text-white text-center md:text-center">
              Contato
            </li>
          </ul>
        </div>

        <div className=" max-w-[200px]">
          <h4 className="text-base text-white pb-3 font-medium text-center md:text-start">
            Onde estamos
          </h4>
          <a
            href=""
            className="text-white text-sm break-words text-center md:text-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Independência, 6984 - St. dos Funcionários, Goiânia - GO,
            74543-020
          </a>
        </div>

        <div className="space-y-3">
          <h4 className="text-base text-white font-medium text-center md:text-start">
            Atendimento
          </h4>
          <div className="flex flex-col">
            <a
              href="tel:6232930302"
              className="text-white text-sm text-center md:text-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              (62) 3293-0302
            </a>

            <a
              href=""
              className="text-white pt-2 underline text-sm text-center md:text-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nosso site
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#242424] py-4">
        <p className="max-w-6xl text-center text-xs text-white px-4 mx-auto">
          © Copyright 2024 Império das Pickups - Desenvolvido por Instance
          Technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
