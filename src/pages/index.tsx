/* eslint-disable react/no-unescaped-entities */
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import Head from 'next/head'

import homepageStyles from '../styles/homepage.module.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import { SearchButton } from '../../components/buttons/Button'
import { Button } from '../../components/buttons/Button'
import ServicesLayout from '../../components/services/ServicesLayout'


import serviceProvImg from '../../public/service-provider5.svg'
import serviceProvChatImg from '../../public/hero-chat-img.png'
import trusted from '../../public/Trusted_.svg'
import paypal from '../../public/paypal.svg'
import mastercard from '../../public/mastercard.svg'
import google from '../../public/Google.svg'
import visa from '../../public/card-visa.svg'
import { FAQLandingPage } from '../../components/FAQDetails/FAQData'
import Newsletter from '../../components/newsletter/Newsletter'
const automative = require('../../public/automative.png') as StaticImageData;






const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>TaskHUB  | HomePage </title>
      </Head>
      <main
        className={`min-h-screen ${inter.className}`}>
        <Nav />

        <div className={` w-full relative p-5 h-[650px] ${homepageStyles.getStartedCont}`}>
          <div className="flex justify-between">
            <div className={`px-20 py-14 flex flex-col justify-around text-white space-y-10`}>
              <h1 className={`text-2xl  font-extrabold w-[550px] mb-[-20px]`}>
                GET QUICK AND EFFICIENT SERVICE
              </h1>

              <p className={`text-base w-[480px]`}>
                Our user-friendly platform ensures a seamless
                experience, allowing you to effortlessly find, connect,
                and engage with the perfect service professionals.
              </p>

              <h4 className={`text-sm`}>
                What are you looking for?
              </h4>

              <div className={`flex`}>
                <SearchButton
                  btnPlaceholder1='By Location'
                  btnPlaceholder2='By Service'
                />
              </div>
              <div className={`w-[160px]`}>
                <Link href='/auth/'>
                  <Button btnValue='Get Started'
                    className='h-[55px]'
                  />

                </Link>
              </div>
            </div>

            <div className={`items-end  absolute bottom-0 right-[6rem] `}>
              <div className={``}>
                <Image src={serviceProvImg} width={315} height={350} alt='' />
              </div>
            </div>
            <div className={`items-end  absolute bottom-[5rem] right-[18rem] `}>
              <div className={``}>
                <Image src={serviceProvChatImg} width={300} height={85} alt='' />
              </div>
            </div>
          </div>

        </div>

        <div className={` bg-grey w-full`}>
          <div className='flex justify-center items-center space-x-12 p-2 cursor-pointer'>
            <div>
              <Image src={trusted} width={60} height={18} alt='' />
            </div>

            <div>
              <Image src={google} width={90} height={30} alt='' />
            </div>

            <div>
              <Image src={paypal} width={68} height={68} alt='' />
            </div>

            <div>
              <Image src={mastercard} width={68} height={68} alt='' />
            </div>

            <div>
              <Image src={visa} width={68} height={68} alt='' />
            </div>
          </div>

        </div>

        <ServicesLayout id={0} category={''} categoryImage={automative} services={[]} description={''} />

        <FAQLandingPage />

        <Newsletter />

        <Footer />


      </main >
    </div>
  )
}
