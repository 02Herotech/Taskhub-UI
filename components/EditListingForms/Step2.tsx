import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface FormState {
  serviceDescription: string;
  available: boolean;
}

interface Step2Props {
  formData: FormState;
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  listingData: any;
  setFormData: any;
}

const Step2 = ({
  nextStep,
  prevStep,
  formData,
  handleChange,
  listingData,
  setFormData,
}: Step2Props) => {
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = ["serviceDescription"];
    return requiredFields.every((field) => formData[field] !== "");
  };

  return (
    <div className="my-16 flex flex-col justify-center items-start w-[900px]">
      <form>
        <div>
          <h1 className="text-lg font-extrabold">Description & Availability</h1>

          <div className="my-16 w-[600px]">
            <h3 className="text-md font-extrabold mb-5">Description</h3>
            <div className="flex flex-col text-[15px] ml-5">
              <label
                htmlFor="serviceDescription"
                className="font-semibold mb-10"
              >
                Briefly Describe Your Service{" "}
                <span className={`text-red10`}>*</span>
              </label>

              <textarea
                name="serviceDescription"
                id="serviceDescription"
                cols={50}
                rows={10}
                maxLength={500}
                className="resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-10"
                onChange={handleChange}
                value={formData.serviceDescription}
                placeholder={listingData?.serviceDescription}
              />
            </div>

            <p className="text-[11px] text-grey4 flex justify-end mt-2">
              (maximum of 500 characters)
            </p>
          </div>

          <div className="my-16">
            <h3 className="text-md font-extrabold mb-5">Availability</h3>

            <div className="my-10 cursor-pointer">
              <label
                htmlFor="available"
                className={`flex w-[50px] h-[18px] rounded-full items-center ${
                  formData.available ? "bg-green5" : "bg-red5"
                }`}
                onClick={() =>
                  setFormData({
                    ...formData,
                    available: !formData.available,
                  })
                }
              >
                <span
                  className={`h-[15px] w-[15px] bg-white rounded-full transition-transform cursor-pointer ${
                    formData.available
                      ? "transform translate-x-[32px]"
                      : "transform translate-x-[2.5px]"
                  }`}
                ></span>
              </label>
            </div>

            <div>
              <p className="font-semibold ml-5">
                Choose your business working Days and Hour
              </p>
              <div className="flex items-center text-[15px] ml-5 mt-8">
                <p className="text-md font-semibold">TIME:</p>

                <div className="flex items-center  space-x-2 ml-3 ">
                  <div className="flex items-center p-2 border rounded-md font-semibold space-x-2">
                    {listingData?.startHour ? (
                      <p>{listingData?.startHour}</p>
                    ) : (
                      <p>0</p>
                    )}
                    <p>:</p>
                    {listingData?.startMinute ? (
                      <p>{listingData?.startMinute}</p>
                    ) : (
                      <p>0</p>
                    )}
                  </div>

                  <p>-</p>

                  <div className="flex items-center p-2 border rounded-md font-semibold space-x-2">
                    {listingData?.closeHour ? (
                      <p>{listingData?.closeHour}</p>
                    ) : (
                      <p>0</p>
                    )}
                    <p>:</p>
                    {listingData?.closeMinute ? (
                      <p>{listingData?.closeMinute}</p>
                    ) : (
                      <p>0</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex text-[12px] w-[120px] justify-between ml-[85px] text-grey4 mt-1">
                <p>Open</p>
                <p>Close</p>
              </div>

              <div className="flex items-center space-x-3 text-[15px] ml-5 mt-8">
                <p className="text-md font-semibold">DAYS:</p>

                {listingData &&
                Array.isArray(listingData.availableDays) &&
                listingData.availableDays.length > 0 ? (
                  <div className="flex space-x-2">
                    {listingData.availableDays.map(
                      (
                        day: string | any[],
                        index: React.Key | null | undefined
                      ) => (
                        <span
                          key={index}
                          className="bg-[#14782F] rounded-xl font-bold py-2 px-3 text-white"
                        >
                          {day.slice(0, 3)}
                        </span>
                      )
                    )}
                  </div>
                ) : (
                  <p className="bg-[#14782F] rounded-xl font-bold py-2 text-center text-white w-[150px]">
                    Not Available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-between w-full">
        <div
          className="flex items-center hover:text-[#FE9B07] cursor-pointer"
          onClick={prevStep}
        >
          <span className="mr-2">
            <FaArrowLeft />
          </span>
          Back
        </div>

        <button
          className={` py-3 bg-purpleBase px-6 rounded-lg text-white w-[200px] hover:bg-purpleHover cursor-pointer flex justify-center disabled:opacity-50`}
          disabled={!isAllFieldsFilled()}
          onClick={nextStep}
        >
          <p>Save & Continue</p>
        </button>
      </div>
    </div>
  );
};

export default Step2;
