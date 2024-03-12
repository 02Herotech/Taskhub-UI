import { Dispatch, SetStateAction, useState } from "react";

interface FormState {
  businessName: string;
}

interface Step1Props {
  nextStep: () => void;
  formData: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  listingData: any;
}

const Step1 = ({
  nextStep,
  formData,
  handleChange,
  listingData,
}: Step1Props) => {
  const [notEmptyError1, setNotEmptyError1] = useState(false);

  // Assuming you have a mapping of category IDs to their names

  const categoryNames = {
    CATEGORY1: "HOME SERVICES",
    CATEGORY2: "PERSONAL SERVICES",
    CATEGORY3: "EDUCATION & TUTORING",
    CATEGORY4: "PROFESSIONAL SERVICES",
    CATEGORY5: "AUTOMOTIVE SERVICES",
    CATEGORY6: "HEALTH & FITNESS",
    CATEGORY7: "TECHNOLOGY & ELECTRONICS",
    CATEGORY8: "HOME IMPROVEMENT",
    CATEGORY9: "REAL ESTATE SERVICES",
    CATEGORY10: "DELIVERY & LOGISTICS",
    CATEGORY11: "ART & CREATIVITY",
    CATEGORY12: "WEDDING SERVICES",
    CATEGORY13: "CHILDCARE & BABYSITTING",
    CATEGORY14: "TRAVEL & ADVENTURE",
  };

  // Function to retrieve the category name based on the ID
  // const getCategoryName = (categoryId: string | number) => {
  //   // Check if the category ID exists in the mapping
  //   if (categoryNames[categoryId]) {
  //     return categoryNames[categoryId];
  //   } else {
  //     return "Unknown Category"; // Default value if category ID is not found
  //   }
  // };

  // Check if necessary inputs are filled for each step

  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = ["businessName"];

    // Check if businessName is filled

    return requiredFields.every((field) => formData[field] !== "");
  };

  return (
    <div className="my-16 flex flex-col justify-center items-start w-[900px]">
      <div className="w-full">
        <h1 className="text-lg font-extrabold">Bussiness Name</h1>
        <form>
          <div className="my-20 max-w-[550px]">
            <div className="flex justify-start text-[15px]">
              <label
                htmlFor="businessName"
                className="font-semibold mt-2 mr-10 w-[120px]"
              >
                Business Title <span className={`text-red10`}>*</span>
              </label>

              <input
                name="businessName"
                id="businessName"
                maxLength={50}
                className="resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg w-[350px]"
                placeholder={listingData?.businessName}
                required
                onChange={handleChange}
                value={formData.businessName}
              />
            </div>
          </div>
        </form>

        <div className="flex justify-start text-[15px] my-20">
          <label
            htmlFor="serviceCategories"
            className="font-semibold mt-2 mr-10 w-[120px]"
          >
            Category
          </label>

          <input
            name="serviceCategories"
            id="serviceCategories"
            className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]  focus:border-grey4 focus:outline-none text-grey4"
            required
            value={
              categoryNames[
                listingData?.serviceCategory as keyof typeof categoryNames
              ] || ""
            }
            readOnly
          />
        </div>

        <div className="flex justify-start text-[15px] my-20">
          <label
            htmlFor="subCategory"
            className="font-semibold mt-2 mr-10 w-[120px]"
          >
            Sub Category
          </label>
          <input
            name="subCategory"
            id="subCategory"
            value={listingData?.subCategory}
            readOnly
            className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]  focus:border-grey4 focus:outline-none text-grey4"
          />
        </div>
      </div>

      <div className="flex justify-end w-full">
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

export default Step1;
