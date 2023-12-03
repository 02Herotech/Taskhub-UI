import React, { useState } from 'react'
import { FAQlayout } from '../../components/FAQDetails/FAQData';
import { FAQProps } from '../../components/FAQDetails/FAQData';
import { FAQData } from '../../components/FAQDetails/FAQData';
import {revalia} from "@/styles/font";
import Image from 'next/image';
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from '../styles/animation.module.css'
import { poppins } from '@/styles/font'




import camera from '../../public/camera.png'
import laptop from '../../public/laptop.png'
import welder from '../../public/welder.png'
import lashes from '../../public/lashes.png'
import tools from '../../public/tools.png'
import brush from '../../public/brush.png'
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import NewFooter from '../../components/NewFooter/NewFooter';





const Faq: React.FC<FAQProps> = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const isAllInputFiiled = () => {
        const requiredField = ['email', 'message'];
    return requiredField.every(() => email !== '' && message !== '')
    }

    const hanldeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(!submitted)
        console.log(email, message);
    }



    // console.log(email, message);



    return (
        <div>
            <Head>
                <title>TaskHub | FAQ</title>
            </Head>

            <Nav />

            <main className={`min-h-screen ${poppins.className}`}>
                <div className={`bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD]`}>
                    <div className="max-w-7xl mx-auto p-20">
                        <div className={`ml-24 mb-8`}>
                            <h1 className={`${revalia.className}  text-xl font-extrabold mt-[2.5em] mb-6`}>Frequently Asked Questions</h1>
                            <p className='text-xs'>Your TaskHub questions, answered</p>
                        </div>

                        <div className='flex justify-between'>

                            <div className='flex flex-col justify-around'>
                                <Image src={camera} w-full alt='Photo a camera' />
                                <Image src={welder} w-full alt='Photo of a welder' />
                                <Image src={laptop} w-full alt='Photo of a laptop' />
                            </div>

                            <div className='bg-purpleBase w-[650px]flex flex-col my-4 p-4'>
                                {FAQData.map((item, id) => (
                                    <div className='self-center' key={id}>
                                        <FAQlayout question={item.question} answer={item.answer} id={0}/>
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-col justify-around h-[900px]'>
                                <Image src={lashes} w-full alt='' />
                                <Image src={tools} w-full alt='' />
                                <Image src={brush} w-full alt='' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-20 mt-32 mb-[15em] '>
                    <h1 className={`${revalia.className}  text-xl font-extrabold`}>Still have questions?</h1>
                
                    {submitted ?    
                        <div className={`flex flex-col items-center h-[150px] place-content-center mt-24 transition ease-in-out delay-[3s] ${styles.animation}`}>
                            <span className={`text-[5em] text-purple7`}><AiOutlineCheckCircle /></span>
                            <p className={`text-xs mt-5`}>Thank you for contacting us. We will reach out to you soon</p>
                        </div> : 
                    
                        <form className='ml-[10em] h-[450px]' onSubmit={hanldeSubmit}>
                            <div className={`flex flex-col my-10`}>
                                <label>Email</label>
                                <input type="email" value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@abc.com' className='mt-6 w-[40em] p-3 border-grey4 border-2 rounded-md text-black text-[13px]'/>
                            </div>

                            <div className='flex flex-col'>
                                <label>Message</label>
                                <textarea name="message" placeholder='Type here...' value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='resize-none mt-6 w-[40em] h-72 p-3 border-grey4 border-2 rounded-md text-black text-[13px]' />
                            </div>

                            <button type='submit' className={`p-3 bg-purpleBase text-white  text-[13px] font-extralight hover:bg-purple7 rounded-md my-10 disabled:opacity-50`}
                            disabled={!isAllInputFiiled()}
                            >Send Message</button>
                        </form>
                    }
                </div>
            </main>

            <NewFooter />

        </div>
    );
}

export default Faq