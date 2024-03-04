import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import axios from "axios";

import logoImg from "../../public/logo.png";
import { Button } from "../buttons/Button";
import { poppins } from "@/styles/font";

const Nav = () => {
  const router = useRouter();

  const isLinkActive = (linkPath: string) => {
    return router.pathname === linkPath;
  };

  const [isOpen, setIsOpen] = useState(false);

  const contactClick = () => {
    setIsOpen(!isOpen);
  };

  const { data: session } = useSession();

  const customer = "CUSTOMER";

  const handleLogOut = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_API_URL}auth/logout`
    //   );
    //   console.log("Sign Out: ", response);

    //   if (response.status === 200) {
    //     // Refresh the page
    //     window.location.reload();
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    await signOut({
      redirect: false,
    });
    window.location.reload();
  };

  return (
    <div className="flex flex-col">
      <div
        className={`drop-shadow-md z-50 w-full bg-white fixed top-0 ${poppins.className}`}
      >
        <div
          className={`max-w-7xl mx-auto px-8 py-3 flex items-center justify-between font-extrabold`}
        >
          <div>
            <Link href="/" className={`flex space-x-3 items-center`}>
              <Image
                src={logoImg}
                width={50}
                height={40}
                alt=""
                className={`mt-[-10px]`}
              />
              <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
            </Link>
          </div>

          <div className={`flex space-x-12 items-center text-[15px]`}>
            <Link
              href="/"
              className={`p-2 hover:text-purpleBase ${
                isLinkActive("/") && "text-purpleBase"
              }`}
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className={`p-2 hover:text-purpleBase ${
                isLinkActive("/services") && "text-purpleBase"
              }`}
            >
              Marketplace
            </Link>

            <div className=" flex relative ">
              <ul>
                <li
                  className={`flex hover:text-purpleBase items-center cursor-pointer`}
                  onClick={contactClick}
                >
                  Contact Us
                  <span className="text-[15px]">
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </li>

                {isOpen && (
                  <div className="absolute top-16 ml-[-10px] bg-[#ead8d8] w-[250px] text-[13px] py-2 px-4">
                    <ul>
                      <li className="mb-1">
                        Email:{" "}
                        <Link
                          href="mailto:privacy@taskhub.com.au"
                          className="hover:text-grey6"
                        >
                          privacy@taskhub.com.au
                        </Link>
                      </li>
                      <li>
                        Phone:{" "}
                        <Link
                          href="tel:+6145000000"
                          className="hover:text-grey6"
                        >
                          +6145000000
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </ul>
            </div>
          </div>

          <div className={`flex space-x-3 items-center`}>
            {session ? (
              session?.user.user.roles[0] === customer ? (
                <div>
                  <Link href="dashboard/customer">
                    <button className="px-3 border-[2px] border-purpleBase bg-purpleBase text-white text-base font-extralight h-[45px] hover:bg-purple7 rounded-md">
                      Dashboard
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href="dashboard/service-provider">
                    <button className="px-3 border-[2px] border-purpleBase bg-purpleBase text-white text-base font-extralight h-[45px] hover:bg-purple7 rounded-md">
                      Dashboard
                    </button>
                  </Link>
                </div>
              )
            ) : (
              <Link href="/auth">
                <Button
                  btnValue="Sign Up"
                  className="w-[95px] px-3 border-[2px] border-purpleBase bg-purpleBase text-white text-base font-extralight h-[45px] hover:bg-purple7"
                />
              </Link>
            )}

            {session ? (
              <button
                className="bg-white border-[2px] w-[95px] h-[45px]  px-4 border-purpleBase text-black  hover:text-white font-extralight text-base hover:bg-purple7 rounded-md"
                onClick={handleLogOut}
              >
                Log out
              </button>
            ) : (
              <Link href="/auth/login">
                <Button
                  btnValue="Log in"
                  className="bg-white border-[2px] w-[95px] h-[45px]  px-4 border-purpleBase text-black  hover:text-white font-extralight text-base hover:bg-purple7"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
