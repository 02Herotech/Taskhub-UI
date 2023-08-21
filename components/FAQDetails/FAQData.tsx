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
        question: 'What is CourseConnekt?',
        answer: 'CourseConnekt is a platform that provides a wide range of courses to students. It is a platform that connects students with the best courses available online.',
        id: 1
    },

    {
        question: 'How do I enroll in a course?',
        answer: 'To enroll in a course by clicking on the Apply button on the course page. You will be redirected to the course page where you can start the course.',
        id: 2
    },

    {
        question: "What if I don't like the course?",
        answer: "Please don't hesitate to make the decision to leave the course whenever you feel it's appropriate. Furthermore, if you're interested in pursuing another course, you're welcome to do so.",
        id: 3
    },

    {
        question: 'For enquires and complaints, how can I contact you?',
        answer: 'You can contact us through the Contact Us page. We will get back to you as soon as possible.',
        id: 4
    },

    {
        question: 'Whats the duration of the course?',
        answer: 'The duration of the course depends on the course you choose and how fast you complete the course but the minumum duration is 6 month.',
        id: 5
    },

    {
        question: ' Will I get a certificate after completing the course?',
        answer: 'No, we do not provide any certificate after completing the course.',
        id: 6
    }

]

export const FAQlayout: React.FC<FAQProps> = ({ question, answer, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="py-5 min-h-[50px] my-0">
            <div className="flex justify-between items-center cursor-pointer px-2">
                <h3 className={`w-[320px] mb-2 font-bold`}>
                    {question}
                    <span
                        className={`flex mt-[-20px] transition-transform transform justify-items-end  ${isOpen ? 'rotate-0 justify-end' : '-rotate-180'}`}
                        onClick={toggleOpen}
                    >
                        {isOpen ? <>&#x2212;</> : <>&#x2B;</>}
                    </span>
                </h3>

            </div>
            {isOpen && <p className={`my-2 px-2 ${className}`}>{answer}</p>}
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