import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";

import CustomerDashboardLayout from "../../../../../components/customerdashboardLayout";
import Head from "next/head";

interface FormState {
  taskServiceName: string;
  taskDescription: string;
  category: string;
  subCategory: string;
  userAddress: string;
  customerBudget: string | number;
  taskImage: File | undefined;
  taskDate: Date | undefined;
}

interface Category {
  name: string;
  subcategories: string[];
}

// interface Categories {
//   [key: string]: Category;
// }

type Categories = {
  [key: string]: {
    name: string;
    subcategories: string[];
  };
};

const PostRequest = () => {
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [resMsg, setResMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const route = useRouter();

  const taskDateRef = useRef<HTMLInputElement>(null);
  const taskImageRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    taskServiceName: "",
    taskDescription: "",
    category: "",
    subCategory: "",
    userAddress: "",
    customerBudget: "",
    taskImage: undefined,
    taskDate: undefined,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To handle input type file

  const handleImage = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      taskImage: e.target.files[0],
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

  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "taskServiceName",
      "taskDescription",
      "category",
      "subCategory",
      "userAddress",
      "customerBudget",
      "taskDate",
    ];
    return requiredFields.every((field) => {
      const value = formData[field];
      return (
        typeof value === "number" ||
        (typeof value === "string" && value.trim() !== "")
      );
    });
  };

  //   To reset the form

  const resetForm = () => {
    setFormData({
      taskServiceName: "",
      taskDescription: "",
      category: "",
      subCategory: "",
      userAddress: "",
      customerBudget: "",
      taskDate: undefined,
      taskImage: undefined,
    });

    // Reset date input
    if (taskDateRef.current) {
      taskDateRef.current.value = "";
    }

    // Reset file input
    if (taskImageRef.current) {
      taskImageRef.current.value = "";
    }
  };

  // To submit form

  const { data: session } = useSession();
  const userToken = session?.user?.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);

    const apiFormData = new FormData();
    apiFormData.append("taskServiceName", formData.taskServiceName);
    apiFormData.append("taskDescription", formData.taskDescription);
    apiFormData.append("category", selectedCategory);
    apiFormData.append("subCategory", selectedSubCategory);
    apiFormData.append("userAddress", formData.userAddress);
    apiFormData.append("customerBudget", formData.customerBudget);
    apiFormData.append("taskImage", formData.taskImage!);
    apiFormData.append("taskDate", formData.taskDate!);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}task/post`,
        apiFormData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      if (response.status === 200) {
        setResMsg(response.data.message);

        setTimeout(() => {
          route.push("/dashboard/customer/my-tasks");
        }, 900);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.status !== 200) {
        setErrMsg("Error trying to task. Please try again");
      }
    } finally {
      resetForm();
      setIsLoading(false);
      setTimeout(() => {
        setResMsg("");
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <CustomerDashboardLayout>
      <div>
        <Head>
          <title>TaskHub | Post Task</title>
        </Head>
      </div>
      <div
        className={`mt-16 flex flex-col justify-center items-start w-[900px]`}
      >
        <h1 className="text-lg font-extrabold border-2 border-grey2 rounded-md p-2">
          POST A REQUEST
        </h1>

        <div className="my-8 flex flex-col justify-center items-start w-[800px] p-8">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col my-5  space-y-2">
              <p className="text-md font-extrabold ">Request Details</p>
              <span className="text-[12px] font-extrabold text-red5">
                (All fields are required)
              </span>
            </div>

            <input
              type="text"
              placeholder="Title"
              id="taskServiceName"
              name="taskServiceName"
              value={formData.taskServiceName}
              className="p-2 border-2 border-grey2 rounded-md w-[300px] my-5"
              required
              onChange={handleChange}
            />

            <div className="w-[500px] my-5">
              <textarea
                placeholder="Description"
                cols={10}
                rows={5}
                id="taskDescription"
                name="taskDescription"
                value={formData.taskDescription}
                className=" resize-none p-2 border-2 border-grey2 rounded-md w-full "
                required
                onChange={handleChange}
              />
              <p className="text-[13px] flex justify-end text-grey4">
                (maximum of 50 characters)
              </p>
            </div>

            <div className=" my-5">
              <select
                name="category"
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="p-2 border-2 border-grey2 rounded-md w-[500px]"
              >
                <option value="" disabled>
                  --Select a Category--
                </option>
                {Object.keys(categories).map((categoryKey) => (
                  <option key={categoryKey} value={categoryKey}>
                    {categories[categoryKey].name}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory ? (
              <div className=" my-5">
                <select
                  name="subCategory"
                  id="subCategory"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  className="p-2 border-2 border-grey2 rounded-md w-[500px]"
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
              <div className=" my-5">
                <select
                  name="subCategory"
                  id="subCategory"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  className="p-2 border-2 border-grey2 rounded-md w-[500px]"
                >
                  <option value="" disabled>
                    --Select a Subcategory--
                  </option>
                </select>
              </div>
            )}

            <input
              type="text"
              placeholder="Address"
              id="userAddress"
              name="userAddress"
              value={formData.userAddress}
              className="p-2 border-2 border-grey2 rounded-md w-[500px] my-5"
              required
              onChange={handleChange}
            />

            <div className=" flex relative p-2 border-2 border-grey2 rounded-md w-[500px] my-5 focus:border-black ">
              <p className="abosulte left-2 mr-2">$</p>
              <input
                type="number"
                placeholder="Customer's Budget"
                id="customerBudget"
                name="customerBudget"
                value={formData.customerBudget}
                className="border-none outline-none w-full"
                required
                onChange={handleChange}
              />
            </div>

            <input
              type="file"
              placeholder="jpg,png,pdf format"
              id="taskImage"
              name="taskImage"
              className="p-2 border-2 border-grey2 rounded-md w-[300px] my-5"
              required
              onChange={handleImage}
              ref={taskImageRef}
              accept="image/*"
            />

            <input
              type="date"
              placeholder="date"
              id="taskDate"
              name="taskDate"
              className="p-2 border-2 border-grey2 rounded-md w-[500px] my-5"
              required
              onChange={handleChange}
              ref={taskDateRef}
            />

            <button
              type="submit"
              className={` bg-[#34a853] text-white w-[180px] py-4 px-6 my-8 rounded-md hover:bg-[#46694f] text-sm disabled:opacity-50`}
              disabled={!isAllFieldsFilled() || isLoading}
            >
              {!isLoading ? "Save Changes" : "Saving..."}
            </button>
          </form>

          <p className="my-2 text-md">{resMsg}</p>
          <p className="my-2 text-[15px] text-red5">{errMsg}</p>
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default PostRequest;
