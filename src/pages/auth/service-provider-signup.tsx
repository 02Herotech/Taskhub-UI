import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useServiceProviderSignUpMutation } from "@/redux/features/auth/api";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import router from "next/router";

import logoImg from "../../../public/newlogo.png";
import flag from "../../../public/flag.jpg";

interface FormState {
  firstName: string;
  lastName: string;
  // address: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
  error1: string;
  error2: string;
  idNUmber: string;
}

const ServiceProviderSignup: React.FC<FormState> = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // address: '',
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
    error1: "",
    error2: "",
    idNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signUpError, setSignUpError] = useState<string | null>("");

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
    const requiredFields: (keyof typeof formData)[] = [
      "firstName",
      "lastName",
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

  const [signUpApiCall, { data: signUpData, isLoading: isSignUpLoading }] =
    useServiceProviderSignUpMutation();

  useEffect(() => {
    if (signUpData) {
      console.log("data", signUpData);
      router.push("/auth/signup-confirmation");
    }
  }, [signUpData]);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    // console.log("Button Triggered")

    if (isSignUpLoading) {
      return;
    }

    setIsSubmitting(true);

    const formattedPhoneNumber = formData.phoneNumber.startsWith("+61")
      ? formData.phoneNumber
      : "+61" + formData.phoneNumber;

    try {
      const user = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formattedPhoneNumber,
        emailAddress: formData.email,
        password: formData.password,
        idNumber: formData.idNumber,
      };

      signUpApiCall(user)
        .unwrap()
        .then(() => {
          setIsSubmitting(false);

          // Clear the error message after 5 seconds
          setTimeout(() => {
            setSignUpError(null);
          }, 3000);
        })

        // .catch((error) => console.error('rejected', error));
        // .then (res.message)
        .catch((error) => {
          setIsSubmitting(false);

          console.error("Error submitting:", error);

          // Set the error message in the state
          setSignUpError(error.data.message);

          // Clear the error message after 5 seconds
          setTimeout(() => {
            setSignUpError(null);
          }, 5000);
        });
    } catch (error) {
      console.log("Signup error:", error);

      // Handle error here
    }
  };

  return (
    <div className={` justify-between w-full overflow-x-hidden mb-16`}>
      <div
        className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}
      >
        <div className="w-[80em] flex justify-start">
          <Link href="/" className={`flex items-center px-2 py-1`}>
            <Image src={logoImg} width={120} alt="" />
          </Link>
        </div>
      </div>

      <div
        className={`flex justify-center min-h-screen mt-[120px] items-center flex-col`}
      >
        <div className={` p-3 space-y-5 text-center mb-2`}>
          <div className={`text-lg font-extrabold w-full  `}>
            <h1>Create your TaskHub Service Provider account</h1>
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

        <div className="mb-10 mt-7 w-[500px]">
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
                                <label htmlFor="address" className={`font-bold text-[16px] my-3`}>
                                    Address <span className={`text-red10`}>*</span>
                                </label>
                                <input type="text" id='address' name='address' placeholder='Enter your address' className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} value={formData.address} onChange={handleChange} required
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

              <div className={`flex flex-col`}>
                <label
                  htmlFor="identification"
                  className={`font-bold text-[16px] my-3`}
                >
                  MEANS OF IDENTIFICATION
                </label>
                <select
                  name="identification"
                  id="identification"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-3 rounded-xl w-full bg-contain`}
                >
                  <option value="none">None</option>
                  <option value="drivers_license">
                    National Driver's License
                  </option>
                  <option value="national_id">National ID</option>
                  <option value="voters_card">Voter's Card</option>
                  <option value="passport">International Passport</option>
                </select>
              </div>

              <div className={`flex flex-col`}>
                <label htmlFor="idNumber" className={`font-bold text-[16px]`}>
                  Valid ID NUMBER
                </label>
                <input
                  type="text"
                  placeholder="Enter the ID number"
                  name="idNumber"
                  id="idNumber"
                  className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full my-3`}
                  value={formData.idNumber}
                  onChange={handleChange}
                />
              </div>

              <div className={`space-x-2 flex items-center`}>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  required
                />
                <label htmlFor="agreement" className={`font-bold text-[12px]`}>
                  I agree to all{" "}
                  <Link
                    href="/terms-and-condition"
                    className={`text-purpleBase hover:underline`}
                  >
                    Terms of service{" "}
                  </Link>{" "}
                  and{" "}
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
                disabled={!isAllFieldsFilled() || isSignUpLoading}
              >
                {isSignUpLoading ? "Creating..." : "Create Account"}
              </button>
            </div>
            {signUpError && (
              <div className="text-red10 mt-4 text-center mb-2">
                {signUpError}
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

export default ServiceProviderSignup;
