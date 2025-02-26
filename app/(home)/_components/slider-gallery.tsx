import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDataImagesGallery } from "@/app/_hooks/use-data-images-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

const SliderGallery = () => {
  const [sliderPerView, setSliderPerview] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      setSliderPerview(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { dataImagesGallery } = useDataImagesGallery();
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={sliderPerView}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper items-center"
      >
        {dataImagesGallery.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img.srcImage}
              width={380}
              height={390}
              alt="Imagem de uma pickup"
              className="mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderGallery;
