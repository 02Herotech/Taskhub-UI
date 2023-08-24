import { BackButton } from '../../components/buttons/Button'
import { TermsAndConditions } from '../../components/termsAndPrivacy/TermsAndPrivacy'


const terms = () => {
    return (

        <div>
            <TermsAndConditions />
            <BackButton btnLink='/auth/authSignup' btnValue='Go back' />
        </div>
    )
}

export default terms