/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import faqImg from '../../public/faqImg.png'
import Image from 'next/image'

export interface FAQProps {
    question: string,
    answer: string,
    id: number
    className?: string
}

export const FAQData = [
    {
        question: 'How does TaskHub work?',
        answer: 'TaskHub provides an online marketplace connecting two types of members service providers and customers.The customers who need to outsource tasks and For service providers who need to earn some money.',
        id: 1
    },

    {
        question: 'Who can create an account on TaskHub?',
        answer: ' Our sign up process is quick and easy it takes only 90seconds. You can sign up using your google account or email.Head Homepage to get started.',
        id: 2
    },

    {
        question: "What information is needed for me to start?",
        answer: "You can start using TaskHub as soon as you sign up; however there are some things you be prompted to provide when you use certain features",
        id: 3
    },

    {
        question: 'Are they any rules to TaskHub?',
        answer: 'We have a set of Community Guidelines for our Customers and service providers, that you agree to when you create an account. These guidelines have been created in line with the Terms and Conditions, and are in place to help all members have a fair, enjoyable and safe experience on the platform.',
        id: 4
    },

    {
        question: 'Where can I go if I need help?',
        answer: 'We have a great range of handy articles on our Help Centre, with tones of information.',
        id: 5
    },

    {
        question: ' How fast can I get paid as a service provider?',
        answer: 'As soon as the service is completed',
        id: 6
    },

    {
        question: 'What are the dispute regulations in place?',
        answer: 'Visit the dispute page',
        id: 7
    },

    {
        question: 'Do you have a customer care number?',
        answer: 'Do you have a customer care number?',
        id: 8
    },

]

export const FAQlayout: React.FC<FAQProps> = ({ question, answer, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" min-h-[50px] my-0 ">
            <div className="flex  items-center cursor-pointer w-full">
                <h3 className={`w-[320px]  mb-2 font-extrabold `}>
                    {question}

                </h3>
                <span
                    className={`flex transition-transform transform justify-items-end  ${isOpen ? 'rotate-0 justify-end' : '-rotate-180'}`}
                    onClick={toggleOpen}
                >
                    {isOpen ? <>&#x2212;</> : <>&#x2B;</>}
                </span>

            </div>
            {isOpen && <p className={`my-2 px-2 font-normal ${className}`}>{answer}</p>}
        </div>

    )
}

export const FAQLandingPage: React.FC = () => {
    return (
        <div className={`flex justify-around  py-[120px] px-[60px] bg-purpleLight text-white`}>
            <div className={`flex flex-col mx-10 justify-center`}>
                <div className={`my-3`}>
                    <h1 className={`text-xl font-bold w-[545px]`}>
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <p className={`w-[470px] font-normal mt-10 mb-[60px] text-base`}>
                        "Discover answers to common queries and gain valuable
                        insights through our comprehensive FAQs section.
                        Empower your understanding today!"
                    </p>
                </div>

                <div>
                    <Image src={faqImg} width={416} height={541} alt='' />
                </div>
            </div>

            <div className={`w-[355px] flex justify-around flex-col font-normal text-base`}>
                {FAQData.map((item, id) => (
                    <FAQlayout key={id} question={item.question} answer={item.answer} id={0} className={`w-[350px]`} />
                ))}
            </div>
        </div>
    )
}