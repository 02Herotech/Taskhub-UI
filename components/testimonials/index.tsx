import Image from "next/image";
import { revalia } from "@/styles/font";

import image1 from "../../public/testimonial1.png";
import image2 from "../../public/testimonial2.png";
import TestimonialSlider from "../Slider";

const Testimonials = () => {
  return (
    <div
      className={`flex  justify-between items-center px-20 py-10 max-w-7xl mx-auto my-8`}
    >
      <div className="flex justify-between items-start  w-full">
        <div className=" w-[570px] flex flex-col space-y-8">
          <h1 className={`${revalia.className} text-[40px]`}>Testimonials</h1>
          <h2 className="text-[40px] font-bold">Customer's Review</h2>

          <TestimonialSlider />
        </div>
        <div>
          <Image src={image1} width={500} alt="Image of an electrician"></Image>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
