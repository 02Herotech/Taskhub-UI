import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Head from 'next/head'


const services = () => {
    return (
        <div>
            <Head>
                <title>TaskHub | Services</title>
            </Head>
            <div className={`min-h-screen`}>
                <div className="container mx-auto px-4 py-8 text-black">
                    <h1 className="text-3xl font-extrabold mb-6">Services</h1>

                </div>
            </div>
        </div>
    )
}

export default services