import { BackButton } from '../../components/buttons/Button'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import { TermsAndConditions } from '../../components/termsAndPrivacy/TermsAndPrivacy'



const terms = () => {
    return (
        <div className={`min-h-screen`}>
            <Nav />
            <div>
                <TermsAndConditions />
                <BackButton btnLink='/auth/authSignup' btnValue='Go back' />
            </div>
            <Footer />

        </div>

    )
}

export default terms