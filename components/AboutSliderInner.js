import { useState, useEffect, useRef } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";

const AboutSliderInner = ({ i, length, image, prevSlide, nextSlide, currentIndex, setCurrentIndex }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    swiperSlide.isActive
      ? setCurrentIndex(i)
      : "";
  });


  return (
    <>
      <div className={"swiperNav"}>
        <div className={"swiperPrev"} onClick={ currentIndex == 0 ? prevSlide : () => swiper.slidePrev()}></div>
        <div className={"swiperNext"} onClick={ currentIndex == length -1 ? nextSlide : () => swiper.slideNext()}></div>
      </div>
      <div>
      {image.dimensions.aspectRation <= 1 ? (
        <Image src={image.url} loading="eager" />
      ) : (
        <Image
          src={image.url}
          layout="fill"
          objectFit="contain"
          loading="eager"
          className="portraitImage"
        />
      )}
      </div>
    </>
  );
};

export default AboutSliderInner;
