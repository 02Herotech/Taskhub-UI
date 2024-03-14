import { BackButton } from "../../components/buttons/Button";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import { TermsAndConditions } from "../../components/termsAndPrivacy/TermsAndPrivacy";

const Terms = () => {
  return (
    <div className={`min-h-screen`}>
      <Nav />
      <div>
        <TermsAndConditions />
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
