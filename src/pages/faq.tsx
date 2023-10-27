import React from 'react'
import { FAQlayout } from '../../components/FAQDetails/FAQData'
import { FAQProps } from '../../components/FAQDetails/FAQData'
import { FAQData } from '../../components/FAQDetails/FAQData'

import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'

const Faq: React.FC<FAQProps> = () => {

    return (
        <div className={`min-h-screen `}>
            <Nav />
            <div className="container mx-auto px-4 py-14 text-black">
                <h1 className="text-3xl font-extrabold mb-6">Frequently Asked Questions</h1>
                {FAQData.map((item, id) => (
                    <FAQlayout key={id} question={item.question} answer={item.answer} id={0} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Faq