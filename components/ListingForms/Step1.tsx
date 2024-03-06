const Step1 = () => {
  return <div>jkjkdjk</div>;
};

export default Step1;

// import { useState } from "react";

// interface FormState {
//   businessName: string;
//   serviceCategories: string;
//   subCategory: string;
// }

// type Categories = {
//   [key: string]: {
//     name: string;
//     subcategories: string[];
//   };
// };

// // interface Step1Props {
// //   formData: FormState;
// //   setFormData: React.Dispatch<React.SetStateAction<FormState>>;
// //   nextStep: () => void;
// //   onChange: (newData: Partial<FormState>) => void;
// // }

// interface Step1Props {
//   formData: FormState;
//   setFormData: React.Dispatch<React.SetStateAction<FormState>>;
//   nextStep: () => void;
// }
// // const Step1 = ({ formData, setFormData, nextStep }: Step1Props) => {
// //   const [notEmptyError1, setNotEmptyError1] = useState(false);
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [selectedSubCategory, setSelectedSubCategory] = useState("");

// const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {
//   const [notEmptyError1, setNotEmptyError1] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSubCategory, setSelectedSubCategory] = useState("");

//   const categories: Categories = {
//     category1: {
//       name: "Home Services",
//       subcategories: [
//         "Cleaning",
//         "Plumbing",
//         "Electrician",
//         "Carpentry",
//         "Pest Control",
//         "Landscaping",
//         "HVAC (Heating, Ventilation, and Air Conditioning)",
//       ],
//     },
//     category2: {
//       name: "Personal Services",
//       subcategories: [
//         "Beauty & Wellness",
//         "Personal Training",
//         "Massage Therapy",
//         "Yoga & Meditation",
//         "Life Coaching",
//         "Pet Care & Grooming",
//       ],
//     },
//     category3: {
//       name: "Events & Entertainment",
//       subcategories: [
//         "Event Planning",
//         "Photography & Videography",
//         "DJ Services",
//         "Catering",
//         "Live Performers (Musicians, Magicians, etc.)",
//       ],
//     },
//     category4: {
//       name: "Education & Tutoring",
//       subcategories: [
//         "Academic Tutoring",
//         "Language Lessons",
//         "Music Lessons",
//         "Art Classes",
//         "Test Preparationol",
//       ],
//     },
//     category5: {
//       name: "Professional Services",
//       subcategories: [
//         "Legal Services",
//         "Financial Planning",
//         "Marketing & Design",
//         "IT Support & Consulting",
//         "Writing & Editing",
//       ],
//     },
//     category6: {
//       name: "Automotive  Services",
//       subcategories: [
//         "Auto Repair",
//         "Car Detailing",
//         "Towing Services",
//         "Tire Services",
//       ],
//     },
//     category7: {
//       name: "Health & Fitness",
//       subcategories: [
//         "Fitness Training",
//         "Nutrition Coaching",
//         "Physical Therapy",
//         "Holistic Healing",
//       ],
//     },
//     category8: {
//       name: "Technology & Electronics",
//       subcategories: [
//         "Computer Repair",
//         "Web Development",
//         "App Development",
//         "Graphic Design",
//       ],
//     },
//     category9: {
//       name: "Home Improvement",
//       subcategories: [
//         "Interior Design/ Decor",
//         "Renovation Services",
//         "Home Maintenance",
//         "Flooring & Tiling",
//       ],
//     },
//     category10: {
//       name: "Real Estate Services",
//       subcategories: [
//         "Property Management",
//         "Home Inspection",
//         "Real Estate Agent Services",
//       ],
//     },
//     category11: {
//       name: "Delivery & Logistics",
//       subcategories: [
//         "Courier Services",
//         "Grocery Delivery",
//         "Moving Services",
//       ],
//     },
//     category12: {
//       name: "Art & Creativity",
//       subcategories: [
//         "Custom Artwork",
//         "Artist",
//         "Music Instructor",
//         "Craftsmanship",
//         "Creative Workshops",
//       ],
//     },
//     category13: {
//       name: "Wedding Services",
//       subcategories: [
//         "Wedding Planning",
//         "Bridal Makeup & Styling",
//         "Wedding Photography",
//       ],
//     },
//     category14: {
//       name: "Childcare & Babysitting",
//       subcategories: ["Childcare Services", "Babysitting", "Nanny Services"],
//     },
//     category15: {
//       name: "Travel & Adventure",
//       subcategories: ["Tour Guides", "Adventure Excursions", "Travel Planning"],
//     },
//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     if (name === "postCode") {
//       const numericValue = parseInt(value, 10);

