/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
// import { useRouter } from 'next/dist/client/router'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logoImg from "../../../public/logo.png";
import { BackButton } from "../../../components/buttons/Button";
import { useSignUpMutation } from "@/redux/features/auth/api";

interface FormState {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
    error: string;
}

const customerSignup: React.FC<FormState> = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreement: false,
        error: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    error:
                        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.",
                }));
            } else {
                // Clear the error message if the password matches the pattern or is empty
                setFormData((prevData) => ({
                    ...prevData,
                    error: "",
                }));
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.password) {
                setFormData((prevData) => ({
                    ...prevData,
                    error: "Password should match",
                }));
            } else {
                // Clear the error message if the confirm password matches the password
                setFormData((prevData) => ({
                    ...prevData,
                    error: "",
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
            "address",
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

    const [signUpApiCall, { data, isLoading }] = useSignUpMutation();

    useEffect(() => {
        if (data) {
            console.log("data", data);

            // router.push("/auth/authLogin");
        }
    }, [data]);

    const onSubmit = async (event: any) => {
        event.preventDefault();

        const formattedPhoneNumber = formData.phoneNumber.startsWith("+61")
            ? formData.phoneNumber
            : "+61" + formData.phoneNumber;
        const body = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formattedPhoneNumber, // Use the formatted phone number here
            emailAddress: formData.email,
            password: formData.password,
        };

        signUpApiCall(body);
    };

    return (
        <div className={` h-screen w-full overflow-x-hidden`}>
            <div
                className={`p-10 flex h-[100px] drop-shadow-md fixed z-[9999] w-full bg-white   font-extrabold`}
            >
                <Link href="/" className={`flex space-x-3 items-center`}>
                    <Image
                        src={logoImg}
                        width={61}
                        height={55}
                        alt=""
                        className={`mt-[-10px]`}
                    />
                    <h4 className={`text-lg font-extrabold `}>TaskHub</h4>
                </Link>
            </div>

            <div className={`flex justify-center mt-[120px] items-center flex-col `}>
                <div className={` p-3 space-y-5 text-center mb-2`}>
                    <div className={`text-lg font-bold w-full  `}>
                        <h1>Create your your Customer account</h1>
                    </div>

                    <div className={`flex justify-around font-[600] w-[300px]  mx-auto`}>
                        <h5>Already have an account?</h5>
                        <Link
                            href="/auth/login"
                            className={`text-purpleBase hover:text-[17px] `}
                        >
                            Log in
                        </Link>
                    </div>
                </div>

                <div className="mb-10 w-[500px]">
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

                            <div className={`flex flex-col`}>
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
                            </div>

                            <div className={`flex flex-col`}>
                                <label
                                    htmlFor="phoneNumber"
                                    className={`font-bold text-[16px] my-3`}
                                >
                                    Phone Number <span className={`text-red10`}>*</span>
                                </label>
                                <div className={`flex items-center justify-around`}>
                                    <h4
                                        className={`border-medium border-[1px] text-base text-black font-bold p-3 rounded-xl`}
                                    >
                                        AU +61
                                    </h4>
                                    <input
                                        type="text"
                                        placeholder="Enter phone number"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className={`border-medium border-[1px] text-base text-black font-bold py-3 px-10 tracking-[0.3rem] rounded-xl  w-5/6`}
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
                                    className={`font-bold text-[16px] my-3`}
                                >
                                    Password <span className={`text-red10`}>*</span>
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
                            <div className={`text-red10 p-2 my-0 py-0 text-[10px]`}>
                                <p>{formData.error}</p>
                            </div>

                            <div className={`flex flex-col`}>
                                <label
                                    htmlFor="confirmPassword"
                                    className={`font-bold text-[16px] my-3`}
                                >
                                    Confirm your Password <span className={`text-red10`}>*</span>
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

                            <div className={`space-x-2`}>
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name="agreement"
                                    id="agreement"
                                    required
                                />
                                <label htmlFor="agreement" className={`font-bold text-base`}>
                                    I agree to all{" "}
                                    <Link
                                        href="/termsAndConditions"
                                        className={`text-purpleBase text-base hover:underline`}
                                    >
                                        Terms of service{" "}
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className={`text-purpleBase text-base hover:underline `}
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
                                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple5  ${isAllFieldsFilled() ? "" : "cursor-not-allowed opacity-50"
                                    }`}
                                disabled={!isAllFieldsFilled()}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default customerSignup;