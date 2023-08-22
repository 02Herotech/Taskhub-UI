/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Newsletter = () => {
    return (
        <div className={`h-[300px]  flex justify-center flex-col items-center bg-cream`}>
            <div className={`text-center text-black my-10`}>
                <h1 className={`font-extrabold text-xl mt-[-50px]`}>SIGN UP FOR COMPANY NEWS</h1>
                <h5 className={`text-base`}>You will receive notifications about the latest company's new</h5>
            </div>

            <div className={`w-[500px] flex justify-center`}>
                <input type="email" placeholder="Enter your email address" className={`px-10 text-left py-2 text-base outline-none h-[40px]`} />
                <button className={`bg-purple hover:bg-purpleLight h-[40px] py-2 px-5 text-white text-[11px] `}>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Newsletter