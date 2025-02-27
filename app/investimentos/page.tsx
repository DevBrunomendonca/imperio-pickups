import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import CardAboutInvestments from "./_components/card-about-investments";

const HomePage = () => {
  return (
    <>
      <SectionBannerHomeInvestment />
      <SectionOurStructureInvestment />
      <SectionCardsInvestment />
      <SectoionAboutInvestment />
      <SectionFounderInvestment />
      <SectionBannerStoreInvestment />
      <SectionContactInvestment />
    </>
  );
};

const SectionBannerHomeInvestment = () => {
  return (
    <section
      id="home"
      className="bg-[url('/banners/banner-home-investimentos-mobile.webp')] h-[700px] bg-cover bg-no-repeat bg-center md:bg-[url('/banners/banner-home-investimentos-desktop.webp')]"
    >
      <div className="pt-[82px] max-w-6xl mx-auto  px-4  h-full ">
        <div className="max-w-[586px] flex gap-3 items-start flex-col h-full justify-center">
          <div className="flex py-1 px-2 border-[1px] rounded-sm border-color-yellow  items-center gap-2">
            <p className="text-white text-sm">
              Lucro, segurança e transparência
            </p>
            <ArrowRight color="#FECA49" />
          </div>
          <h1 className="text-4xl text-white font-semibold">
            Receba 1,4% ao mês sobre seu investimento de forma segura e
            transparente.
          </h1>
          <p className="text-gray-400">
            Já imaginou ter seu investimento rendendo 1,4% ao mês, sem riscos?
            Esta é a tranquilidade que vamos trazer para você.
          </p>
          <a
            className="w-full"
            href="https://wa.link/l7gq41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full md:max-w-[320px] bg-color-yellow text-black">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionOurStructureInvestment = () => {
  return (
    <section id="our-structure" className="py-8 space-y-3">
      <h2 className="text-white text-2xl font-semibold text-center">
        Nossa estrutura
      </h2>
      <div className="flex w-full items-center gap-4">
        <div className="w-full hidden  rounded-r-md  h-[300px] bg-color-yellow lg:block"></div>
        <iframe
          className="border-0 px-4 w-full min-h-[300px] md:min-h-[600px] rounded-[30px] md:min-w-[800px] xl:min-w-[1200px]"
          src="https://www.youtube.com/embed/Fe7h2iJbiGI?si=nfZTDlhnv37_Y8fV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-full hidden  rounded-l-md  h-[300px] bg-color-yellow lg:block"></div>
      </div>
    </section>
  );
};

const SectionCardsInvestment = () => {
  return (
    <section className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        <CardAboutInvestments
          srcImg="/icons/icone-attach-money.svg"
          title="O que vamos fazer com seu dinheiro?"
          content="Vamos trabalhar seu investimento de forma inteligente dentro do nosso próprio ecossistema, onde faturamos múltiplos dígitos mensalmente."
        />
        <CardAboutInvestments
          srcImg="/icons/icone-currency-exchange.svg"
          title="Como faremos isso?"
          content="Com nossa comunidade de mais de 2 mil pagamentos mensais, prontos para comprar nossos produtos e veículos."
        />
        <CardAboutInvestments
          srcImg="/icons/icone-payments.svg"
          title="Qual a segurança?"
          content="Nossa negociação não é com o consumidor final, mas sim com as concessionárias parceiras, ou seja, risco zero, pois os veículos ficam em nossa posse, sem margem para prejuízos."
        />
      </div>
    </section>
  );
};

const SectoionAboutInvestment = () => {
  return (
    <section id="about-us" className="px-4 py-8">
      <div className="flex max-w-6xl mx-auto flex-col gap-5 items-start md:flex-row md:items-center">
        <Image
          src="/banners/banner-instagram.png"
          alt="banner mostrando um celuar no instagram"
          width={0}
          height={0}
          sizes="100vh"
          quality={100}
          className="w-full mx-auto max-w-[500px] h-auto"
        />
        <div className="flex w-full mx-auto max-w-[500px] md:max-w-none flex-col items-start gap-3">
          <div>
            <h3 className="text-base text-color-yellow">Império das Picapes</h3>
            <h2 className="text-white text-2xl font-semibold">
              De Goiânia para o Brasil
            </h2>
            <Image
              src="/icons/icone-star.svg"
              alt="icone estrelas"
              width={152}
              height={24}
            />
          </div>
          <p className="text-sm text-gray-400">
            Maior empresa do segmento, criada em 08/2012 pelo empreendedor Kecio
            Duarte. Com sede em Goiânia - GO, o Império das Picapes se tornou
            uma referência nacional em customização de picapes de grande porte,
            com faturamento de múltiplos dígitos mensalmente. Sempre pensando em
            expansão, invadiu o mercado digital e hoje, somando todas as suas
            redes sociais, gerou o número fantástico de mais de 800 mil
            seguidores, vendendo para todo o território brasileiro com um ROI de
            2x.
          </p>
          <a
            className="w-full"
            href="https://wa.link/l7gq41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:max-w-[320px] bg-color-yellow text-black">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionFounderInvestment = () => {
  return (
    <section className="px-4 py-8 bg-none md:bg-[url('/banners/banner-fundador-desktop.webp')] bg-cover bg-center bg-no-repeat min-h-[600px]">
      <div className="max-w-6xl flex flex-col gap-5 mx-auto">
        <div className="flex w-full mx-auto max-w-[500px] flex-col items-start gap-3 md:mx-0">
          <div>
            <h3 className="text-base text-color-yellow">Fundador</h3>
            <h2 className="text-white text-2xl font-semibold">
              De feira livre ao Império das Picapes
            </h2>
          </div>
          <p className="text-sm text-gray-400">
            Conhecido nas redes sociais como{" "}
            <span className="font-semibold">IMPERADOR</span>, Kecio Duarte é um
            empreendedor nato, com mais de 27 anos de experiência. Começou sua
            carreira vendendo refrigerantes nas feiras livres da cidade de
            Goiânia aos 8 anos de idade. Hoje, ele criou seu próprio império,
            com poder de compra e venda em todo o território nacional,
            tornando-se a maior referência no Brasil em customização de picapes.
            Aos 35 anos, conta com empresas físicas e digitais, mais de 2 mil
            assinantes recorrentes em seus projetos digitais e mais de 450 mil
            seguidores em uma de suas redes sociais.
          </p>
          <a
            className="w-full"
            href="https://wa.link/l7gq41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:max-w-[320px] bg-color-yellow text-black">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
        <div className="block rounded-md w-full bg-[url('/banners/banner-fundador-mobile.webp')] mx-auto max-w-[500px]  bg-cover bg-center bg-no-repeat min-h-[400px] md:hidden"></div>
      </div>
    </section>
  );
};

const SectionBannerStoreInvestment = () => {
  return (
    <section className="bg-[url('/banners/banner-loja-mobile.webp')] md:bg-[url('/banners/banner-loja-desktop.webp')] bg-cover bg-center bg-no-repeat min-h-[250px] md:min-h-[400px]"></section>
  );
};

const SectionContactInvestment = () => {
  return (
    <section id="contact" className="bg-color-yellow px-4 py-8">
      <div className="max-w-6xl mx-auto flex items-center gap-5">
        <div className="flex w-full mx-auto max-w-[500px] flex-col items-start gap-3 md:mx-0">
          <div>
            <h3 className="text-base text-black">Contato</h3>
            <h2 className="text-black text-2xl font-semibold">
              Vamos conversar?
            </h2>
          </div>
          <p className="text-sm text-black">
            Tire suas dúvidas, converse com nossos especialistas e descubra como
            podemos ajudar você a investir com segurança.
          </p>
          <a
            className="w-full"
            href="https://wa.link/l7gq41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:max-w-[320px] bg-black text-color-yellow">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
        <Image
          src="/icons/icone-grande-wtpp.webp"
          alt="Icone grande WhatsApp"
          width={415}
          height={432}
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default HomePage;
