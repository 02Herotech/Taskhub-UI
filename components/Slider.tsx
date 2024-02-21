import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaRegCircle, FaCircle } from "react-icons/fa";

import image1 from "../public/testimonial2.png";
import image2 from "../public/testimonial3.png";
import image3 from "../public/testimonial4.png";

const TestimonialSlider = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      ratedStars: 5,
      unratedStars: 0,
      review:
        "'Outstanding service! Our experience with Syncskills was exceptional, professional, prompt, and went above and beyond to meet our needs. Highly recommended!'",
      name: "Dame Luca",
      image: image1,
    },
    {
      id: 2,
      ratedStars: 4,
      unratedStars: 1,
      review:
        "'The service providers on this website are real professionals. I'm happy I gave it a try. The service providers on this website are real professionals. I'm happy I gave it a try.'",
      name: "Jobi Fella",
      image: image2,
    },
    {
      id: 3,
      ratedStars: 3,
      unratedStars: 2,
      review:
        "'You can never get it wrong with the services on this platform. The pay is worth it. Great job! You can never get it wrong with the services on this platform. The pay is worth it. Great job!'",
      name: "Kudu Mulk",
      image: image3,
    },
  ]);

  const gotoPrev = () => {
    const isFirstSlide = selectedTestimonial === 0;
    const newImage = isFirstSlide
      ? testimonials.length - 1
      : selectedTestimonial - 1;
    setSelectedTestimonial(newImage);
  };

  const gotoNext = () => {
    const isLastSlide = selectedTestimonial === testimonials.length - 1;
    const newImage = isLastSlide ? 0 : selectedTestimonial + 1;
    setSelectedTestimonial(newImage);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the timer when component unmounts or when the selected testimonial changes
    return () => clearTimeout(timer);
  }, [selectedTestimonial, testimonials.length]);

  const handleCircleClick = (index: any) => {
    setSelectedTestimonial(index);
  };
  return (
    <div className="flex flex-col space-y-20 items-center">
      <div className="flex items-center w-full justify-between ">
        <span
          onClick={gotoPrev}
          className="text-[25px] text-grey3 cursor-pointer hover:text-grey5"
        >
          <FaAngleLeft />
        </span>
        <div className="flex flex-col space-y-10 w-[500px] ">
          <div className="flex flex-col space-y-6">
            <div className="flex text-[#FFE815] text-[30px]">
              {[...Array(testimonials[selectedTestimonial].ratedStars)].map(
                (_, index) => (
                  <span key={index}>
                    <RiStarSFill />
                  </span>
                )
              )}
              {[...Array(testimonials[selectedTestimonial].unratedStars)].map(
                (_, index) => (
                  <span key={index}>
                    <RiStarSLine />
                  </span>
                )
              )}
            </div>
            <p className="text-[16px]">
              {testimonials[selectedTestimonial].review}
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <Image
              src={testimonials[selectedTestimonial].image}
              width={50}
              alt=""
            ></Image>
            <div className="text-[12px]">
              <p className="font-bold">
                {testimonials[selectedTestimonial].name}
              </p>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <span
          onClick={gotoNext}
          className="text-[25px] text-grey3 cursor-pointer hover:text-grey5"
        >
          <FaAngleRight />
        </span>
      </div>

      <div className="flex space-x-3 text-[#9747FF] cursor-pointer">
        {[...Array(testimonials.length)].map((_, index) => (
          <span key={index} onClick={() => setSelectedTestimonial(index)}>
            {index === selectedTestimonial ? <FaCircle /> : <FaRegCircle />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
