import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import automative from '../../public/automative.png'
import beauty from '../../public/beauty.png'
import cleaning from '../../public/cleaning.png'
import fashion from '../../public/fashion.png'
import fitness from '../../public/fitness.png'
import laundry from '../../public/laundry.png'
import repairs from '../../public/repairs.png'
import sports from '../../public/sports.png'

import serviceStyles from './serviceLayout.module.css'


const ServicesLayout = () => {
    return (
        <div className={`container mx-auto`}>
            <div className={`w-[370px] h-[65px] my-10 mx-auto text-white text-xl bg-purple flex justify-center items-center`}>
                <h3>Service Categories</h3>
            </div>

            <div className={`flex flex-wrap `}>
                {[
                    automative,
                    beauty,
                    cleaning,
                    fashion,
                    fitness,
                    laundry,
                    repairs,
                    sports].map((service) => (
                        <div className={`p-4 w-1/4 my-5 ${serviceStyles['hover-scale']}`} key={service}>
                            <Link href='#'>
                                <Image src={service} alt='' />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ServicesLayout