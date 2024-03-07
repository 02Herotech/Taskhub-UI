/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
// import { useRouter } from 'next/dist/client/router'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logoImg from "../../../public/logo.png";
import { BackButton } from "../../../components/buttons/Button";
import { useCustomerSignUpMutation } from "@/redux/features/auth/api";
import router from "next/router";
import flag from "../../../public/flag.jpg";
import { BsArrowLeftCircle } from "react-icons/bs";

interface FormState {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
  error1: string;
  error2: string;
}

const CustomerSignup: React.FC<FormState> = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
    error1: "",
    error2: "",
  });

  // Function to reset form fields
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
      error1: "",
      error2: "",
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      const passwordPattern =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (value && !passwordPattern.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          error1:
            "Must be min. of 8 characters and contain at least one uppercase letter, one special character and one number",
        }));
      } else {
        // Clear the error message if the password matches the pattern or is empty
        setFormData((prevData) => ({
          ...prevData,
          error1: "",
        }));
      }
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setFormData((prevData) => ({
          ...prevData,
          error2: "Password should match",
        }));
      } else {
        // Clear the error message if the confirm password matches the password
        setFormData((prevData) => ({
          ...prevData,
          error2: "",
        }));
      }
    }

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePhoneNumberKeyDown = (e: any) => {
    // Check if the pressed key is a number (0-9) or Backspace/Delete key
    const isNumericKey = /^[0-9]$/.test(e.key);
    const isBackspaceOrDelete = ["Backspace", "Delete"].includes(e.key);

    // If the pressed key is not numeric and not Backspace/Delete, prevent the input
    if (!isNumericKey && !isBackspaceOrDelete) {
      e.preventDefault();
    }
  };

  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "firstName",
      "lastName",
      // "address",
      "phoneNumber",
      "email",
      "password",
      "confirmPassword",
    ];
    return (
      requiredFields.every((field) => formData[field] !== "") &&
      formData.agreement
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [signUpApiCall, { data, isLoading }] = useCustomerSignUpMutation();

  useEffect(() => {
    if (data) {
      console.log("data", data);
      router.push("/auth/signup-confirmation");
    }
  }, [data]);

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (isLoading) {
      // Prevent submission if an API call is already in progress
      return;
    }

    setIsSubmitting(true); // Set submitting status to true

    const formattedPhoneNumber = formData.phoneNumber.startsWith("+61")
      ? formData.phoneNumber
      : "+61" + formData.phoneNumber;

    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formattedPhoneNumber,
      emailAddress: formData.email,
      password: formData.password,
    };

    console.log(body);

    signUpApiCall(body)
      .unwrap() // Unwrap the result to handle possible errors
      .then(() => {
        setIsSubmitting(false); // Reset submitting status
        // resetForm(); // Reset form fields after successful submission

        // Clear the error message after 5 seconds
        setTimeout(() => {
          setSignupError(null);
        }, 8000);
      })

      .catch((error) => {
        // Reset submitting status on error
        setIsSubmitting(false);
        console.error("Error submitting:", error);

        // Set the error message in the state
        setSignupError(error.data.message);

        // Clear the error message after 5 seconds
        setTimeout(() => {
          setSignupError(null);
        }, 5000);

        resetForm();
      });
  };

  return (
    <div className={` w-full overflow-x-hidden`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em]">
          <Link href="/" className={`flex space-x-3 items-center`}>
            <Image
              src={logoImg}
              width={50}
              height={40}
              alt=""
              className={`mt-[-10px]`}
            />
            <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
          </Link>
        </div>
      </div>

      <div
        className={`flex justify-center mt-[120px] items-center flex-col min-h-screen mb-16`}
      >
        <div className={` p-3 space-y-5 text-center mb-2`}>
          <div className={`text-lg font-extrabold w-full  `}>
            <h1>Create your TaskHub Customer account</h1>
          </div>

          <div
            className={`flex justify-center items-center font-[600] w-[300px]  mx-auto`}
          >
            <h5>Already have an account?</h5>
            <Link
              href="/auth/login"
              className={`text-purpleBase flex justify-center items-center hover:text-[17px] w-[60px] h-[30px] ml-1`}
            >
              Log in
            </Link>
          </div>
        </div>

        <div className="mb-10 w-[500px] mt-10">
          <form action="" onSubmit={onSubmit}>
            <div className={`space-y-4 mb-10`}>
              <div className={`flex justify-between`}>
                <div className={`flex flex-col basis-[48%]`}>
                  <label
                    htmlFor="firstName"
                    className={`font-extrabold text-[16px]  my-3`}
                  >
                    First Name <span className={`text-red10`}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    id="firstName"
                    name="firstName"
                    className={` border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={`flex flex-col basis-[48%]`}>
                  <label
                    htmlFor="lastName"
                    className={`font-bold text-[16px]  my-3`}
                  >
                    Last Name <span className={`text-red10`}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    id="lastName"
                    name="lastName"
                    className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl`}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* <div className={`flex flex-col`}>
                                <label
                                    htmlFor="address"
                                    className={`font-bold text-[16px] my-3`}
                                >
                                    Address <span className={`text-red10`}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter your address"
                                    className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div> */}

              <div className={`flex flex-col`}>
                <label
                  htmlFor="phoneNumber"
                  className={`font-bold text-[16px] my-3`}
                >
                  Phone Number <span className={`text-red10`}>*</span>
                </label>
                <div className={`flex items-center justify-around`}>
                  <h4
                    className={`flex border-medium border-[1px] text-base text-black font-bold px-5 py-3 rounded-xl`}
                  >
                    <Image
                      src={flag}
                      width={30}
                      alt="AUS Flag"
                      className="mr-1"
                    />
                    +61
                  </h4>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-[78%]`}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onKeyDown={handlePhoneNumberKeyDown}
                    required
                    maxLength={9}
                    minLength={9}
                  />
                </div>
              </div>

              <div className={`flex flex-col`}>
                <label htmlFor="email" className={`font-bold text-[16px] my-3`}>
                  Email <span className={`text-red10`}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email-address"
                  id="email"
                  name="email"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="username"
                />
              </div>

              <div className={`flex flex-col`}>
                <label
                  htmlFor="password"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  Password <span className={`text-red10`}>*</span>
                  <p className={`text-red10 p-2  my-0 py-0 text-[10px]`}>
                    {formData.error1}
                  </p>
                </label>
                <div className={`relative`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  >
                    {showPassword ? (
                      <AiOutlineEye className="h-5 w-5 text-black" />
                    ) : (
                      <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                    )}
                  </button>
                </div>
              </div>

              <div className={`flex flex-col`}>
                <label
                  htmlFor="password"
                  className={`font-bold text-[16px] my-3 flex  items-center w-[500px] h-[30px] `}
                >
                  Confirm Password <span className={`text-red10`}>*</span>
                  <p className={`text-red10 p-2  my-0 py-0 text-[10px]`}>
                    {formData.error2}
                  </p>
                </label>
                <div className={`relative`}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter your password"
                    className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEye className="h-5 w-5 text-black" />
                    ) : (
                      <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                    )}
                  </button>
                </div>
              </div>

              <div className={`space-x-2 flex`}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  required
                />
                <label htmlFor="agreement" className={`font-bold text-[12px]`}>
                  I agree to all
                  <Link
                    href="/terms-and-condition"
                    className={`text-purpleBase hover:underline`}
                  >
                    {" "}
                    Terms of service{" "}
                  </Link>{" "}
                  and
                  <Link
                    href="/privacy"
                    className={`text-purpleBase hover:underline `}
                  >
                    {" "}
                    Privacy
                  </Link>
                </label>
              </div>
            </div>

            <div className={`flex justify-center items-center`}>
              <button
                type="submit"
                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5  ${
                  isAllFieldsFilled() ? "" : "opacity-50"
                }`}
                disabled={!isAllFieldsFilled() || isLoading}
              >
                {isLoading ? "Creating..." : "Create Account"}
              </button>
            </div>
            {signupError && (
              <div className="text-red10 mt-4 text-center mb-2">
                {/*{alert(signupError)}*/}
                {signupError}
              </div>
            )}
          </form>
        </div>

        <div className={`flex justify-center items-center h-[35px] w-[150px]`}>
          <Link href="/" className="text-base font-extrabold hover:scale-110">
            <button className="flex justify-center items-center">
              <span className="mr-1">
                <BsArrowLeftCircle />
              </span>
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
