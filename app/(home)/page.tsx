"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "../_components/ui/button";
import {
  CouterPros,
  useAnimationCounter,
} from "../_hooks/use-animation-statistics";
import Counter from "./_components/counter";
import CardPersonalization from "./_components/card-personalization";
import Image from "next/image";
import SliderGallery from "./_components/slider-gallery";

const HomePage = () => {
  return (
    <>
      <SectionBannerHome />
      <SectionStatistis endValue={0} start={false} />
      <SectionAboutPersonalization />
      <SectionGalleryProjects />
      <SectionPersonalization />
      <SectionDocumentation />
      <SectionDelivery />
      <SectionFounder />
      <SectionBannerStore />
      <SectionContact />
    </>
  );
};

const SectionBannerHome = () => {
  return (
    <section
      id="home"
      className="bg-[url('/banners/banner-home-mobile.webp')] h-[700px] bg-cover bg-no-repeat bg-center md:bg-[url('/banners/banner-home-desktop.webp')]"
    >
      <div className="pt-[82px] max-w-6xl mx-auto  px-4  h-full ">
        <div className="max-w-[586px] flex gap-3 items-start flex-col h-full justify-center">
          <h1 className="text-4xl text-white font-semibold">
            PERSONALIZE SUA PICKUP COM EXCLUSIVIDADE
          </h1>
          <p className="text-gray-400">
            Somos especialistas em{" "}
            <span className="text-color-yellow">personalização de pickups</span>{" "}
            para amantes de carros que buscam exclusividade, alto padrão e
            projetos com assinatura única.
          </p>
          <a
            className="w-full"
            href="https://wa.link/obswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full md:max-w-[320px] bg-color-yellow text-black">
              Fale conosco
              <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionStatistis = ({ endValue, start, className }: CouterPros) => {
  const { sectionRef, isVisible } = useAnimationCounter({
    endValue,
    start,
    className,
  });

  return (
    <section ref={sectionRef} className="bg-color-yellow ">
      <div className="max-w-5xl py-8 px-4 mx-auto flex flex-col w-full gap-6 items-center lg:flex-row">
        <div className="flex items-center gap-3 mx-auto">
          <Counter endValue={500} start={isVisible} className="w-[200px]" />
          <p className="text-black text-base max-w-[160px]">
            Pickups Personalizadas
          </p>
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <Counter endValue={50} start={isVisible} className="w-[139px]" />
          <p className="text-black text-base max-w-[160px]">
            Itens Personalizáveis
          </p>
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <Counter endValue={15} start={isVisible} className="w-[119px]" />
          <p className="text-black text-base max-w-[160px]">Anos de Mercado</p>
        </div>
      </div>
    </section>
  );
};

const SectionAboutPersonalization = () => {
  return (
    <section id="about-us" className="max-w-5xl space-y-8 mx-auto px-4 py-8">
      <div className="w-full space-y-2 max-w-[580px] mx-auto lg:mx-0 lg:w-1/2">
        <h2 className="text-4xl font-bold text-white">
          Personalização exclusiva
        </h2>
        <p className="text-sm text-gray-400">
          <span className="text-color-yellow">Transforme</span> sua pickup em{" "}
          <span className="text-color-yellow">uma obra-prima única</span> e{" "}
          <span className="text-color-yellow">personalizada</span> para você.
          Veja abaixo uma de nossas transformações
        </p>
      </div>
      <div className="flex items-end flex-col gap-4 lg:flex-row">
        <div className="w-full max-w-[580px] mx-auto">
          <Image
            src="/images/imagem-pickup-1.webp"
            width={586}
            height={330}
            alt="imagem de uma pick-up"
            className="pb-8"
          />
          <a
            className="w-full"
            href="https://wa.link/obswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-color-yellow text-black">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
        <div className="space-y-5 w-full max-w-[580px] mx-auto">
          <CardPersonalization
            imageUrl="icone-dinheiro.svg"
            title="Sua Pickup mais valorizada no mercado"
            content="Transforme sua pickup em um artigo de alto padrão e exclusividade. Cada projeto recebe uma assinatura única, tornando-o ainda mais valorizado no mercado."
          />
          <CardPersonalization
            imageUrl="icone-lapis.svg"
            title="Seu projeto fora do papel"
            content="Todo amante de pickups sonha em ter um modelo personalizado. Na Império, você descreve o projeto, e nós o tornamos realidade."
          />
          <CardPersonalization
            imageUrl="icone-exclamacao.svg"
            title="Desperte a atenção"
            content="Uma pickup personalizada reflete exclusividade e sofisticação. Quem possui um modelo customizado transmite um estilo de vida único e de alto valor."
          />
        </div>
      </div>
    </section>
  );
};

const SectionGalleryProjects = () => {
  return (
    <section id="gallery" className="px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">Galeria de projetos</h2>
          <p className="text-gray-400 text-sm">
            Explore nossa galeria de pickups personalizadas e projetos únicos de
            alta qualidade.
          </p>
        </div>
        <SliderGallery />
      </div>
    </section>
  );
};

const SectionPersonalization = () => {
  return (
    <section className="px-4 py-8 bg-gray-200">
      <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto md:flex-row">
        <div className="w-full flex items-start gap-3 flex-col">
          <h2 className="text-4xl font-bold text-black">Personalização</h2>
          <p className="text-black text-sm">
            Contamos com uma equipe altamente qualificada e uma loja repleta dos
            melhores acessórios para que a montagem da sua pickup seja única e
            exclusiva. Personalizamos cada detalhe, tanto interno quanto
            externo.
          </p>
          <a
            className="w-full"
            href="https://wa.link/obswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-black text-white">
              Quero saber mais <ArrowUpRight />
            </Button>
          </a>
        </div>
        <Image
          src="/images/imagem-pickup-7.webp"
          width={525}
          height={360}
          alt="Imagem de uma pickup"
          className="w-full"
        />
      </div>
    </section>
  );
};

const SectionDocumentation = () => {
  return (
    <section className="px-4 py-8 bg-color-yellow">
      <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto md:flex-row">
        <Image
          src="/images/imagem-pickup-8.webp"
          width={525}
          height={360}
          alt="Imagem de uma pickup"
          className="w-full"
        />
        <div className="w-full flex items-start gap-3 flex-col">
          <h2 className="text-4xl font-bold text-black">Documentação</h2>
          <p className="text-black text-sm">
            Oferecemos assessoria completa para a documentação do veículo
            transformado, facilitando todo o processo, inclusive no momento da
            venda.
          </p>
          <a
            className="w-full"
            href="https://wa.link/obswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-black text-white">
              Quero saber mais <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionDelivery = () => {
  return (
    <section className="px-4 py-8 bg-black">
      <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto md:flex-row">
        <div className="w-full flex items-start gap-3 flex-col">
          <h2 className="text-4xl font-bold text-white">Entrega segura</h2>
          <p className="text-white text-sm">
            Realizamos o transporte da sua pickup para qualquer lugar do Brasil
            com segurança e exclusividade. Se necessário, buscamos e entregamos
            o veículo conforme sua necessidade.
          </p>
          <a
            className="w-full"
            href="https://wa.link/obswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-color-yellow text-black">
              Fale com um especialista <ArrowUpRight />
            </Button>
          </a>
        </div>
        <Image
          src="/images/imagem-pickup-9.webp"
          width={525}
          height={360}
          alt="Imagem de uma pickup"
          className="w-full"
        />
      </div>
    </section>
  );
};

const SectionFounder = () => {
  return (
    <section className="px-4 py-8 bg-none md:bg-[url('/banners/banner-fundador-desktop.webp')] bg-cover bg-center bg-no-repeat min-h-[600px]">
      <div className="max-w-6xl flex flex-col gap-5 mx-auto">
        <div className="flex w-full mx-auto max-w-[500px] flex-col items-start gap-3 md:mx-0">
          <div>
            <h3 className="text-base text-color-yellow">Fundador</h3>
            <h2 className="text-white text-2xl font-semibold">Kécio Duarte</h2>
          </div>
          <p className="text-sm text-gray-400">
            A Império das Pickups é referência nacional em personalização de
            pickups. Com mais de 15 anos de experiência e mais de 500 projetos
            exclusivos entregues, destacamo-nos pela qualidade, originalidade e
            atenção ao cliente.
          </p>
          <p className="text-sm text-gray-400">
            Nosso CEO, Kécio Duarte, é reconhecido no mercado por transformar
            cada pickup em uma verdadeira obra de arte automotiva.
          </p>
          <a
            className="w-full"
            href="https://wa.link/obswin"
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

const SectionBannerStore = () => {
  return (
    <section className="bg-[url('/banners/banner-loja-mobile.webp')] md:bg-[url('/banners/banner-loja-desktop.webp')] bg-cover bg-center bg-no-repeat min-h-[250px] md:min-h-[400px]"></section>
  );
};

const SectionContact = () => {
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
            href="https://wa.link/obswin"
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
