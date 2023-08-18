import { Inter } from 'next/font/google'
import Link from 'next/link'
import homepageStyles from '../styles/homepage.module.css'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import { SearchButton } from '../../components/buttons/Button'
import { Button } from '../../components/buttons/Button'
import { ImgSlider } from '../../components/slider/Slider'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <Nav />

      <div className={`relative w-full p-5 ${homepageStyles.getStarted}`}>
        <div className="container mx-auto ">
          <div className={`flex justify-end mb-[-100px]`}>
            <div className={`flex`}>
              <div className={` w-[120px]`}>
                <Link href='#'>
                  <Button
                    btnValue='Sign Up'
                  />
                </Link>
              </div>
              <div className={`w-[120px]`}>
                <Link href='#'>
                  <Button
                    btnValue='Log in'
                    className='bg-transparent border-[1px] border-purple'
                  />
                </Link>
              </div>
            </div>

            {/* <div>
              <ImgSlider />
            </div> */}
          </div>

          <div className={`absolute  p-20 flex flex-col justify-around text-white space-y-10  item- m-auto`}>
            <h1 className={`text-2xl  font-extrabold w-[550px] mb-[-20px]`}>
              GET QUICK AND EFFICIENT SERVICE
            </h1>

            <p className={`text-base w-[420px]`}>
              Our user-friendly platform ensures a seamless
              experience, allowing you to effortlessly find, connect,
              and engage with the perfect service professionals.
            </p>

            <h4 className={`text-sm`}>
              What are you looking for?
            </h4>

            <div className={`flex`}>
              <SearchButton btnPlaceholder='By Location' />
              <SearchButton btnPlaceholder='By Service' />
            </div>
            <div className={`w-[160px]`}>
              <Button btnValue='Get Started'
              />
            </div>
          </div>
        </div>
      </div>


      <Footer />


    </main >
  )
}
