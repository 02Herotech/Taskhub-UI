/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import Head from 'next/head'

import homepageStyles from '../styles/homepage.module.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import ServicesLayout from '../../components/services/ServicesLayout'


import trusted from '../../public/Trusted_.svg'
import paypal from '../../public/paypal.svg'
import mastercard from '../../public/mastercard.svg'
import google from '../../public/Google.svg'
import visa from '../../public/card-visa.svg'
import { FAQLandingPage } from '../../components/FAQDetails/FAQData'
import Newsletter from '../../components/newsletter/Newsletter'
import { poppins, revalia } from '@/styles/font'
import HeroSection from '../../components/heroSection/HeroSection'
const automative = require('../../public/automative.png') as StaticImageData;






export default function Home() {
  return (
    <div>
      <Head>
        <title>TaskHUB  | HomePage </title>
      </Head>
      <main
        className={`min-h-screen ${poppins.className}`}>
        <Nav />

        <div className={`bg-white`}>
          <HeroSection />

        </div>

        <div className={`bg-[#FFFCFC]`}>
          <ServicesLayout id={0} category={''} categoryImage={automative} services={[]} description={''} />
        </div>

        <div className={` bg-grey w-full mt-[100px]`}>
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

        <FAQLandingPage />

        <Newsletter />

        <Footer />


      </main >
    </div>
  )
}
