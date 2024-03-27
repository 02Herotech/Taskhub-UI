import Image from "next/image";

import flag from "../../public/australia_flag.png";

interface FormState {
  address: string;
  budget: string;
}

interface booking2Props {
  next: () => void;
  previous: () => void;
  formData: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Booking2 = ({
  next,
  handleChange,
  formData,
  previous,
}: booking2Props) => {
  //   To check all required fields
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = ["address", "budget"];
    return requiredFields.every((field) => formData[field] !== "");
  };

  console.log(formData);

  return (
    <div>
      <div className="w-full p-8 shadow-md border-grey4 flex flex-col justify-center space-y-8">
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold">Where do you need this done?</h3>
          <div className="flex items-center">
            <div className="bg-grey3 rounded-md px-2 py-3">
              <Image src={flag} width={30} alt="flag" />
            </div>
            <input
              name="address"
              type="text"
              className="w-full ml-4 bg-grey2 text text-[14px] text-grey6 p-2 rounded-md focus:border-red5 focus:outline-none"
              placeholder="Enter full address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="budget" className="font-semibold">
            Budget:
          </label>
          <div className="flex items-center  bg-grey2 text text-[14px] text-grey6 p-2 rounded-md space-x-2">
            <p className="font-bold">$</p>
            <input
              name="budget"
              type="number"
              className="w-full focus:border-red5 focus:outline-none  bg-grey2 "
              placeholder="What's your budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-5  justify-between">
        <button
          onClick={previous}
          className=" px-4 cursor-pointer hover:bg-purpleHover  text-white font-bold bg-purpleBase rounded-lg py-3 disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={next}
          disabled={!isAllFieldsFilled()}
          className=" px-4 cursor-pointer hover:bg-purpleHover  text-white font-bold bg-purpleBase rounded-lg py-3 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Booking2;
