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
  availableFrom: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  availableTo: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
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

// {
//   "businessName": "string",
//   "serviceDescription": "string",
//   "pricing": 0,
//   "available": true,
//   "streetNumber": "string",
//   "streetName": "string",
//   "suburb": "string",
//   "state": "string",
//   "postCode": "string",
//   "unitNumber": "string"
// }

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
      setListingData(response.data);
      console.log("listingDatat:", listingData);
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
    });
  };

  // To submit form

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);
    console.log(formData);

    const businessNameValue = formData.businessName;
    const serviceDescriptionValue = formData.serviceDescription;
    const pricingValue = formData.pricing;
    const availableValue = formData.available;
    const streetNumberValue = formData.streetNumber;
    const streetNameValue = formData.streetName;
    const suburbValue = formData.suburb;
    const stateValue = formData.state;
    const postCodeValue = formData.postCode;
    const unitNumberValue = formData.unitNumber;

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}listing/update-listing/${listingId}`,
        {
          businessName: businessNameValue,
          serviceDescription: serviceDescriptionValue,
          pricing: pricingValue,
          available: availableValue,
          streetNumber: streetNumberValue,
          streetName: streetNameValue,
          suburb: suburbValue,
          state: stateValue,
          postCode: postCodeValue,
          unitNumber: unitNumberValue,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
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
            isSuccessful={isSuccessful}
            errMsg={errMsg}
            isLoading={isLoading}
            listingData={listingData}
          />
        )}
      </div>
    </SPDashboardLayout>
  );
};

export default EditListing;
