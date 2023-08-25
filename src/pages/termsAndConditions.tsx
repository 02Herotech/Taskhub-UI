import { BackButton } from '../../components/buttons/Button'
import Nav from '../../components/nav/Nav'
import { TermsAndConditions } from '../../components/termsAndPrivacy/TermsAndPrivacy'
import { montsearrat } from '@/styles/font'



const terms = () => {
    return (
        <div className={`min-h-screen ${montsearrat.className}`}>
            <Nav />

            <div className='mt-[100px]'>
                <TermsAndConditions />
                <BackButton btnLink='/auth/authSignup' btnValue='Go back' />
            </div>

        </div>

    )
}

export default terms