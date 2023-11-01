import React from 'react'
import Head from 'next/head'
import ServiceSlider from '../../components/serviceSlider/ServiceSlider'


const services = () => {
    return (
        <div>
            <Head>
                <title>TaskHub | Services</title>
            </Head>
            <div className={`min-h-screen py-20`}>
                <ServiceSlider />
                
            </div>
        </div>
    )
}

export default services;