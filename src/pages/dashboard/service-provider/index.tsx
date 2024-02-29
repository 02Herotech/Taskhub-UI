import styles from "./styles.module.scss";
import Image from "next/image";
import provider from "../../../../public/dashboardAssets/portrait.jpg";
import React from "react";
import { GrLocation, GrSearch } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

import SPDashboardLayout from "../../../../components/spdashboardLayout";
import Card from "../../../../components/card/Card";
import Picture1 from "../../../../public/customerAssets/close-up-collection-make-up-beauty-products.jpg";
import Picture2 from "../../../../public/customerAssets/vintage-sewing-machine-with-thread-measuring-tape.jpg";

function Index() {
  const [completeReg, setCompleteReg] = useState(true);

  const { data: session } = useSession();
  console.log(session);

  const firstName = session?.user.user.firstName;
  const lastName = session?.user.user.lastName;
  const lastNameInitial = lastName?.charAt(0);
  const suburb = session?.user?.user?.address?.suburb;
  const state = session?.user?.user?.address?.state;
  const profilePicture = session?.user.user.profileImage;
  const isEnabled = session?.user?.user?.enabled;

  useEffect(() => {
    if (isEnabled === false) {
      setCompleteReg(!completeReg);
    }
  }, [isEnabled]);

  return (
    <SPDashboardLayout>
      {completeReg ? (
        ""
      ) : (
        <div className="bg-purpleBase mt-4  text-white rounded-md flex justify-center items-center w-[900px] mx-auto py-3">
          <p>
            Before you proceed, kindly complete your registration to have full
            control of your account -
          </p>
          <Link
            href="/dashboard/service-provider/complete-registration"
            className={`ml-2 text-[#FE9B07] border-[2px] border-[#FE9B07] py-2 px-4 rounded-md hover:text-[#b4b4b4] hover:border-[#b4b4b4]`}
          >
            Complete
          </Link>
        </div>
      )}

      <div className={`m-10 w-[900px] flex flex-col justify-center`}>
        <div className={`flex items-center justify-between`}>
          <div className="flex justify-center items-center">
            {profilePicture ? (
              <div
                className={`w-[160px] h-[160px] rounded-[50%] border-2 border-[#FE9B07] flex justify-center items-center`}
              >
                <img
                  src={profilePicture}
                  alt="customer-image"
                  className={`rounded-[50%] object-cover h-[150px]`}
                  width={150}
                />
              </div>
            ) : (
              <span
                className={` bg-grey3 rounded-[50%] border-[2px] border-[#FE9B07] border-whiten p-7 text-[80px] text-white`}
              >
                <FaRegUser />
              </span>
            )}
            <div className={`flex flex-col justify-center items-start ml-5`}>
              <div
                className={`flex items-center justify-center text-[18px] font-extrabold`}
              >
                <p>
                  {firstName} {lastNameInitial}.
                </p>

                {completeReg ? (
                  <MdVerified className={`text-green4 ml-2`} />
                ) : (
                  ""
                )}
              </div>

              {completeReg ? (
                <div className={`flex text-[13px] items-center justify-center`}>
                  <GrLocation className={`mr-1`} />
                  <p>
                    {suburb}, {state}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            className={`flex justify-center border-[1px] border-[#D9D9D9] p-2 rounded-md items-center`}
          >
            <GrSearch className={`mr-2`} />
            <input
              type="text"
              className={`w-[350px] outline-none`}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </SPDashboardLayout>
  );
}

export default Index;
