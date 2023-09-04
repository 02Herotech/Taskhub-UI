import React from 'react'
import { FAQlayout } from '../../components/FAQDetails/FAQData'
import { FAQProps } from '../../components/FAQDetails/FAQData'
import { FAQData } from '../../components/FAQDetails/FAQData'
import { poppins, revalia } from '@/styles/font'

import Nav from '../../components/nav/Nav'

const Faq: React.FC<FAQProps> = () => {

    return (
        <div className={`min-h-screen ${poppins.className}`}>
            <Nav />
            <div className="container mx-auto px-4 py-8 mt-[100px]  text-black">
                <h1 className="text-3xl font-extrabold mb-6">Frequently Asked Questions</h1>
                {FAQData.map((item, id) => (
                    <FAQlayout key={id} question={item.question} answer={item.answer} id={0} />
                ))}
            </div>
        </div>
    );
}

export default Faq