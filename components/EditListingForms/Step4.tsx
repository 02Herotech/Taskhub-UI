import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";

interface FormState {
  streetNumber: string;
  streetName: string;
  unitNumber: string;
  suburb: string;
  state: string;
  postCode: string;
  error1: string;
  image1: File | undefined;
  image2: File | undefined;
  image3: File | undefined;
}

interface Step4Props {
  prevStep: () => void;
  handleChange4: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange4b: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formData: FormState;
  handleSubmit: (e: { preventDefault: () => void }) => void;
  errMsg: any;
  isLoading: any;
  listingData: any;
  handleImage1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImage2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImage3: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image1: any;
  image2: any;
  image3: any;
}

const Step4 = ({
  prevStep,
  handleChange4,
  handleChange4b,
  formData,
  handleSubmit,
  errMsg,
  isLoading,
  listingData,
  image1,
  image2,
  image3,
  handleImage1,
  handleImage2,
  handleImage3,
}: Step4Props) => {
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "streetNumber",
      "streetName",
      "suburb",
      "state",
      "postCode",
      "image1",
      "image2",
      "image3",
    ];
    return requiredFields.every((field) => formData[field] !== "");
  };

  return (
    <div className="my-16 flex flex-col justify-center items-start w-[900px]">
      <div className="flex flex-col justify-center items-start w-[900px]">
        <h1 className="text-lg font-extrabold">LOCATION</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-14">
            <h3 className="text-md font-extrabold mb-8">
              Kindly Provide detailed location of your Business
            </h3>
            <div className="flex items-center">
              <div className="flex flex-col text-[15px] ">
                <label htmlFor="streetNumber" className="font-semibold mb-4">
                  Street Number <span className={`text-red10`}>*</span>
                </label>

                <input
                  type="number"
                  name="streetNumber"
                  id="streetNumber"
                  className="border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]"
                  onChange={handleChange4}
                  value={formData.streetNumber}
                  placeholder={listingData?.userAddress?.streetNumber}
                />
              </div>

              <div className="flex flex-col text-[15px] ml-10 ">
                <label htmlFor="streetName" className="font-semibold mb-4">
                  Street Name <span className={`text-red10`}>*</span>
                </label>

                <input
                  type="text"
                  name="streetName"
                  id="streetName"
                  className="border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[400px]"
                  onChange={handleChange4}
                  value={formData.streetName}
                  placeholder={listingData?.userAddress?.streetName}
                />
              </div>
            </div>
            <div className="flex flex-col text-[15px] my-10">
              <label htmlFor="unitNumber" className="font-semibold mb-4">
                Unit Number
              </label>

              <input
                type="number"
                name="unitNumber"
                id="unitNumber"
                className="border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]"
                onChange={handleChange4}
                value={formData.unitNumber}
                placeholder={listingData?.userAddress?.unitNumber}
              />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col text-[15px] ">
                <label htmlFor="suburb" className="font-semibold mb-4">
                  Suburb <span className={`text-red10`}>*</span>
                </label>

                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  className="border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[200px]"
                  onChange={handleChange4}
                  value={formData.suburb}
                  placeholder={listingData?.userAddress?.suburb}
                />
              </div>

              <div className="flex flex-col text-[15px] ml-10 ">
                <label htmlFor="state" className="font-semibold mb-4">
                  State <span className={`text-red10`}>*</span>
                </label>

                <select
                  name="state"
                  id="state"
                  className="border-grey4 border-[1.5px] rounded-lg ml-3 p-2 w-[350px]"
                  onChange={handleChange4b}
                  value={formData.state}
                >
                  <option disabled>{listingData?.userAddress?.state}</option>
                  <option value="Western Australia">Western Australia</option>
                  <option value="Northern Territory">Northern Territory</option>
                  <option value="South Australia">South Australia</option>
                  <option value="Queensland">Queensland</option>
                  <option value="New South Wales">New South Wales</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Tasmania">Tasmania</option>
                  <option value="Australian Capital Territory">
                    Australian Capital Territory
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col text-[15px] my-10 ">
              <div className="flex">
                <label htmlFor="postCode" className="font-semibold mb-4">
                  Post Code <span className={`text-red10`}>*</span>
                </label>
                <p
                  className={`text-red10 p-2  my-0 py-0 text-[10px] w-[230px] text-justify font-bold`}
                >
                  {formData.error1}
                </p>
              </div>

              <input
                type="number"
                id="postCode"
                name="postCode"
                className="border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[200px]"
                onChange={handleChange4}
                value={formData.postCode}
                min={800}
                max={7999}
                placeholder={listingData?.userAddress?.postCode}
              />
            </div>
          </div>

          <div className="my-16">
            <h3 className="text-md font-extrabold mb-5">
              BUSINESS IMAGE <span className={`text-red10`}>*</span>
            </h3>
            <div className="text-[13px] font-semibold flex flex-col space-y-8 ">
              <div className="flex flex-col space-y-3">
                <p> Images (up to 3)</p>
                <p>Get noticed with visual examples of your services</p>
              </div>

              <div>
                <input
                  type="file"
                  name="image1"
                  id="image1"
                  // className="file:h-[100px] file:w-[200px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[200px]"
                  onChange={handleImage1}
                  accept="image/*"
                />

                <input
                  type="file"
                  name="image2"
                  id="image2"
                  // className="file:h-[100px] file:w-[200px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[200px]"
                  onChange={handleImage2}
                  accept="image/*"
                  className="ml-10"
                />

                <input
                  type="file"
                  name="image3"
                  id="image3"
                  // className="file:h-[100px] file:w-[100px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[100px]"
                  onChange={handleImage3}
                  accept="image/*"
                  className="ml-7"
                />
              </div>

              <div className="flex space-x-3">
                {listingData?.businessPictures.map(
                  (
                    image: string | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <div
                      key={index}
                      className="w-[300px] h-[200px] border-2 rounded-xl border-grey3"
                    >
                      <img
                        src={image}
                        alt="Service Images"
                        width={300}
                        height={200}
                        className="rounded-xl bg-cover h-[200px] w[300px]"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className=" flex flex-col text-[15px] mt-10 justify-between space-y-10"></div>
          </div>

          {errMsg && (
            <div className="flex justify-center">
              <p className="text-red5 text-[13px]">{errMsg}</p>
            </div>
          )}

          <div className="flex w-[850px] justify-between">
            <button
              className="flex items-center hover:text-[#FE9B07] cursor-pointer disabled:opacity-50"
              onClick={prevStep}
              disabled={isLoading}
              type="button"
            >
              <span className="mr-2">
                <FaArrowLeft />
              </span>
              Back
            </button>
            <button
              type="submit"
              className={` py-3 bg-purpleBase px-6 rounded-lg text-white w-[200px] hover:bg-purpleHover cursor-pointer flex justify-center disabled:opacity-50`}
              disabled={
                !isAllFieldsFilled() ||
                isLoading ||
                !image1 ||
                !image2 ||
                !image3
              }
            >
              {isLoading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step4;
