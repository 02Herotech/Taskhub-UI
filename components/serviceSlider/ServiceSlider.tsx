import Image from "next/image";
import { revalia } from "@/styles/font";
import { useState, useEffect } from "react";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import image1 from "../../public/cleaners.png";
import image2 from "../../public/laundryGirl.png";
import image3 from "../../public/mecho.png";

const ServiceSlider = () => {
  const [open, setOpen] = useState(false);

  const [imageSlider, setImageSlider] = useState(0);
  const [selectedImage, setSelectedImage] = useState([image1, image2, image3]);

  const gotoPrev = () => {
    const isFirstSlide = imageSlider === 0;
    const newImage = isFirstSlide ? selectedImage.length - 1 : imageSlider - 1;
    setImageSlider(newImage);
  };

  const gotoNext = () => {
    const isLastSlide = imageSlider === selectedImage.length - 1;
    const newImage = isLastSlide ? 0 : imageSlider + 1;
    setImageSlider(newImage);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageSlider((prevIndex) =>
        prevIndex === selectedImage.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Clear the timer when component unmounts or when the selected testimonial changes
    return () => clearTimeout(timer);
  }, [imageSlider, selectedImage.length]);

  return (
    <div className="max-w-7xl mx-auto px-20 my-20 flex flex-col justify-center items-center">
      <div className="flex w-[1000px] h-[300px] items-center justify-center">
        <div className="relative">
          <Image src={selectedImage[imageSlider]} width={700} alt="" />
          <div
            // className={`flex space-x-3  cursor-pointer absolute bottom-2 right-[50%]`}
            className="absolute inset-0 flex justify-center items-end cursor-pointe space-x-2 mb-3"
          >
            {[...Array(selectedImage.length)].map((_, index) => (
              <span
                key={index}
                onClick={() => setImageSlider(index)}
                className={`${
                  index === imageSlider ? "opacity-100" : "opacity-50"
                } text-[25px] text-white `}
              >
                <FaCircle />
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[300px] h-[292px] bg-purpleBase items-center justify-center text-center">
          <h1
            className={`text-white ${revalia.className}  uppercase text-[30px]`}
          >
            Taskhub
            <br />
            Marketplace
          </h1>
        </div>
      </div>

      <div className="w-[700px] my-16 font-extrabold text-center">
        <p>
          "Welcome to our Market Place! Discover a world of solution tailored
          just for you. From expert advice to top-notch sevices, we're here to
          meet your needs. Explore our offering and let us help you achieve your
          gooals."
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <div
          className={`bg-[#969696] hover:bg-[#828282] cursor-pointer h-[50px] w-[150px] flex justify-center items-center`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="text-[12px] font-extrabold">All Categories</p>
          <span className="text-[12px] ml-1">
            {open ? <SlArrowDown /> : <SlArrowUp />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
