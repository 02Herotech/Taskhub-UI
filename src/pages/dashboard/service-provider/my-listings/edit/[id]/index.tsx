import { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import SPDashboardLayout from "../../../../../../../components/spdashboardLayout";
import Step1 from "../../../../../../../components/EditListingForms/Step1";
import Step2 from "../../../../../../../components/EditListingForms/Step2";
import Step3 from "../../../../../../../components/EditListingForms/Step3";
import Step4 from "../../../../../../../components/EditListingForms/Step4";

interface FormState {
  businessName: string;
  serviceDescription: string;
  pricing: string;
  available: boolean;
  streetNumber: string;
  streetName: string;
  suburb: string;
  state: string;
  postCode: string;
  unitNumber: string;
  error1: string;
  error2: string;
  image1: File | undefined;
  image2: File | undefined;
  image3: File | undefined;
}

interface listingData {
  id: number;
  businessName: string;
  serviceCategory: string;
  subCategory: string;
  serviceDescription: string;
  serviceName: string;
  pricing: number;
  availableDays: [string];
  available: boolean;
  startHour: number;
  closeMinute: number;
  closeHour: number;
  startMinute: number;
  availableFrom: [];
  availableTo: [];
  userAddress: {
    id: number;
    streetNumber: string;
    streetName: string;
    unitNumber: string;
    suburb: string;
    state: string;
    postCode: string;
  };
  deleted: boolean;
  stripeId: string;
  businessPictures: ["string"];
}

const EditListing = () => {
  const [listingData, setListingData] = useState<listingData | null>(null);

  const [formData, setFormData] = useState<FormState>({
    businessName: "",
    serviceDescription: "",
    pricing: "",
    available: true,
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

  const [notEmptyError1, setNotEmptyError1] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errMsg, setErrMsg] = useState("");

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

  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  const userToken = session?.user?.accessToken;
  const listingId = parseInt(id as string, 10);
  console.log("id value: ", listingId);

  const handleFetchListingDetails = async () => {
    try {
      setIsLoading(true);

      if (!userToken || !id) {
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}listing/by-id/${listingId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log("listingID: ", response);
      if (response.status === 200) {
        setListingData(response.data);
        console.log("listingData:", listingData);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error fetching listing");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchListingDetails();
  }, [userToken, id]);

  // To handle change

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
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

  // To handle step 4

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
      serviceDescription: "",
      pricing: "",
      available: true,
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);
    console.log(formData);

    const apiFormData = new FormData();
    apiFormData.append("businessName", formData.businessName);
    apiFormData.append("serviceDescription", formData.serviceDescription);
    apiFormData.append("pricing", formData.pricing);
    apiFormData.append("available", formData.available.toString());
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
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}listing/update-listing/${listingId}`,
        apiFormData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("update listing:", response);
      if (response.status === 200) {
        resetForm();
        router.push(`/dashboard/service-provider/my-listings/${listingId}`);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMsg("Error updating listing");
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
            listingData={listingData}
          />
        )}

        {currentStep === 1 && (
          <Step2
            nextStep={next}
            prevStep={previous}
            formData={formData}
            handleChange={handleChange}
            listingData={listingData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 2 && (
          <Step3
            nextStep={next}
            prevStep={previous}
            handleChange3={handleChange3}
            formData={formData}
            notEmptyError1={notEmptyError1}
            listingData={listingData}
          />
        )}

        {currentStep === 3 && (
          <Step4
            handleChange4b={handleChange4}
            prevStep={previous}
            handleChange4={handleChange4}
            formData={formData}
            handleSubmit={handleSubmit}
            errMsg={errMsg}
            isLoading={isLoading}
            listingData={listingData}
            handleImage1={handleImage1}
            handleImage2={handleImage2}
            handleImage3={handleImage3}
            image1={image1}
            image2={image2}
            image3={image3}
          />
        )}
      </div>
    </SPDashboardLayout>
  );
};

export default EditListing;
