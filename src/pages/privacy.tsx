import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'


const privacy = () => {
    return (
        <div className={`min-h-screen`}>
            <Nav />
            <div className="container mx-auto px-4 py-8 mt-[100px]  text-black">
                <h1 className="text-3xl font-extrabold mb-6">Privacy</h1>

            </div>
            <Footer />
        </div>)
}

export default privacy