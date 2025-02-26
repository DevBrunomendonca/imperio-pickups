import Image from "next/image";

interface CardPersonalizationProps {
  imageUrl: string;
  title: string;
  content: string;
}

const CardPersonalization = ({
  imageUrl,
  title,
  content,
}: CardPersonalizationProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <Image width={40} height={40} alt="" src={`/icons/${imageUrl}`} />
        <h3 className="text-white font-semibold text-xl">{title}</h3>
      </div>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default CardPersonalization;