//       if (numericValue > 7999 || numericValue < 800) {
//         setFormData((prevData) => ({
//           ...prevData,
//           error1: "Must be btw 800-7999",
//         }));
//         setNotEmptyError1(true);
//       } else {
//         // Clear the error message if the post code is within the valid range
//         setFormData((prevData) => ({
//           ...prevData,
//           error1: "",
//         }));
//         setNotEmptyError1(false);
//       }
//     }
//   };

//   // To handle change of category

//   const handleCategoryChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     setSelectedSubCategory("");

//     // Update formData with the selected category
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       category,
//       subCategory: "",
//     }));
//   };

//   // To handle change of  subCategories

//   const handleSubCategoryChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const subCategory = event.target.value;
//     setSelectedSubCategory(subCategory);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       subCategory,
//     }));
//   };

//   return (
//     <div className="my-16 flex flex-col justify-center items-start w-[900px]">
//       <form>
//         <div className="w-full">
//           <h1 className="text-lg font-extrabold">Bussiness Name</h1>

//           <div className="my-20 max-w-[550px]">
//             <div className="flex justify-start text-[15px]">
//               <label
//                 htmlFor="businessName"
//                 className="font-semibold mt-2 mr-10 w-[120px]"
//               >
//                 Business Title <span className={`text-red10`}>*</span>
//               </label>

//               <textarea
//                 name="businessName"
//                 id="businessName"
//                 cols={50}
//                 rows={4}
//                 maxLength={50}
//                 className="resize-none border-grey4 border-[1.5px] rounded-lg p-2 shadow-lg"
//                 placeholder="What's your business name"
//                 required
//                 onChange={handleChange}
//                 value={formData.businessName}
//               />
//             </div>

//             <p className="text-[11px] text-grey4 flex justify-end mt-2">
//               (maximum of 50 characters)
//             </p>
//           </div>

//           <div className="flex justify-start text-[15px] my-20">
//             <label
//               htmlFor="serviceCategories"
//               className="font-semibold mt-2 mr-10 w-[120px]"
//             >
//               Category <span className={`text-red10 `}>*</span>
//             </label>

//             <select
//               name="serviceCategories"
//               id="serviceCategories"
//               className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
//               required
//               onChange={handleCategoryChange}
//               value={selectedCategory}
//             >
//               <option value="" className="text-grey4">
//                 --Select Category--
//               </option>
//               {Object.keys(categories).map((categoryKey) => (
//                 <option key={categoryKey} value={categoryKey}>
//                   {categories[categoryKey].name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {selectedCategory ? (
//             <div className="flex justify-start text-[15px] my-20">
//               <label
//                 htmlFor="subCategory"
//                 className="font-semibold mt-2 mr-10 w-[120px]"
//               >
//                 Sub Category <span className={`text-red10 `}>*</span>
//               </label>
//               <select
//                 name="subCategory"
//                 id="subCategory"
//                 value={selectedSubCategory}
//                 onChange={handleSubCategoryChange}
//                 className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
//                 required
//               >
//                 <option value="" disabled>
//                   --Select a Subcategory--
//                 </option>

//                 {categories[selectedCategory]?.subcategories.map(
//                   (subCategory, index) => (
//                     <option key={index} value={subCategory}>
//                       {subCategory}
//                     </option>
//                   )
//                 )}
//               </select>
//             </div>
//           ) : (
//             <div className="flex justify-start text-[15px] my-20">
//               <label
//                 htmlFor="subCategory"
//                 className="font-semibold mt-2 mr-10 w-[120px]"
//               >
//                 Sub Category <span className={`text-red10 `}>*</span>
//               </label>
//               <select
//                 name="subCategory"
//                 id="subCategory"
//                 value={selectedSubCategory}
//                 onChange={handleSubCategoryChange}
//                 className="border-grey4 border-[1.5px] rounded-lg p-2 w-[350px]"
//               >
//                 <option value="" disabled>
//                   --Select a Subcategory--
//                 </option>
//               </select>
//             </div>
//           )}
//         </div>
//       </form>
//       <div
//         className="bg-black py-3 px-6 rounded-lg text-white w-[200px] hover:text-[#FE9B07] cursor-pointer flex justify-center"
//         onClick={nextStep}
//       >
//         <p>Save & Continue</p>
//       </div>
//     </div>
//   );
// };

// export default Step1;
