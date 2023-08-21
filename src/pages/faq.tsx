import React from 'react'
import { FAQlayout } from '../../components/FAQDetails/FAQData'
import { FAQProps } from '../../components/FAQDetails/FAQData'
import { FAQData } from '../../components/FAQDetails/FAQData'

const Faq: React.FC<FAQProps> = () => {

    return (
        <div className="container mx-auto px-4 py-8 faq">
            <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
            {FAQData.map((item, id) => (
                <FAQlayout key={id} question={item.question} answer={item.answer} id={0} />
            ))}
        </div>
    );
}

export default Faq