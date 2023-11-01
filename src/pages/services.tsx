import React from 'react'
import Head from 'next/head'
import ServiceSlider from '../../components/serviceSlider/ServiceSlider'
// import { SearchBar } from '../../components/SearchBar/SearchBar'
// import { Button } from '../../components/buttons/Button'


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