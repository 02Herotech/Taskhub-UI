import { BackButton } from '../../components/buttons/Button'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import { TermsAndConditions } from '../../components/termsAndPrivacy/TermsAndPrivacy'
import { poppins, revalia } from '@/styles/font'



const terms = () => {
    return (
        <div className={`min-h-screen ${poppins.className}`}>
            <Nav />

            <div className='mt-[100px]'>
                <TermsAndConditions />
                <BackButton btnLink='/auth/authSignup' btnValue='Go back' />
            </div>
            <Footer />

        </div>

    )
}

export default terms