import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";

const GetStarted = () => {
  return (
    <div
      className={`flex justify-start flex-col px-20 py-10 max-w-7xl mx-auto my-8 h-[1000px] relative`}
    >
      <div className="bg-[#381F8C] w-[1000px] h-[650px] p-12 text-white flex flex-col space-y-5">
        <h2 className="text-[30px] font-bold">
          Welcome aboard! <br />
          <span className="text-[#FE9B07]">Get started</span> <br />
          with TaskHub
        </h2>
        <p>Dear User,</p>
        <p className="w-[240px] text-justify">
          We are excited to welcome you to Syncskills latest innovation –
          TaskHub! This new solution is designed to allow you to effortlessly
          find, connect, and engage with the perfect service professionals.
        </p>
      </div>
      {/* <div className="my-12">
        <Link href="/auth/">
          <button className="w-[180px] h-[70px] border-none text-white  bg-purpleBase text-[12px] rounded-lg hover:bg-purpleHover">
            Get Started
          </button>
        </Link>
      </div> */}

      <div className="flex flex-col space-y-12 absolute bottom-[30px] right-[90px] items-end">
        <div className="flex space-x-10">
          <div className="bg-[#009CDE] w-[330px] h-[340px] px-6 py-10  text-white space-y-6">
            <div className="flex space-x-5 text-[18px]">
              <p>01</p>
              <p className="font-extrabold">Log in:</p>
            </div>
            <span className="bg-white h-[3.5px] w-[200px] block"></span>
            <div className="flex flex-col text-[16px] space-y-7">
              <div className="flex items-center">
                {/* <span className="bg-white h-[6px] w-[6px] block rounded-full "></span> */}
                <p>
                  If you already have an account with us, please{" "}
                  <Link
                    href="/auth/login"
                    className="font-bold text-[#FE9B07] hover:text-[#BC8400]"
                  >
                    Log In
                  </Link>
                </p>
              </div>
              <div className="flex items-center">
                {/* <span className="bg-white h-[6px] w-[6px] block rounded-full "></span> */}
                <p>
                  However, if you don't have an account with us,{" "}
                  <Link
                    href="/auth"
                    className="font-bold text-[#FE9B07] hover:text-[#BC8400]"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#009CDE] w-[330px] h-[340px] px-6 py-10  text-white space-y-6">
            <div className="flex space-x-5 text-[18px]">
              <p>02</p>
              <p className="font-extrabold">Setup your profile:</p>
            </div>
            <span className="bg-white h-[3.5px] w-[250px] block"></span>
            <div className="flex items-center w-[270px] flex-col text-[16px] space-y-7">
              <p>Complete your registration by submitting your full address</p>
              <div className="flex items-end">
                <p>Upon successful submission, your account becomes verified</p>
                <span className="mb-1 bg-[#FE9B07] p-[2px] rounded-full  text-[12px]">
                  <IoMdCheckmark />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#009CDE] w-[330px] h-[340px] px-6 py-6  text-white space-y-4 ">
          <div className="flex space-x-5 text-[18px]">
            <p>03</p>
            <p className="font-extrabold">Own your dashboard</p>
          </div>
          <span className="bg-white h-[3.5px] w-[250px] block"></span>
          <div className="flex items-center w-[270px] flex-col text-[15px] space-y-5 text-justify">
            <p>
              As a verified{" "}
              <span className="text-[#FE9B07] font-bold ">Customer</span>, you
              can post a tasks, connect with Service Provider, book a services,
              make payments, etc{" "}
            </p>
            <div className="flex items-end">
              <p>
                As a verified{" "}
                <span className="text-[#FE9B07] font-bold">
                  Service Provider
                </span>
                , you can post your listings, connect with customers, view your
                orders, recieve payment, get rated, etc{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
