import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/newlogo.png";
import Newsletter from "../newsletter/Newsletter";
import { poppins } from "@/styles/font";

import paypal from "../../public/paypal.svg";
import mastercard from "../../public/mastercard.svg";
import google from "../../public/Google.svg";
import visa from "../../public/visa.svg";

const NewFooter = () => {
  return (
    <div>
      <div className={`bg-[#f5eced] w-full py-[50px] ${poppins.className}`}>
        <div
          className={`flex flex-col justify-around text-black max-w-7xl mx-auto`}
        >
          <div className="flex justify-center items-center h-[120px] space-x-[120px] p-2 cursor-pointer mb-[20px]">
            <div>
              <Image src={google} width={90} height={30} alt="" />
            </div>

            <div>
              <Image src={paypal} width={68} height={68} alt="" />
            </div>

            <div>
              <Image src={mastercard} width={68} height={68} alt="" />
            </div>

            <div>
              <Image src={visa} width={68} height={68} alt="" />
            </div>
          </div>

          <div className={` flex px-3 justify-evenly mb-10`}>
            <div className={` font-extrabold space-y-8`}>
              <div className={`  w-[170px]  flex justify-start`}>
                <Link href="/" className={`flex py-1 px-2 items-center`}>
                  <Image src={logoImg} width={120} alt="" />
                </Link>
              </div>
              <div className={`w-[300px] text-[12px] pl-[5px] text-justify`}>
                <h5>
                  From home maintenance to professional consultations, creative
                  solutions to skilled experts, we've curated a vast network of
                  top-tier service providers.
                </h5>
              </div>

              <div>
                <Newsletter />
              </div>

              <div className={`text-base font-bold pt-12`}>
                <h2> &copy; 2023 TaskHub. All Rights Reserved.</h2>
              </div>
            </div>
            <div className={`flex flex-col space-y-2 mt-2`}>
              <h3 className={`mb-8 font-extrabold text-sm`}>Company</h3>
              <ul className={`space-y-3 `}>
                <li>
                  <Link
                    href="/about"
                    className={`text-[14px] hover:text-grey4`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`flex flex-col space-y-2 mt-2`}>
              <h3 className={`mb-8 font-extrabold text-sm`}>Marketplace</h3>
              <ul className={`space-y-3 `}>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Automotive Services
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Health & Fitness
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Real Estate Services
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Delivery & Logistics
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Art & Creativity
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Travel & Adventure
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Childcare & Babysitting
                  </Link>
                </li>
                <li>
                  <Link href="/#" className={`text-[14px] hover:text-grey4`}>
                    Education & Tutoring
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`flex flex-col space-y-2`}>
              <h3 className={`mb-8 font-extrabold text-sm`}>Others</h3>

              <ul className={`space-y-3`}>
                <li>
                  <Link href="/faq" className={`text-[14px] hover:text-grey4`}>
                    FAQs
                  </Link>
                </li>
                {/* <li>
                                    <Link href='#' className={`text-[14px] hover:text-grey4`}>Contact Us</Link>
                                </li> */}
                <li>
                  <Link
                    href="/terms-and-condition"
                    className={`text-[14px] hover:text-grey4`}
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className={`text-[14px] hover:text-grey4`}
                  >
                    {" "}
                    Privacy{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
