import Image from "next/image";
import { revalia } from "@/styles/font";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import Link from "next/link";

import featuredSP from "../../public/featuredSP.png";

const FeaturedSP = () => {
  return (
    <div className={`flex items-end py-10 max-w-7xl mx-auto my-8`}>
      <div>
        <Image src={featuredSP} width={1000} alt=""></Image>
      </div>
      <div className="bg-[#381F8C] h-[700px] w-full  px-12 py-6 text-white ">
        <div className="w-[550px]  flex flex-col  justify-center space-y-8">
          <h1 className={`${revalia.className} text-[40px]`}>
            FEATURED SERVICE PROVIDERS
          </h1>
          <p className="text-[23px] leading-tight">
            Our service provider gives you the Quality <br /> you expect, the
            service you deserve!
          </p>
          <div className="flex justify-between">
            <div className="bg-[#009CDE] max-w-[250px] h-[250px] px-4 py-8 flex flex-col space-y-4">
              <span className="text-[30px]">
                <MdOutlineAccessTimeFilled />
              </span>
              <h5 className="font-extrabold text-[18px]">24/7 Availability</h5>
              <p className="text-[12px]">
                Our service provider gives you the Quality you expect, the
                service you deserve!
              </p>
            </div>
            <div className="bg-white max-w-[250px] h-[250px] px-4 py-8 flex flex-col space-y-4 text-black mt-14">
              <span className="text-[30px]">
                <ImUserTie />
              </span>
              <h5 className="font-bold text-[18px]">
                Professional Service Providers
              </h5>
              <p className="text-[12px] ">
                Our service provider gives you the Quality you expect, the
                service you deserve!
              </p>
            </div>
          </div>

          <div className="my-12">
            <Link href="/auth/">
              <button className="w-[180px] h-[70px] border-none text-white  bg-[#FE9B07] text-[12px] rounded-lg hover:bg-[#fe8b07]">
                Become a Featured SP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSP;
