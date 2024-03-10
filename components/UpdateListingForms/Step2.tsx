import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface FormState {
  serviceDescription: string;
  availableDays: string[];
  available: boolean;
  startMinute: string;
  startHour: string;
  closeMinute: string;
  closeHour: string;
  openingTime: string;
  closingTime: string;
}

interface Step2Props {
  formData: FormState;
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: any;
}

const Step2 = ({
  nextStep,
  prevStep,
  formData,
  handleChange,
  handleChange2,
  setFormData,
}: Step2Props) => {
  const [notEmptyError1, setNotEmptyError1] = useState(false);

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // To hand checked days

  const handleCheckBoxChange = (day: string) => {
    setFormData((prevState: { availableDays: string[] }) => ({
      ...prevState,
      availableDays: prevState.availableDays.includes(day)
        ? prevState.availableDays.filter(
            (checkedDay: string) => checkedDay !== day
          )
        : [...prevState.availableDays, day],
    }));
  };

  // Check if necessary inputs are filled for each step

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
                placeholder="I provide ..."
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
                  formData.available ? "bg-green5" : "bg-grey5"
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

                <div className="flex items-center w-[280px] justify-around ml-3">
                  <input
                    type="time"
                    className="p-2 border rounded-md"
                    id="openingTime"
                    name="openingTime"
                    onChange={handleChange2}
                    value={formData.openingTime}
                  />

                  <p>-</p>

                  <input
                    type="time"
                    className="p-2 border rounded-md"
                    id="closingTime"
                    name="closingTime"
                    onChange={handleChange2}
                    value={formData.closingTime}
                  />
                </div>
              </div>

              <div className="flex text-[12px] w-[185px] justify-between ml-[85px] text-grey4 mt-1">
                <p>Open</p>
                <p>Close</p>
              </div>

              <div className="flex items-center text-[15px] ml-5 mt-8">
                <p className="text-md font-semibold">DAYS:</p>

                <div className="flex items-center ml-3 space-x-4">
                  {daysOfWeek.map((day) => (
                    <label
                      key={day}
                      className={`flex items-center justify-center border-[1.5px] py-2 px-4 cursor-pointer rounded-lg font-semibold hover:bg-green2  border-grey5 ${
                        formData.availableDays.includes(day)
                          ? "bg-[rgba(20,120,47,255)] text-white"
                          : "bg-white text-grey5 border-grey5"
                      } transition-colors duration-200`}
                      onClick={() => handleCheckBoxChange(day)} // Handle click event on label
                    >
                      {day}
                    </label>
                  ))}
                </div>
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
