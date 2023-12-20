
import React, { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from 'axios'

import google from "../../../public/google.png"
import { BsArrowLeftCircle } from 'react-icons/bs'

// import { setTimeout } from "timers/promises";


interface FormState {
  email: string;
  password: string;
  userType: 'customer' | 'service-provider';
  // rememberMe: boolean;
  // error: string;
}

const Login: React.FC<FormState> = () => {
  
  const[isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "customer"
    // rememberMe: false,
    // error: "",
  });
  
  const router = useRouter()

  const {data: session } = useSession();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = ["email", "password"];
    return requiredFields.every((field) => formData[field] !== "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("formdata", formData);
    setIsLoading(true)
    
    const emailValue = formData.email
    const passwordValue = formData.password
    
    try {
      const response = await axios.post('https://service-rppp.onrender.com/api/v1/auth/login', {
        emailAddress: emailValue,
        password: passwordValue
      })

      console.log("response:", response)

      console.log("status: ", response.status)
      
      if (response.status === 200) {
        
        const accessTokenValue = response.data.accessToken
        const userTypeRole = response.data.user.roles[0];
     

        if (
          (formData.userType === "customer" && userTypeRole === "CUSTOMER") ||
          (formData.userType === "service-provider" && userTypeRole === "SERVICE_PROVIDER")
        ) {

          axios.defaults.headers.common['Authorization'] = `Bearer ${accessTokenValue}`;

          await signIn("credentials", {
                redirect: false,
                email: formData.email,
                password: formData.password,
                userType: formData.userType
              });

          router.push(`/dashboard/${formData.userType}`);
        } else {
          setErrorMessage("Invalid User Role");
          setIsLoading(false);
        }
      }
             
    } catch (error: any) {
      console.log(error)
      setIsLoading(false) 
      setErrorMessage(error.response.data.message)
    }

    setTimeout(() => {
       setErrorMessage("");
     }, 3000);
  }
      
  
  return (
    <div className={` w-full`}>
      <div className={`p-5 flex h-[80px] drop-shadow-md fixed z-50 w-full bg-white font-extrabold justify-center`}>
        <div className='w-[80em] flex justify-start'>
          <div className="">
              <Link href='/' className={`flex space-x-3 items-center`}>
                  <Image src={logo} width={50} height={40} alt='' className={`mt-[-10px]`} />
                  <h4 className={`text-sm font-extrabold `}>TaskHub</h4>
              </Link>
            </div>
        </div>
      </div>


      <div className={` flex font-bold min-h-screen flex-col m-auto pt-16 justify-center items-center`}>
        <div className={` pt-8 text-center`}>
            <div className={`text-lg font-extrabold w-full  `}>
              <h1>Login into your TaskHub account</h1>
            </div>

            <div className={`flex justify-center items-center font-[600] w-[330px]  mx-auto mt-2`}>
              <h5>Don't have an account?</h5>
              <Link href='/auth' className={`text-purpleBase flex justify-center items-center hover:text-[17px] w-[100px] h-[30px] ml-1`}>Create one</Link>
            </div>
        </div>


        <div className="w-[450px]">
          <form onSubmit={onSubmit} className={`space-y-3 p-5`}>

            <div className="flex justify-center items-center"> 
              <div className={`flex`}>
                <label htmlFor="customer" className={`font-bold text-[14px] px-2 my-1`}>
                  <input
                    type="radio"
                    id="customer"
                    name="userType"
                    value="customer"
                    checked={formData.userType === 'customer'}
                    onChange={handleChange}
                    className="mr-2"
                    />
                    Customer
                </label>
              </div>
              <div className={`flex`}>
                <label htmlFor="service-provider" className={`font-bold text-[14px] px-2 my-1`}>
                  <input
                    type="radio"
                    id="service-provider"
                    name="userType"
                    value="service-provider"
                    checked={formData.userType === 'service-provider'}
                    onChange={handleChange}
                    className="mr-2"
                    />
                    Service Provider
                </label>
              </div>
            </div>

            <div className={`flex flex-col `}>
              <label
                htmlFor="email"
                className={`font-bold text-[16px] px-2 my-1`}
              >
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
                autoComplete="email"
              />
            </div>



            <div className={`flex flex-col`}>
              <label htmlFor="password" className={`font-bold text-[16px] px-2 my-1`}>
                Password <span className={`text-red10`}>*</span>
              </label>
              <div className={`relative`}>
                <input 
                type={showPassword ? 'text' : 'password'} 
                id='password' 
                name='password' 
                placeholder='Enter your password' 
                className={`border-medium border-[1px] text-base text-black font-bold py-3 px-5 rounded-xl w-full`} 
                value={formData.password} 
                onChange={handleChange} 
                required
                autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-[0rem] pr-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <AiOutlineEye className="h-5 w-5 text-black" />
                  ) : (
                    <AiOutlineEyeInvisible className="h-5 w-5 text-black" />
                  )}
                </button>
              </div>
            </div>
                  
            {/* <div className={`flex text-[13px] items-center justify-start`}> */}
            <div >
                <label  className="flex justify-start items-center text-[13px]">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    value="rememberMe"
                    // checked={formData.userType === 'customer'}
                    // onChange={handleChange}
                    className="mr-2"
                    />
                    Remember me
                </label>
              </div>

            <div className={`flex justify-center items-center font-[600] w-[300px] text-[13px] mx-auto`}>
              <h5>Forgot your Password?</h5>
              <Link href='/auth/forget-password' className={`text-purpleBase flex justify-center items-center hover:text-[14px] w-[80px] h-[25px] ml-1`}>Reset here</Link>
            </div>

            <div className="flex text-[13px] justify-center items-center cursor-pointer">
              <button  className="flex justify-center items-center">
                <Image src={google} width={20} alt="Google Logo"/>
                <p className="ml-2">Login with Google</p>
              </button>
            </div>

            <div className={`flex justify-center items-center`}>
              <button
                type="submit"
                className={`w-full bg-purpleBase text-white py-2 px-4 rounded-md hover:bg-purple7 text-sm disabled:opacity-50`}
                disabled={!isAllFieldsFilled() || isLoading}
              >
                {!isLoading ? "Log in" : "Logging in..."}
              </button>
            </div>
            
            <div className="text-red4 text-[13px] text-center h-[20px] flex items-center justify-center">{errorMessage}</div>

          </form>
        </div>
        
        
        {/* <div className={`flex justify-center items-center h-[35px] w-[150px]`} >
        <Link href='/' className='text-base font-extrabold hover:scale-110'>
            <button className='flex justify-center items-center'><span className='mr-1'><BsArrowLeftCircle /></span>Back Home</button>
        </Link>
      </div> */}
      </div >

      
    </div >
  )
}

export default Login

