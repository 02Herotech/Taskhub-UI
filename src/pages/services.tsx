import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'


const services = () => {
    return (
        <div className={`min-h-screen`}>
            <Nav />
            <div className="container mx-auto px-4 py-8 text-black">
                <h1 className="text-3xl font-extrabold mb-6">Services</h1>

            </div>
            <Footer />
        </div>
    )
}

export default services