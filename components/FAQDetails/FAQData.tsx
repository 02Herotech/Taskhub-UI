/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import faqImg from '../../public/faqImg.png'
import Image from 'next/image'
import { revalia } from '@/styles/font'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import Link from 'next/link'
import { Button } from '../buttons/Button'

export interface FAQProps {
    question: string,
    answer: string,
    id: number
    className?: string
}

export const FAQData = [
    {
        question: 'How do I get started?',
        answer: 'TaskHub provides an online marketplace connecting two types of members service providers and customers.The customers who need to outsource tasks and For service providers who need to earn some money.',
        id: 1
    },

    {
        question: 'How does TaskHub work?',
        answer: 'How does TaskHub work',
        id: 2
    },

    {
        question: 'Who can create an account on TaskHub?',
        answer: ' Our sign up process is quick and easy it takes only 90seconds. You can sign up using your google account or email.Head Homepage to get started.',
        id: 3
    },

    {
        question: 'How do I create an account?',
        answer: 'How do I create an account.',
        id: 4
    },

    {
        question: "What information is needed for me to start?",
        answer: "You can start using TaskHub as soon as you sign up; however there are some things you be prompted to provide when you use certain features",
        id: 5
    },

    {
        question: 'Are they any rules to TaskHub?',
        answer: 'We have a set of Community Guidelines for our Customers and service providers, that you agree to when you create an account. These guidelines have been created in line with the Terms and Conditions, and are in place to help all members have a fair, enjoyable and safe experience on the platform.',
        id: 6
    },

    {
        question: 'Where can I go if I need help?',
        answer: 'We have a great range of handy articles on our Help Centre, with tones of information.',
        id: 7
    },

    {
        question: ' How fast can I get paid as a service provider?',
        answer: 'As soon as the service is completed',
        id: 8
    },

    {
        question: 'What are the dispute regulations in place?',
        answer: 'Visit the dispute page',
        id: 9
    },

    {
        question: 'Do you have a customer care number?',
        answer: 'Do you have a customer care number?',
        id: 10
    },

]

export const FAQlayout: React.FC<FAQProps> = ({ question, answer, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="min-h-[80px] flex flex-col  justify-center bg-white w-[600px] my-4 p-5 rounded-2xl ">
            <div className="flex  items-center  justify-between ">
                <div className={`font-extrabold text-[17px]`}>
                    <h3 >
                        {question}
                    </h3>
                </div>

                <div
                    className={`transition ease-in-out cursor-pointer text-md bg-black text-white rounded-2xl p-2 hover:bg-grey4 `}
                    onClick={toggleOpen}
                >
                    {isOpen ? <><SlArrowUp /></> : <><SlArrowDown /></>}
                </div>

            </div>
            <div className={`flex items-center w-[450px] text-justify`}>
                {isOpen && <p className={`my-2 text-[12px] font-normal ${className} flex`}>{answer}</p>}
            </div>

        </div>
    )
}

export const FAQLandingPage: React.FC = () => {
    const displayedFAQs = FAQData.slice(0, 4);

    return (
        <div className={`w-full  bg-purpleBase py-[150px] px-[60px]`}>
            <div className={`flex justify-center  flex-col text-white max-w-7xl mx-auto`}>
                <div className={`my-2 flex flex-col items-center text-center`}>
                    <h1 className={`text-xl font-[100] ${revalia.className}`}>
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <p className={` w-[650px]  font-normal mt-10 mb-[60px] text-base`}>
                        These section provides answers to common questions that visitors might have about the website, its products, services, policies, or any other relevant topics.
                    </p>
                </div>


                <div className={`flex flex-col  justify-center`}>
                    <div className={`flex items-center flex-col  justify-center`}>
                        <div className={`flex justify-around w-[700px]  bg-[#FECD83] p-3 flex-col font-normal space-y-5`}>
                            {displayedFAQs.map((item, id) => (
                                <div key={id} className={`bg-white flex rounded-lg justify-center p-2 text-black `}>
                                    <div className={`w-[600px] px-3`}>
                                        <FAQlayout question={item.question} answer={item.answer} id={0} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className={`ml-[250px] p-3 mt-10 font-normal  `}>
                        <Link href='/faq'>
                            <Button
                                btnValue='See more'
                                className=' border-[1px] w-[150px] h-[55px]  px-4 border-purpleBase   text-white font-extralight text-base hover:bg-yellow4 bg-yellow6'
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )   
}