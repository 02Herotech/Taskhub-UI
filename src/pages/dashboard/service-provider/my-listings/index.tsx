import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { useSession } from "next-auth/react";

// import SPDashboardLayout from "../../../../../components/spdashboardLayout";
import SPDashboardLayout from "../../../../../components/spdashboardLayout";
import { json } from "stream/consumers";

interface FormState {
  businessName: string;
  serviceCategories: string;
  subCategory: string;
  serviceDescription: string;
  pricing: number;
  availableDays: string[];
  available: boolean;
  startMinute: number;
  startHour: number;
  closeMinute: number;
  closeHour: number;
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

type Categories = {
  [key: string]: {
    name: string;
    subcategories: string[];
  };
};

interface Category {
  name: string;
  subcategories: string[];
}

const Listings = () => {
  const step = [
    {
      id: "1",
      name: "Business Name",
      fields: ["businessName", "serviceCategories"],
    },
    {
      id: "2",
      name: " Description & Avail",
      fields: ["serviceDescription", "serviceCategories"],
    },
    { id: "3", name: "Pricing" },
    { id: "4", name: "Location & Image" },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [notEmptyError1, setNotEmptyError1] = useState(false);

  const categories: Categories = {
    category1: {
      name: "Home Services",
      subcategories: [
        "Cleaning",
        "Plumbing",
        "Electrician",
        "Carpentry",
        "Pest Control",
        "Landscaping",
        "HVAC (Heating, Ventilation, and Air Conditioning)",
      ],
    },
    category2: {
      name: "Personal Services",
      subcategories: [
        "Beauty & Wellness",
        "Personal Training",
        "Massage Therapy",
        "Yoga & Meditation",
        "Life Coaching",
        "Pet Care & Grooming",
      ],
    },
    category3: {
      name: "Events & Entertainment",
      subcategories: [
        "Event Planning",
        "Photography & Videography",
        "DJ Services",
        "Catering",
        "Live Performers (Musicians, Magicians, etc.)",
      ],
    },
    category4: {
      name: "Education & Tutoring",
      subcategories: [
        "Academic Tutoring",
        "Language Lessons",
        "Music Lessons",
        "Art Classes",
        "Test Preparationol",
      ],
    },
    category5: {
      name: "Professional Services",
      subcategories: [
        "Legal Services",
        "Financial Planning",
        "Marketing & Design",
        "IT Support & Consulting",
        "Writing & Editing",
      ],
    },
    category6: {
      name: "Automotive  Services",
      subcategories: [
        "Auto Repair",
        "Car Detailing",
        "Towing Services",
        "Tire Services",
      ],
    },
    category7: {
      name: "Health & Fitness",
      subcategories: [
        "Fitness Training",
        "Nutrition Coaching",
        "Physical Therapy",
        "Holistic Healing",
      ],
    },
    category8: {
      name: "Technology & Electronics",
      subcategories: [
        "Computer Repair",
        "Web Development",
        "App Development",
        "Graphic Design",
      ],
    },
    category9: {
      name: "Home Improvement",
      subcategories: [
        "Interior Design/ Decor",
        "Renovation Services",
        "Home Maintenance",
        "Flooring & Tiling",
      ],
    },
    category10: {
      name: "Real Estate Services",
      subcategories: [
        "Property Management",
        "Home Inspection",
        "Real Estate Agent Services",
      ],
    },
    category11: {
      name: "Delivery & Logistics",
      subcategories: [
        "Courier Services",
        "Grocery Delivery",
        "Moving Services",
      ],
    },
    category12: {
      name: "Art & Creativity",
      subcategories: [
        "Custom Artwork",
        "Artist",
        "Music Instructor",
        "Craftsmanship",
        "Creative Workshops",
      ],
    },
    category13: {
      name: "Wedding Services",
      subcategories: [
        "Wedding Planning",
        "Bridal Makeup & Styling",
        "Wedding Photography",
      ],
    },
    category14: {
      name: "Childcare & Babysitting",
      subcategories: ["Childcare Services", "Babysitting", "Nanny Services"],
    },
    category15: {
      name: "Travel & Adventure",
      subcategories: ["Tour Guides", "Adventure Excursions", "Travel Planning"],
    },
  };

  const [formData, setFormData] = useState({
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

  const handleChange = (e: any) => {
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

    if (name === "openingTime") {
      const [hour, minutes] = value.split(":");
      // Update the formData state with separated hours and minutes
      setFormData((prevFormData) => ({
        ...prevFormData,
        startHour: hour,
        startMinute: minutes,
        // [`${name}Hours`]: hours,
        // [`${name}Minutes`]: minutes,
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

  // To handle images

  const handleImage1 = (e: any) => {
    setFormData((preData) => ({
      ...preData,
      image1: e.target.files[0],
    }));
  };

  const handleImage2 = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      image2: e.target.files[0],
    }));
  };

  const handleImage3 = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      image3: e.target.files[0],
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
    setFormData((prevFormData) => ({
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      subCategory,
    }));
  };

  // Check if necessary inputs are filled for each step

  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "businessName",
      "serviceCategories",
      "subCategory",
    ];
    return requiredFields.every((field) => formData[field] !== "");
  };

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

  // Check box for days of the week

  const daysOfWeek = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  const [checkedDays, setCheckedDays] = useState<string[]>([]);

  // Function to handle checkbox change

  const handleCheckBoxChange = (day: string) => {
    if (checkedDays.includes(day)) {
      // If the day is already checked, remove it from the array
      setCheckedDays(checkedDays.filter((checkedDay) => checkedDay !== day));
    } else {
      // If the day is not checked, add it to the array
      setCheckedDays([...checkedDays, day]);
    }
  };

  // To submit form

  const { data: session } = useSession();
  const userToken = session?.user.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("formdata:", formData);

    const apiFormData = new FormData();
    apiFormData.append("businessName", formData.businessName);
    apiFormData.append("serviceCategory", selectedCategory);
    apiFormData.append("subCategory", selectedSubCategory);
    apiFormData.append("serviceDescription ", formData.serviceDescription);
    apiFormData.append("pricing", formData.pricing);

    // const checkedDaysString = checkedDays.join(",");
    apiFormData.append("availableDays", JSON.stringify(checkedDays));
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
    apiFormData.append("image1", formData.image1!);
    apiFormData.append("image2", formData.image2!);
    apiFormData.append("image3", formData.image3!);

    console.log("apiform:", apiFormData);
    console.log("checkedday:", checkedDays);

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
    } catch (error) {
      console.log(error);
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

      <div className="my-16 flex flex-col justify-center items-start w-[900px]">
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div className="w-full">
              <h1 className="text-lg font-extrabold">Bussiness Name</h1>

              <div className="my-20 max-w-[550px]">
                <div className="flex justify-start text-[15px]">
                  <label
                    htmlFor="businessName"
                    className="font-semibold mt-2 mr-10 w-[120px]"
                  >
                    Business Title <span className={`text-red10`}>*</span>
                  </label>

                  <textarea
                    name="businessName"
                    id="businessName"
                    cols={50}
                    rows={4}
                    maxLength={50}
                    className="resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg"
                    placeholder="What's your business name"
                    required
                    onChange={handleChange}
                    value={formData.businessName}
                  />
                </div>

                <p className="text-[11px] text-grey4 flex justify-end mt-2">
                  (maximum of 50 characters)
                </p>
              </div>

              <div className="flex justify-start text-[15px] my-20">
                <label
                  htmlFor="serviceCategories"
                  className="font-semibold mt-2 mr-10 w-[120px]"
                >
                  Category <span className={`text-red10 `}>*</span>
                </label>

                <select
                  name="serviceCategories"
                  id="serviceCategories"
                  className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
                  required
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="" className="text-grey4">
                    --Select Category--
                  </option>
                  {Object.keys(categories).map((categoryKey) => (
                    <option key={categoryKey} value={categoryKey}>
                      {categories[categoryKey].name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCategory ? (
                <div className="flex justify-start text-[15px] my-20">
                  <label
                    htmlFor="subCategory"
                    className="font-semibold mt-2 mr-10 w-[120px]"
                  >
                    Sub Category <span className={`text-red10 `}>*</span>
                  </label>
                  <select
                    name="subCategory"
                    id="subCategory"
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
                    required
                  >
                    <option value="" disabled>
                      --Select a Subcategory--
                    </option>

                    {categories[selectedCategory]?.subcategories.map(
                      (subCategory, index) => (
                        <option key={index} value={subCategory}>
                          {subCategory}
                        </option>
                      )
                    )}
                  </select>
                </div>
              ) : (
                <div className="flex justify-start text-[15px] my-20">
                  <label
                    htmlFor="subCategory"
                    className="font-semibold mt-2 mr-10 w-[120px]"
                  >
                    Sub Category <span className={`text-red10 `}>*</span>
                  </label>
                  <select
                    name="subCategory"
                    id="subCategory"
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
                  >
                    <option value="" disabled>
                      --Select a Subcategory--
                    </option>
                  </select>
                </div>
              )}
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h1 className="text-lg font-extrabold">
                Description & Availability
              </h1>

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
                    required
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

                {formData.available && (
                  <div>
                    <p className="font-semibold ml-5">
                      Choose your business working Days and Hour
                    </p>
                    <div className="flex items-center text-[15px] ml-5 mt-8">
                      <p className="text-md font-semibold">TIME:</p>

                      <div className="flex items-center w-[280px] justify-around ml-3">
                        <input
                          type="time"
                          className=" p-2 border rounded-md"
                          id="openingTime"
                          name="openingTime"
                          onChange={handleChange}
                          value={formData.openingTime}
                        />

                        <p>-</p>

                        <input
                          type="time"
                          className=" p-2 border rounded-md"
                          id="closingTime"
                          name="closingTime"
                          onChange={handleChange}
                          value={formData.closingTime}
                        />
                      </div>
                    </div>

                    <div className="flex text-[12px]  w-[185px] justify-between ml-[85px] text-grey4 mt-1">
                      <p>Open</p>
                      <p>Close</p>
                    </div>

                    <div className="flex items-center text-[15px] ml-5 mt-8">
                      <p className="text-md font-semibold">DAYS:</p>

                      <div className="flex items-center ml-3 space-x-4">
                        {daysOfWeek.map((day) => (
                          <label
                            key={day}
                            className={`flex items-center justify-center border-[1.5px] py-2 px-4 cursor-pointer rounded-lg font-semibold hover:bg-green2 ${
                              checkedDays.includes(day)
                                ? "bg-[rgba(20,120,47,255)] text-white"
                                : "bg-white  text-grey5  border-grey5"
                            } transition-colors duration-200`}
                          >
                            <input
                              type="checkbox"
                              checked={checkedDays.includes(day)}
                              onChange={() => handleCheckBoxChange(day)}
                              className="hidden"
                              value={checkedDays}
                            />
                            {day}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
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
                  <div className="text-[15px] flex justify-between mt-10 mb-2">
                    <p className="border-[1.5px] border-grey6 py-2 px-4 rounded-[12px] select-none font-semibold">
                      AUD$
                    </p>

                    <input
                      type="number"
                      id="pricing"
                      name="pricing"
                      className="border-[1.5px] border-grey6 rounded-[12px] py-2 px-4 w-[150px]"
                      placeholder="0.00"
                      onChange={handleChange}
                      value={formData.pricing}
                      min={25}
                      required
                    />
                  </div>

                  <p className=" text-right text-grey5 text-[12px]">
                    {formData.error2}
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h1 className="text-lg font-extrabold">LOCATION</h1>

              <div className="my-14">
                <h3 className="text-md font-extrabold mb-8">
                  Kindly Provide detailed location of your Business
                </h3>

                <div className="flex items-center">
                  <div className="flex flex-col text-[15px] ">
                    <label
                      htmlFor="streetNumber"
                      className="font-semibold mb-4"
                    >
                      Street Number <span className={`text-red10`}>*</span>
                    </label>

                    <input
                      type="number"
                      name="streetNumber"
                      id="streetNumber"
                      className="border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg ml-3 w-[100px]"
                      onChange={handleChange}
                      value={formData.streetNumber}
                      required
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
                      onChange={handleChange}
                      value={formData.streetName}
                      required
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
                    onChange={handleChange}
                    value={formData.unitNumber}
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
                      onChange={handleChange}
                      value={formData.suburb}
                      required
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
                      onChange={handleChange}
                      value={formData.state}
                      required
                    >
                      <option value="" disabled>
                        --Select State--
                      </option>
                      <option value="Western Australia">
                        Western Australia
                      </option>
                      <option value="Northern Territory">
                        Northern Territory
                      </option>
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
                    onChange={handleChange}
                    value={formData.postCode}
                    required
                    min={800}
                    max={7999}
                  />
                </div>
              </div>

              <div className="my-16">
                <h3 className="text-md font-extrabold mb-5">BUSINESS IMAGE</h3>
                <p className="text-[13px] font-semibold">
                  Images (up to 3) <br />
                  Get noticed with visual examples of your services
                </p>

                <div className=" flex flex-col text-[15px] mt-10 justify-between space-y-10">
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
                  />

                  <input
                    type="file"
                    name="image3"
                    id="image3"
                    // className="file:h-[100px] file:w-[100px] file:bg-transparent file:rounded-lg file:border-[1.5px] file:border-grey4 w-[100px]"
                    onChange={handleImage3}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          )}
          <div
            className={`w-[800px] my-28 flex  ${
              currentStep === 0 ? `justify-end` : `justify-between`
            }`}
          >
            {currentStep > 0 && (
              <div
                className="flex items-center hover:text-[#FE9B07] cursor-pointer"
                onClick={previous}
              >
                <span className="mr-2">
                  <FaArrowLeft />
                </span>
                Back
              </div>
            )}

            {currentStep === 3 ? (
              <button
                type="submit"
                className="bg-black py-3 px-6 rounded-lg text-white w-[150px]  hover:text-[#FE9B07] cursor-pointer"
              >
                Submit
              </button>
            ) : (
              <div
                className="bg-black py-3 px-6 rounded-lg text-white w-[200px] hover:text-[#FE9B07] cursor-pointer flex justify-center"
                onClick={next}
              >
                <p>Save & Continue</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </SPDashboardLayout>
  );
};

export default Listings;
