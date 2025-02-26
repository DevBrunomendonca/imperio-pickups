import Image from "next/image";

interface CardAboutProps {
  srcImg: string;
  title: string;
  content: string;
}

const CardAboutInvestments = ({ srcImg, title, content }: CardAboutProps) => {
  return (
    <div className="flex mx-auto max-w-[385px] cursor-pointer p-3 rounded-md bg-[#080D10] flex-col gap-2 ease-in-out duration-500 hover:md:scale-105 ">
      <Image src={srcImg} alt={`icone card ${title}`} width={60} height={60} />
      <h4 className="text-white text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{content}</p>
    </div>
  );
};

export default CardAboutInvestments;
