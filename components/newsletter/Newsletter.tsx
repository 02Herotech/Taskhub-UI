/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'


const Newsletter = () => {
    const [email, setEmail] = useState('')


    const handleEmailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(e.target.value)
    }




    const isAllFieldsFilled = () => {
        const requiredField = ['email'];
        return requiredField.every(() => email !== '');
    }




    const onSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(email)

    }
    return (
        <div className={`flex justify-center flex-col space-y-5 `}>
            <div className={` text-purpleBase`}>
                <h1 className={`font-extrabold text-base`}>Subscribe to our Newsletter</h1>
            </div>

            <form className={`w-[320px] flex items-center space-x-2 `} onSubmit={onSubmit}>
                <input type="email" placeholder="Enter your email address" className={`px-5 text-left  text-[12px] outline-none h-[36px] bg-purple1 rounded-xl `} value={email} onChange={handleEmailChange} />
                <button className={`bg-purpleBase hover:bg-purple5 h-[35px] flex items-center justify-center text-white text-[30px] w-[50px] rounded-xl ${isAllFieldsFilled() ? '' : 'opacity-50'}`} type='submit'
                    disabled={!isAllFieldsFilled()} >
                    <MdKeyboardArrowRight />
                </button>
            </form>
        </div>
    )
}

export default Newsletter