import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Link from "next/link";
import {Button} from "../../components/buttons/Button";
import {revalia} from "@/styles/font";
import Image from "next/image";
import aboutUs from "../../public/about.png";
import mission from "../../public/mission.png";
import values from "../../public/values.png";
import setApart from "../../public/setApart.png";
import Dev1 from "../../public/devs/Dev 1.png";
import Dev2 from "../../public/devs/Dev 2.png";
import Dev3 from "../../public/devs/Dev 3.png";
import Dev4 from "../../public/devs/Dev 4.png";
import Dev5 from "../../public/devs/Dev 5.png";
import Dev6 from "../../public/devs/Sekai2.jpeg";


const about = () => {
    return (
        <div className={`min-h-screen`}>
            <Nav/>
            <div className=" mt-[100px]  text-black">
                <div
                    className={`bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD] flex justify-around pt-20`}
                >
                    <div className={` w-[500px] h-[450px] space-y-10`}>
                        <h1 className={`${revalia.className} font-extrabold text-xl `}>
                            ABOUT TASKHUB
                        </h1>
                        <h2 className={`${revalia.className} text-[28px] w-[450px] `}>
                            We make the business life easy and safe
                        </h2>
                        <p className={`w-[430px] font-[500]`}>
                            {
                                "Excellent customer service, top-notch service providers, and easy-to-use technology. That  s our recipe for brewing you a stress-free life."
                            }
                        </p>
                        <div>
                            <Link href="/auth/">
                                <Button
                                    btnValue="Get Started"
                                    className="h-[65px] w-[180px] border-none text-white bg-purpleBase"
                                />
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`w-[250px] relative mt-5 h-[400px] flex items-center bg-purpleBase`}
                    >
                        <div className="w-[250px] flex items-center h-[350px] absolute left-[-8rem] top-10">
                            <Image src={aboutUs} alt="" width={320} height={350}/>
                        </div>
                    </div>
                </div>
                <div className={`bg-white`}>
                    <div className="ml-[15rem] ">
                        <h2 className="text-xl w-[400px] mt-40 mb-20 font-medium">Meet our Development Team</h2>
                        <div className="flex justify-center items-center mb-[50px]">
                            <div className="grid grid-cols-3 gap-5">
                                <div>
                                    <Image src={Dev1} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Charles</p>
                                        <p>Business Analyst</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Dev3} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Matthew</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Dev2} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Glory</p>
                                        <p>Business Analyst</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Dev4} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Osinachi</p>
                                        <p>QA</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Dev5} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Dean</p>
                                        <p>Back-End Developer</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Dev6} alt="first-dev" className="w-[300px]"/>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-5 font-semibold">Sekai</p>
                                        <p>Business Analyst</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD] p-20 space-y-10 relative pb-44`}
                >
                    <div className={`mb-32`}>
                        <h1
                            className={`${revalia.className} font-extrabold  ml-[10rem] text-xl mb-24 `}
                        >
                            Our Mission
                        </h1>
                        <p className={`w-[850px] ml-[15rem] text-md`}>
                            At TaskHub our mission is to connect talented service providers
                            with customers and businesses in need. We facilitate a seamless
                            and trustworthy platform for meaningful service exchange. We
                            believe in the power of skill-sharing and collaboration to
                            transform lives and businesses.
                        </p>
                    </div>

                    <div>
                        <h1
                            className={`${revalia.className} font-extrabold  ml-[10rem] text-xl mb-24 `}
                        >
                            Our Story
                        </h1>
                        <p className={`w-[850px] ml-[15rem] text-md`}>
                            TaskHub emerged from a vision to revolutionise the way services
                            are sought and delivered. Our journey began when our founders
                            recognised the need for a more efficient, transparent, and
                            user-friendly platform to bring service providers and customers
                            together.
                        </p>
                    </div>

                    <div className={`absolute right-0 bottom-24`}>
                        <Image src={mission} alt="" width={700} height={500}/>
                    </div>
                </div>
                <div className={`bg-white relative p-20 h-[770px]`}>
                    <div
                        className={`${revalia.className} bg-purple6 bg-opacity-60 w-[180px] h-[40px] flex items-center justify-center text-black ml-[10rem] mt-10`}
                    >
                        <h1 className="text-lg mt-[-35px]">Our Values</h1>
                    </div>

                    <div className="space-y-5 mt-20 ml-[250px] ">
                        <h3>At TaskHub our values define who we are and how we operate:</h3>
                        <ul className="space-y-4 list-disc">
                            <li>
                                <span className={`font-extrabold text-sm `}>Swift: </span>We
                                pride ourselves on rapid response times and quick service
                                delivery.
                            </li>
                            <li>
                                <span className={`font-extrabold text-sm `}>Efficiency: </span>
                                We deliver high-quality services promptly and resourcefully.
                            </li>
                            <li>
                                <span className={`font-extrabold text-sm `}>Quality: </span>We
                                are dedicated to maintaining the highest standards of service
                                quality.
                            </li>
                            <li>
                                <span className={`font-extrabold text-sm `}>Trust: </span>We
                                foster trust among our users through transparency and
                                accountability.
                            </li>
                            <li>
                                <span className={`font-extrabold text-sm `}>Community: </span>We
                                believe in the power of community to inspire growth and success.
                            </li>
                            <li>
                                <span className={`font-extrabold text-sm `}>Innovation: </span>
                                We continually innovate to improve user experiences and
                                outcomes.
                            </li>
                        </ul>
                    </div>
                    <div className={`absolute right-0 bottom-0`}>
                        <Image src={values} alt="" width={650} height={200}/>
                    </div>
                </div>
                <div
                    className={`bg-gradient-to-r from-[#F8E9FE] via-[#FFFFFF] to-[#F5DDFD] p-20  relative h-[770px] `}
                >
                    <div
                        className={`${revalia.className} bg-purple6 bg-opacity-60 w-[400px] h-[40px] flex items-center justify-center text-black ml-[10rem] mt-10`}
                    >
                        <h1 className="text-lg mt-[-35px]">Our What Sets Us Apart</h1>
                    </div>
                    <div className=" mt-20 ml-[350px] w-[700px]">
                        <ul className="space-y-4 list-disc ">
                            <li>
                <span className={`font-extrabold text-sm `}>
                  User-Friendly Interface:{" "}
                </span>
                                Our platform is designed with simplicity in mind, making it{" "}
                                <span className={`font-extrabold  `}>
                  easy for service providers and seekers to connect and
                  transact.
                </span>
                            </li>
                            <li>
                <span className={`font-extrabold text-sm `}>
                  Verified Service Providers:{" "}
                </span>
                                We carefully vet and verify all service providers to ensure
                                their skills and qualifications meet our standards.
                            </li>
                            <li>
                <span className={`font-extrabold text-sm `}>
                  Ratings and Reviews:{" "}
                </span>
                                Users can provide feedback and ratings, helping others make
                                informed decisions.
                            </li>
                            <li>
                <span className={`font-extrabold text-sm `}>
                  Secure Payments:{" "}
                </span>
                                Our secure payment system protects your transactions.
                            </li>
                            <li>
                <span className={`font-extrabold text-sm `}>
                  Wide Range of Services:{" "}
                </span>
                                From Home services to electronics, we offer a diverse array of
                                services to meet your needs.
                            </li>
                        </ul>
                    </div>

                    <div className={`absolute right-[10rem] bottom-6`}>
                        <Image src={setApart} alt="" width={300} height={250}/>
                    </div>
                </div>
                <div className={`bg-white p-20 `}>
                    <h1
                        className={`${revalia.className} font-extrabold  ml-[10rem] text-[26px] mb-24 `}
                    >
                        Join Our Community
                    </h1>

                    <div
                        className={`px-24 py-12  flex justify-center items-center bg-purpleBase text-white `}
                    >
                        <div className="w-[800px]  flex flex-col items-start space-y-5">
                            <p className="w-[730px]">
                                Join our growing TaskHub Service Marketplace Platform community
                                today and experience the future of service exchange.Whether
                                you’re looking to find skilled professionals or showcase your
                                expertise, we’re here to help you succeed.
                            </p>

                            <h3 className="text-sm font-extrabold">Contact Us</h3>
                            <h4>
                                Have questions or suggestions? We’re here to listen and assist
                                you.
                            </h4>

                            <ul className="list-disc space-y-3">
                                <li>
                                    Email:{" "}
                                    <Link
                                        href="info @taskhubplace.com.au"
                                        className="text-[#FE9B07]"
                                    >
                                        info @taskhubplace.com.au
                                    </Link>
                                </li>
                                <li>Phone: +61450000</li>
                                <li>Address: PO Box 18AX, Horton rd, QLD</li>
                            </ul>

                            <p className="w-[730px]">
                                Thank you for choosing TaskHub Service Marketplace Platform.We
                                look forward to serving you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default about;
