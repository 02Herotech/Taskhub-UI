import { revalia } from "@/styles/font";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className={`text-justify pb-20 pt-36 px-20 max-w-7xl mx-auto`}>
      <h3 className={`text-xl text-center my-5 font-extrabold`}>
        TaskHub Privacy
      </h3>
      <p className="font-extrabold text-center text-[16px] my-4">
        THIS AGREEMENT INCLUDES A CLASS ACTION WAIVEVR AND REQUIRES <br /> THE
        USE OF ARTBITRATION ON AN INDIVIDUAL BASIS TO SOLVE
        <br /> DISPUTES, RATHER THAN JURY TRIALS
      </p>
      <div className=" mt-16 max-w-4xl mx-auto flex flex-col space-y-8">
        <div className="flex flex-col space-y-5">
          <h3 className="font-bold text-md">1.0 What this Policy is about?</h3>
          <div className="text-[14px] flex flex-col space-y-8 text-justify ml-8">
            <p>
              TaskHub is committed to providing quality services to you and this
              policy outlines our ongoing obligations to you in respect of how
              we manage your Personal Information.
            </p>
            <p>
              We have adopted the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern
              the way in which we collect, use, disclose, store, secure and
              dispose of your Personal Information.
            </p>
            <p>
              A copy of the Australian Privacy Principles may be obtained from
              the website of The Office of the Australian Information
              Commissioner at{" "}
              <Link
                href="https://www.oaic.gov.au/"
                className="text-[#FE9B07] hover:text-grey6"
              >
                https://www.oaic.gov.au/
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <h3 className="font-bold text-md">2.0 Personal information</h3>
          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              2.1 What is Personal Information and why do we collect it?
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                Personal Information is information or an opinion that
                identifies an individual. Examples of Personal Information we
                collect includes names, addresses, email addresses, phone and
                facsimile numbers.
              </p>
              <p>
                This Personal Information is obtained in many ways including
                registration of your personal details, card details and from
                third parties. We don’t guarantee website links or policy of
                authorized third parties.
              </p>
              <p>
                We collect your Personal Information for the primary purpose of
                providing our services to you, providing information to our
                clients and marketing. We may also use your Personal Information
                for secondary purposes closely related to the primary purpose,
                in circumstances where you would reasonably expect such use or
                disclosure. You may unsubscribe from our mailing/marketing lists
                at any time by contacting us in writing.
              </p>
              <p>
                When we collect Personal Information, we will, where appropriate
                and where possible, explain to you why we are collecting the
                information and how we plan to use it.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">2.2 Sensitive Information</h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                Sensitive information is defined in the Privacy Act to include
                information or opinion about such things as an individual's
                racial or ethnic origin, political opinions, membership of a
                political association, religious or philosophical beliefs,
                membership of a trade union or other professional body, criminal
                record or health information.
              </p>

              <div className="flex flex-col space-y-5 ">
                <p>Sensitive information will be used by us only:</p>
                <ul className="list-disc ml-4 flex flex-col space-y-5">
                  <li>For the primary purpose for which it was obtained</li>
                  <li>
                    For a secondary purpose that is directly related to the
                    primary purpose
                  </li>
                  <li>
                    With your consent; or where required or authorized by law.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              2.3 Disclosure of Personal Information
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                Your Personal Information may be disclosed in several
                circumstances including the following:
              </p>
              <ul className="list-disc ml-4 flex flex-col space-y-5">
                <li>
                  Third parties where you consent to the use or disclosure; and
                </li>
                <li>Where required or authorized by law.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              2.4 Security of Personal Information
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                Your Personal Information is stored in a manner that reasonably
                protects it from misuse and loss and from unauthorised access,
                modification, or disclosure.
              </p>
              <p>
                When your Personal Information is no longer needed for the
                purpose for which it was obtained, we will take reasonable steps
                to destroy or permanently de-identify your Personal Information.
                However, most of the Personal Information is or will be stored
                in client files which will be kept by us for a minimum of 7
                years.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              2.5 Access to your Personal Information
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                You may access the Personal Information we hold about you and to
                update and/or correct it, subject to certain exceptions. If you
                wish to access your Personal Information, please contact us in
                writing.
              </p>
              <p>
                TaskHub will not charge any fee for your access request but may
                charge an administrative fee for providing a copy of your
                Personal Information.
              </p>
              <p>
                In order to protect your Personal Information we may require
                identification from you before releasing the requested
                information.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              2.6 Maintaining the Quality of your Personal Information
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                It is an important to us that your Personal Information is up to
                date. We will take reasonable steps to make sure that your
                Personal Information is accurate, complete and up to date. If
                you find that the information we have is not up to date or is
                inaccurate, please advise us as soon as practicable so we can
                update our records and ensure we can continue to provide quality
                services to you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <h3 className="font-bold text-md">3.0 Third Parties</h3>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">2.2 Sensitive Information</h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                Where reasonable and practicable to do so, we will collect your
                Personal Information only from you. However, in some
                circumstances we may be provided with information by third
                parties. In such a case we will take reasonable steps to ensure
                that you are made aware of the information provided to us by the
                third party.
              </p>

              <div className="flex flex-col space-y-5 ">
                <p>
                  The Services contain links to the following third party
                  websites;
                </p>
                <ul className="list-disc ml-4 flex flex-col space-y-5">
                  <li>Paypal</li>
                  <li>Our valued service providers</li>
                  <li>Advertisers</li>
                  <li>Third party verification providers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <h3 className="font-bold text-md">4.0 Policy Updates:</h3>
          <div className="text-[14px] flex flex-col space-y-8 text-justify ml-8">
            <p>
              This Policy may change from time to time and is available on our
              website.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <h3 className="font-bold text-md">5.0 Contact us.</h3>
          <div className="text-[14px] flex flex-col space-y-8 text-justify ml-8">
            <p>
              Is there any question you may like to ask about our privacy policy
              and the service we provide? You can reach out to us through the
              following medium:
            </p>
          </div>
          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">
              5.1 Privacy Policy Complaints and Enquiries
            </h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                If you have any queries or complaints about our Privacy Policy
                please contact us vide:{" "}
                <Link
                  href="mailto:privacy@taskhub.com.au"
                  className="text-[#FE9B07] hover:text-grey6"
                >
                  privacy@taskhub.com.au
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 ml-8">
            <h3 className="font-bold text-[16px]">5.2 Feedback</h3>
            <div className="text-[14px] flex flex-col space-y-8 text-justify ml-6">
              <p>
                If you have any feedback or questions about this Privacy policy
                or any other privacy-related practice, please contact us via
                email above or telephone number:{" "}
                <Link
                  href="tel:+6145000000"
                  className="text-[#FE9B07] hover:text-grey6"
                >
                  +6145000000
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
