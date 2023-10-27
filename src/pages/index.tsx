/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import Head from 'next/head'

import homepageStyles from '../styles/homepage.module.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import ServicesLayout from '../../components/services/ServicesLayout'
import ServiceProviderLayout from '../../components/serviceProvider/ServiceProviderLayout'


import paypal from '../../public/paypal.svg'
import mastercard from '../../public/mastercard.svg'
import google from '../../public/Google.svg'
import visa from '../../public/visa.svg'
import { FAQLandingPage } from '../../components/FAQDetails/FAQData'
// import { poppins, revalia } from '@/styles/font'
import HeroSection from '../../components/heroSection/HeroSection'
const automative = require('../../public/automative.png') as StaticImageData;
const fedex = require('../../public/fedex.png') as StaticImageData;



const Home = () => {
  return (
    <div>
      <Head>
        <title>TaskHUB  | HomePage </title>
      </Head>
      <main
        className={`min-h-screen `}>
        <Nav />

        <div>
          <HeroSection />
        </div>

        <ServicesLayout id={0} category={''} categoryImage={automative} services={[]} description={''} />

        <div className={` bg-purpleBase w-full `}>
          <div className='flex justify-center items-center h-[120px] space-x-[120px] p-2 cursor-pointer'>
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

        <ServiceProviderLayout id={0} providerName={''} providerImage={fedex} rating={0} description={''} />

        <FAQLandingPage />

        <Footer />


      </main >
    </div>
  )
}
export default Home