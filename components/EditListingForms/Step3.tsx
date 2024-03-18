import React, { useState } from "react";
import { FaArrowLeft, FaS } from "react-icons/fa6";

interface FormState {
  pricing: string | number;
  error2: string;
}

interface Step3Props {
  formData: FormState;
  nextStep: () => void;
  prevStep: () => void;
  handleChange3: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notEmptyError1: any;
  listingData: any;
}
const Step3 = ({
  nextStep,
  prevStep,
  handleChange3,
  formData,
  notEmptyError1,
  listingData,
}: Step3Props) => {
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = ["pricing"];
    return (
      requiredFields.every((field) => formData[field] !== "") &&
      notEmptyError1 === false
    );
  };

  console.log(listingData?.pricing);
  return (
    <div className="my-16 flex flex-col justify-center items-start w-[900px]">
      <h1 className="text-lg font-extrabold">Pricing</h1>
      <h3 className="text-[16px] my-5 font-semibold">
        Provide service pricing for your listing
      </h3>

      <div className="m-16">
        <div className="flex items-center">
          <h3 className="text-lg font-extrabold">Service Pricing</h3>
          <p className="ml-2 text-grey5 text-[12px]">
            (10% GST inclusive) <span className={`text-red10`}>*</span>
          </p>
        </div>

        <div className=" w-[250px] h-[120px]">
          <form>
            <div className="text-[15px] flex justify-between mt-10 mb-2">
              <p className="border-[1.5px] border-grey6 py-2 px-4 rounded-[12px] select-none font-semibold">
                AUD$
              </p>
              <input
                type="number"
                id="pricing"
                name="pricing"
                className="border-[1.5px] border-grey6 rounded-[12px] py-2 px-4 w-[150px]"
                placeholder={listingData?.pricing}
                onChange={handleChange3}
                value={formData.pricing}
                min={25}
              />
            </div>
            <p className=" text-right text-red5 text-[12px]">
              {formData.error2}
            </p>
          </form>
        </div>
      </div>

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

export default Step3;
