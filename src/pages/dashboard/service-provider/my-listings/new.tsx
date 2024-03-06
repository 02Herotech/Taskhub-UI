const NewListing = () => {
  return <div>fhgjklmnbhju8</div>;
};

export default NewListing;

// import { useState } from "react";
// import { AiOutlineRight } from "react-icons/ai";

// import Step1 from "../../../../../components/ListingForms/Step1";
// import Step2 from "../../../../../components/ListingForms/Step2";
// import SPDashboardLayout from "../../../../../components/spdashboardLayout";

// interface FormState {
//   businessName: string;
//   serviceCategories: string;
//   subCategory: string;
//   serviceDescription: string;
//   availableDays: string[];
//   available: boolean;
//   startMinute: number;
//   startHour: number;
//   closeMinute: number;
//   closeHour: number;
//   openingTime: string;
//   closingTime: string;
// }

// interface Step1Props {
//   formData: FormState;
//   setFormData: React.Dispatch<React.SetStateAction<FormState>>;
//   nextStep: () => void;
//   onChange: (newData: Partial<FormState>) => void;
// }

// interface Step2Props {
//   formData: FormState;
//   setFormData: React.Dispatch<React.SetStateAction<FormState>>;
//   nextStep: () => void;
//   prevStep: () => void;
//   onChange: (newData: Partial<FormState>) => void;
// }

// const Listings = () => {
//   const [formData, setFormData] = useState<FormState>({
//     // Initialize form data with default values
//     businessName: "",
//     serviceCategories: "",
//     subCategory: "",
//     serviceDescription: "",
//     availableDays: [],
//     available: false,
//     startMinute: 0,
//     startHour: 0,
//     closeMinute: 0,
//     closeHour: 0,
//     openingTime: "",
//     closingTime: "",
//   });

//   const [currentStep, setCurrentStep] = useState(0);

//   const nextStep = () => setCurrentStep(currentStep + 1);
//   const prevStep = () => setCurrentStep(currentStep - 1);

//   // const handleFormDataChange = (newData: Partial<FormState>) => {
//   //   setFormData({ ...formData, ...newData });
//   // };

//   const handleFormDataChange = (newData: Partial<FormState>) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       ...newData,
//     }));
//   };

//   const step = [
//     {
//       id: "1",
//       name: "Business Name",
//     },
//     {
//       id: "2",
//       name: " Description & Avail",
//     },
//     { id: "3", name: "Pricing" },
//     { id: "4", name: "Location & Image" },
//   ];

//   return (
//     <SPDashboardLayout>
//       <div className="flex justify-around w-full">
//         {step.map((step, index) => (
//           <div
//             key={index}
//             className={`flex justify-center items-center text-[13px] font-bold w-full bg-[#9747FF40] border-b-[4px] border-[#969696] py-3 ${
//               index === currentStep && "border-[#FE9B07]"
//             }`}
//           >
//             <span
//               className={`bg-[#969696] rounded-[50%] py-1.5 px-3 ${
//                 index === currentStep && "bg-[#FE9B07]"
//               }`}
//             >
//               {step.id}
//             </span>
//             <span className="mx-3">{step.name}</span>
//             <span>
//               <AiOutlineRight />
//             </span>
//           </div>
//         ))}
//       </div>
//       <div>
//         {currentStep === 0 && (
//           <Step1
//             formData={formData}
//             nextStep={nextStep}
//             // setFormData={function (): void {
//             //   throw new Error("Function not implemented.");
//             // }}
//             setFormData={handleFormDataChange}
//           />
//         )}
//         {currentStep === 1 && (
//           <Step2
//             formData={formData}
//             nextStep={nextStep}
//             prevStep={prevStep}
//             setFormData={function (): void {
//               throw new Error("Function not implemented.");
//             }}
//           />
//         )}
//       </div>
//     </SPDashboardLayout>
//   );
// };

// export default Listings;
