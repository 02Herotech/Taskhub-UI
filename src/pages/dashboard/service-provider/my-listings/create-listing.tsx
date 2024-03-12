import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import SPDashboardLayout from "../../../../../components/spdashboardLayout";
import Step1 from "../../../../../components/ListingForms/Step1";
import Step2 from "../../../../../components/ListingForms/Step2";
import Step3 from "../../../../../components/ListingForms/Step3";
import Step4 from "../../../../../components/ListingForms/Step4";

interface FormState {
  businessName: string;
  serviceCategories: string;
  subCategory: string;
  serviceDescription: string;
  pricing: string;
  availableDays: string[];
  available: boolean;
  startMinute: string;
  startHour: string;
  closeMinute: string;
  closeHour: string;
  openingTime: string;
  closingTime: string;
  streetNumber: string;
  streetName: string;
  unitNumber: string;
  suburb: string;
  state: string;
  postCode: string;
  error1: string;
  error2: string;
  image1: File | undefined;
  image2: File | undefined;
  image3: File | undefined;
}

// Define the enum for available days
enum AvailableDays {
  MON = "MON",
  TUE = "TUE",
  WED = "WED",
  THU = "THU",
  FRI = "FRI",
  SAT = "SAT",
  SUN = "SUN",
}

const CreateListings = () => {
  const [formData, setFormData] = useState<FormState>({
    businessName: "",
    serviceCategories: "",
    subCategory: "",
    serviceDescription: "",
    pricing: "",
    availableDays: [],
    available: true,
    startMinute: "",
    startHour: "",
    closeMinute: "",
    closeHour: "",
    openingTime: "",
    closingTime: "",
    streetNumber: "",
    streetName: "",
    unitNumber: "",
    suburb: "",
    state: "",
    postCode: "",
    error1: "",
    error2: "",
    image1: undefined,
    image2: undefined,
    image3: undefined,
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [notEmptyError1, setNotEmptyError1] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [postCodeError, setPostCodeError] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  const route = useRouter();

  const step = [
    {
      id: "1",
      name: "Business Name",
    },
    {
      id: "2",
      name: " Description & Avail",
    },
    { id: "3", name: "Pricing" },
    { id: "4", name: "Location & Image" },
  ];

  //   To go to next step

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < step.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const previous = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  // To handle change

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To handle change of category

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedSubCategory("");

    // Update formData with the selected category
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      category,
      subCategory: "",
    }));
  };

  // To handle change of  subCategories

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const subCategory = event.target.value;
    setSelectedSubCategory(subCategory);

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      subCategory,
    }));
  };

  // To handle time change

  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "openingTime") {
      const [hour, minutes] = value.split(":");
      // Update the formData state with separated hours and minutes
      setFormData((prevFormData) => ({
        ...prevFormData,
        startHour: hour,
        startMinute: minutes,
      }));
    }

    if (name === "closingTime") {
      const [hour, minutes] = value.split(":");
      // Update the formData state with separated hours and minutes
      setFormData((prevFormData) => ({
        ...prevFormData,
        closeHour: hour,
        closeMinute: minutes,
      }));
    }

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To check if pricing is > 25

  const handleChange3 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "pricing") {
      const numericValue = parseInt(value, 10);

      if (numericValue < 25) {
        setFormData((prevData) => ({
          ...prevData,
          error2: "(Min of $25)",
        }));
        setNotEmptyError1(true);
      } else {
        // Clear the error message if the post code is within the valid range
        setFormData((prevData) => ({
          ...prevData,
          error2: "",
        }));
        setNotEmptyError1(false);
      }
    }

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To hanle step 4

  const handleChange4 = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "postCode") {
      const numericValue = parseInt(value, 10);

      if (numericValue > 7999 || numericValue < 800) {
        setFormData((prevData) => ({
          ...prevData,
          error1: "Must be btw 800-7999",
        }));
        setNotEmptyError1(true);
      } else {
        // Clear the error message if the post code is within the valid range
        setFormData((prevData) => ({
          ...prevData,
          error1: "",
        }));
        setNotEmptyError1(false);
      }
    }

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To handle images

  const handleImage1 = (e: any) => {
    setFormData((preData) => ({
      ...preData,
      image1: e.target.files[0],
    }));
    setImage1(true);
  };

  const handleImage2 = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      image2: e.target.files[0],
    }));
    setImage2(true);
  };

  const handleImage3 = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      image3: e.target.files[0],
    }));
    setImage3(true);
  };

  //   To reset the form

  const resetForm = () => {
    setFormData({
      businessName: "",
      serviceCategories: "",
      subCategory: "",
      serviceDescription: "",
      pricing: "",
      availableDays: [],
      available: true,
      startMinute: "",
      startHour: "",
      closeMinute: "",
      closeHour: "",
      openingTime: "",
      closingTime: "",
      streetNumber: "",
      streetName: "",
      unitNumber: "",
      suburb: "",
      state: "",
      postCode: "",
      error1: "",
      error2: "",
      image1: undefined,
      image2: undefined,
      image3: undefined,
    });
  };

  // To submit form

  const { data: session } = useSession();
  const userToken = session?.user?.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);

    console.log("formdata:", formData);

    // const availableDaysEnum: AvailableDays[] = formData.availableDays.map(
    //   (day: string) => AvailableDays[day as keyof typeof AvailableDays]
    // );

    const apiFormData = new FormData();
    apiFormData.append("businessName", formData.businessName);
    apiFormData.append("serviceCategory", selectedCategory);
    apiFormData.append("subCategory", selectedSubCategory);
    apiFormData.append("serviceDescription ", formData.serviceDescription);
    apiFormData.append("pricing", formData.pricing);

    // const availableDaysSet = new Set(
    //   formData.availableDays.map(
    //     (day) => AvailableDays[day as keyof typeof AvailableDays]
    //   )
    // );
    // apiFormData.append("availableDays", JSON.stringify([...availableDaysSet]));

    // const availableDaysArray = Array.from(formData.availableDays).map(
    //   (day) => AvailableDays[day as keyof typeof AvailableDays]
    // );
    // apiFormData.append("availableDays", JSON.stringify(availableDaysArray));

    // // Filter out null values from availableDays array
    // const filteredAvailableDays = formData.availableDays.filter(
    //   (day) => day !== null
    // );

    // // Convert the filtered array to a set of enums
    // const availableDaysSet = new Set(
    //   filteredAvailableDays.map(
    //     (day) => AvailableDays[day as keyof typeof AvailableDays]
    //   )
    // );

    // // Convert the set to an array and stringify it
    // apiFormData.append("availableDays", JSON.stringify([...availableDaysSet]));

    // Filter out null, empty, and undefined values from availableDays array
    const filteredAvailableDays = formData.availableDays.filter(
      (day) => day !== null && day !== undefined && day !== ""
    );

    // Check if there are any invalid values in the availableDays array
    const invalidValues = filteredAvailableDays.filter(
      (day) => !(day in AvailableDays)
    );
    if (invalidValues.length > 0) {
      console.error("Invalid values in availableDays:", invalidValues);
      // Handle the error appropriately, such as displaying a message to the user
    }

    // Convert the filtered array to a set of enums
    const availableDaysSet = new Set(
      filteredAvailableDays.map(
        (day) => AvailableDays[day as keyof typeof AvailableDays]
      )
    );

    // Convert the set to an array and stringify it
    apiFormData.append("availableDays", JSON.stringify([...availableDaysSet]));
    // apiFormData.append("availableDays", JSON.stringify(formData.availableDays));
    apiFormData.append("available", formData.available.toString());
    apiFormData.append("startHour", formData.startHour);
    apiFormData.append("closeMinute", formData.closeMinute);
    apiFormData.append("closeHour", formData.closeHour);
    apiFormData.append("startMinute", formData.startMinute);
    apiFormData.append("streetNumber", formData.streetNumber);
    apiFormData.append("streetName", formData.streetName);
    apiFormData.append("suburb", formData.suburb);
    apiFormData.append("state", formData.state);
    apiFormData.append("postCode", formData.postCode);
    apiFormData.append("unitNumber", formData.unitNumber);
    formData.image1 && apiFormData.append("image1", formData.image1);
    formData.image2 && apiFormData.append("image2", formData.image2);
    formData.image3 && apiFormData.append("image3", formData.image3);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}listing/create-listing`,
        apiFormData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        // setIsLoading(false);
        setIsSuccessful(true);

        setTimeout(() => {
          route.push("/dashboard/service-provider/my-listings");
        }, 2000);
      }
      resetForm();
    } catch (error) {
      console.log(error);
      setErrMsg("Error creating listing");

      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SPDashboardLayout>
      <div className="flex justify-around w-full">
        {step.map((step, index) => (
          <div
            key={index}
            className={`flex justify-center items-center text-[13px] font-bold w-full bg-[#9747FF40] border-b-[4px] border-[#969696] py-3 ${
              index === currentStep && "border-[#FE9B07]"
            }`}
          >
            <span
              className={`bg-[#969696] rounded-[50%] py-1.5 px-3 ${
                index === currentStep && "bg-[#FE9B07]"
              }`}
            >
              {step.id}
            </span>
            <span className="mx-3">{step.name}</span>
            <span>
              <AiOutlineRight />
            </span>
          </div>
        ))}
      </div>

      <div>
        {currentStep === 0 && (
          <Step1
            nextStep={next}
            formData={formData}
            handleChange={handleChange}
            handleCategoryChange={handleCategoryChange}
            handleSubCategoryChange={handleSubCategoryChange}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        )}

        {currentStep === 1 && (
          <Step2
            nextStep={next}
            prevStep={previous}
            formData={formData}
            handleChange={handleChange}
            handleChange2={handleChange2}
            setFormData={setFormData}
          />
        )}

        {currentStep === 2 && (
          <Step3
            nextStep={next}
            prevStep={previous}
            handleChange3={handleChange3}
            setNotEmptyError1={setNotEmptyError1}
            formData={formData}
            notEmptyError1={notEmptyError1}
          />
        )}

        {currentStep === 3 && (
          <Step4
            handleChange4b={handleChange4}
            prevStep={previous}
            handleChange4={handleChange4}
            formData={formData}
            handleImage1={handleImage1}
            handleImage2={handleImage2}
            handleImage3={handleImage3}
            handleSubmit={handleSubmit}
            // notEmptyError1={notEmptyError1}
            isSuccessful={isSuccessful}
            errMsg={errMsg}
            isLoading={isLoading}
            image1={image1}
            image2={image2}
            image3={image3}
          />
        )}
      </div>
    </SPDashboardLayout>
  );
};

export default CreateListings;
