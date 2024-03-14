import React from "react";
import { revalia } from "@/styles/font";

import styles from "./styles.module.css";

export const TermsAndConditions = () => {
  return (
    <div className={`text-justify pb-20 pt-36 px-20 max-w-7xl mx-auto`}>
      <h3 className={`text-xl text-center my-5 font-extrabold`}>
        TaskHub Terms and Conditions
      </h3>
      <p className="font-extrabold text-center text-[16px] my-4">
        THIS AGREEMENT INCLUDES A CLASS ACTION WAIVEVR AND REQUIRES <br /> THE
        USE OF ARTBITRATION ON AN INDIVIDUAL BASIS TO SOLVE
        <br /> DISPUTES, RATHER THAN JURY TRIALS
      </p>

      <div className="text-base px-20">
        <p>
          Here are our terms and conditions. Country Specific Terms in Appendix
          B shall also apply to this Agreement. Please contact us here if you
          have any other questions. Thanks for connecting.
        </p>
        <p className="my-5">
          The TaskHub terms & conditions (updated date) outline TaskHub and Your
          obligations and responsibilities on the TaskHub Platform. In this
          update to our Terms and Conditions, TaskHub has updated information
          related to Fees.
        </p>
        <p>
          User Agreement: <span className="font-bold">www.taskhub.com</span>
        </p>
        <p className="my-5">
          TaskHub operates an online platform allowing Users to connect through
          the TaskHub Platform with other Users who provide Services.
        </p>
        <p>
          Please read these terms and all Policies including the Community
          Guidelines and Privacy Policy carefully before using the TaskHub
          Platform. These Policies are incorporated into this Agreement by
          reference.
        </p>
        <p className="my-5">
          All defined terms in this Agreement have the meaning given to them in
          the TaskHub Glossary.
        </p>
        <p className="font-extrabold">1. SCOPE OF TASKHUB SERVICES</p>
        <p className="my-2 ml-4 font-bold">Basic Principles</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            {" "}
            <span className="mr-2">1.1</span>TaskHub provides the TaskHub
            Platform to enable Posters to publish Posted Tasks.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">1.2</span>Service Providers may make an Offer
            in response to a Posted service. Some parts of Offer details may be
            made publicly available, including to internet users who are not
            Users.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">1.3</span>A Poster may revoke or modify a
            Posted Task at any time before he/she accepts an Offer. TaskHub
            reserves the right to cancel all Offers on a Posted Task made prior
            to the modification.
          </li>

          <li className="flex">
            <span className="mr-2">1.4</span> If a Poster accepts an Offer on
            the TaskHub Platform, a Task Contract is created between the service
            and the Poster.
          </li>
          <li className="flex">
            <span className="mr-2">1.5</span> Upon creation of a Task Contract,
            the Poster must pay the Agreed Price into the Payment Account.
          </li>
          <li className="flex">
            <span className="mr-2">1.6</span> Upon creation of the Task
            Contract, TaskHub has rendered TaskHub Services and the Service Fee
            is due and payable.
          </li>
          <li className="flex">
            <span className="mr-2">1.7</span> Once the Task Contract is created,
            the Tasker and Poster may vary the Task Contract on the TaskHub
            Platform. The Poster and Tasker are encouraged to use TaskHub’s
            private messaging system to amend or vary the Task Contract
            (including the Agreed Price) or to otherwise communicate.
          </li>
          <li className="flex">
            <span className="mr-2">1.8</span> Once the Services are complete,
            the Tasker must provide notice of that on the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">1.9</span>Once the Services are complete, the
            Poster must provide notice of that on the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">1.10</span> Once the Posted Task has been
            completed and the Poster confirms the Services are completed, or if
            TaskHub is satisfied with the Services have been completed, the
            Tasker Funds will be released by TaskHub from the Payment Account to
            the Tasker. However, this process does not apply to the payment of
            Recurring Services which is addressed in clause 1.20 below.
          </li>
          <li className="flex">
            <span className="mr-2">1.11</span> After the Task Contract is
            completed, the parties are encouraged to review and provide feedback
            of the Services on the TaskHub Platform.
          </li>
        </ul>
        <p className="my-2 ml-4 font-bold">Search Assist</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">1.12</span>
            TaskHub may also provide a Search Assist feature enabling Posters to
            submit an Offer for Services.
          </li>
          <li className="flex">
            <span className="mr-2">1.13</span>
            An Offer submitted by a Poster using Search Assist may be notified
            to other Users and such Users may elect to make an Instant Claim of
            it.
          </li>
          <li className="flex">
            <span className="mr-2">1.14</span>
            When using Search Assist a Task Contract is created when a Tasker
            makes an Instant Claim (and in the case of Recurring Services a Task
            Contract is created for the first Occurrence only). For Recurring
            Services, the next Task Contract is created upon completion of the
            previous Occurrence.
          </li>
          <li className="flex">
            <span className="mr-2">1.15</span>A Poster may revoke or modify its
            Offer in using Search Assist, including for Recurring Services, at
            any time before a Tasker makes an Instant Claim. TaskHub reserves
            the right to cancel all Posted Tasks made prior to the revocation or
            modification.
          </li>
        </ul>
        <p className="my-2 ml-4 font-bold">Listing</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">1.16</span>
            TaskHub may also provide a service provider Listing feature enabling
            the service provider to publish Offers for Services.
          </li>

          <li className="flex">
            <span className="mr-2">1.17</span>
            TaskHub may publish Tasker Listings from time to time in its
            absolute discretion.
          </li>
          <li className="flex">
            <span className="mr-2">1.18</span>A Poster may request to book a
            service provider Listing by clicking on the Request Booking button
            and completing the booking request. The service provider may then
            make an offer to perform the Task. When using service provider
            Listing, a Task Contract is created when the Poster accepts the
            offer made by the Tasker.
          </li>
          <li className="flex">
            <span className="mr-2">1.19</span>A service provider may revoke or
            modify its Tasker Listing at any time before a Poster accepts a
            service provider’s offer.
          </li>
        </ul>
        <p className="my-2 ml-4 font-bold">Recurring Service</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">1.20</span>
            For Recurring Services and subject to clause 1.21, once the
            Occurrence has been completed and the Tasker confirms the Occurrence
            is completed (or if TaskHub is satisfied the Occurrence is
            completed) then the Tasker Funds for that Occurrence will
            automatically be released by TaskHub from the Payment Account to the
            Tasker.
          </li>
          <li className="flex">
            <span className="mr-2">1.21</span>
            The Poster may elect to pause automatic payment of Tasker Funds for
            an Occurrence within 24 hours from when the Tasker confirms the
            Occurrence is completed. If the Poster pauses such automatic payment
            in accordance with this clause, then the Tasker Funds will not be
            released by TaskHub from the Payment Account to the Tasker until the
            Poster also confirms that the Occurrence is completed.
          </li>
        </ul>
        <p className="font-extrabold my-4">2. TASKHUB'S ROLE AND OBLIGATIONS</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">2.1</span>
            TaskHub provides the TaskHub Platform only, enabling Users to
            publish and make Offers on Posted Tasks or publish Offers for
            Services or make Instant Claims of Tasker Listings.
          </li>
          <li className="flex">
            <span className="mr-2">2.2</span>
            TaskHub only permits individuals over 18 years of age to become
            Users.
          </li>
          <li className="flex">
            <span className="mr-2">2.3</span>
            Users must be natural people but can specify within their account
            description that they represent a business entity.
          </li>
          <li className="flex">
            <span className="mr-2">2.4</span>
            At its absolute discretion, TaskHub may refuse to allow any person
            to register or create an account with TaskHub or cancel or suspend
            or modify any existing account including if TaskHub reasonably forms
            the view that a User's conduct (including a breach of this
            Agreement) is detrimental to the operation of the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">2.5</span>
            Registering and creating an account with TaskHub is free. There is
            no charge for a Poster to post tasks, or for other TaskHub Users to
            review content on the TaskHub Platform, including Posted Tasks.
          </li>
          <li className="flex">
            <span className="mr-2">2.6</span>
            TaskHub accepts no liability for any aspect of the Poster and Tasker
            interaction, including but not limited to the description,
            performance or delivery of Services.
          </li>
          <li className="flex">
            <span className="mr-2">2.7</span>
            TaskHub has no responsibility and makes no warranty as to the truth
            or accuracy of any aspect of any information provided by Users,
            including, but not limited to, the ability of Taskers to perform
            tasks or supply items, or the honesty or accuracy of any information
            provided by Posters or the Posters' ability to pay for the Services
            requested.
          </li>
          <li className="flex">
            <span className="mr-2">2.8</span>
            Except for liability in relation to any Non-excludable Condition,
            the TaskHub Service is provided on an "as is" basis, and without any
            warranty or condition, express or implied. To the extent permitted
            by law, we and our suppliers specifically disclaim any implied
            warranties of title, merchantability, fitness for a particular
            purpose and non-infringement.
          </li>
          <li className="flex">
            <span className="mr-2">2.9</span>
            TaskHub has no obligation to any User to assist or involve itself in
            any dispute between Users, although may do so to improve User
            experience.
          </li>
          <li className="flex">
            <span className="mr-2">2.10</span>
            You understand and agree that TaskHub does not undertake any
            investigation in relation to any tasker or third party service
            provider before they are admitted to the platform, including
            criminal checks, verification of qualification or license held, or
            any character or other checks of the suitability of a tasker or
            third party service provider to perform any task which they may
            claim to be able to provide on the platform. You understand and
            agree that you are solely responsible for conducting any appropriate
            background checks and obtaining references, licenses,
            certifications, or proof of insurance prior to engaging a tasker to
            perform services. You further understand and agree that you are
            solely responsible for making your own evaluations, decisions and
            assessments about choosing a tasker. You agree to assume all risks
            and you agree to expressly release, indemnify and hold harmless
            TaskHub from any and all loss, liability, injury, death, damage, or
            costs arising or in any way related to the services.
          </li>
        </ul>
        <p className="font-extrabold my-4">3. USER OBLIGATIONS</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            {" "}
            <span className="mr-2">3.1</span> You will at all times:
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(a)</span>
            comply with this Agreement (including all Policies) and all
            applicable laws and regulations;
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(b)</span> only post accurate information on
            the TaskHub Platform;
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2"> (c)</span>
            ensure that You are aware of any laws that apply to You as a Poster
            or Tasker, or in relation to using the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">3.2</span>
            You agree that any content (whether provided by TaskHub, a User or a
            third party) on the TaskHub Platform may not be used on third party
            sites or for other business purposes without TaskHub prior
            permission.
          </li>
          <li className="flex">
            <span className="mr-2">3.3</span>
            You must not use the TaskHub Platform for any illegal or immoral
            purpose.
          </li>
          <li className="flex">
            <span className="mr-2">3.4</span>
            You must maintain control of Your TaskHub account at all times. This
            includes not allowing others to use Your account, or by transferring
            or selling Your account or any of its content to another person.
          </li>
          <li className="flex">
            <span className="mr-2">3.5</span>
            You grant TaskHub an unrestricted, worldwide, royalty-free licence
            to use, reproduce, modify and adapt any content and information
            posted on the TaskHub r Platform for the purpose of publishing
            material on the TaskHub Platform and as otherwise may be required to
            provide the TaskHub Service, for the general promotion of the
            TaskHub Service, and as permitted by this Agreement.
          </li>
          <li className="flex">
            <span className="mr-2">3.6</span>
            You agree that any information posted on the TaskHub Platform must
            not, in any way whatsoever, be potentially or actually harmful to
            TaskHub or any other person. Harm includes, but is not limited to,
            economic loss that will or may be suffered by TaskHub.
          </li>
          <li className="flex">
            <span className="mr-2">3.7</span>
            Without limiting any provision of this Agreement, any information
            You supply to TaskHub or publish in an Offer or a Posted Task
            (including as part of an Offer) must be up to date and kept up to
            date and must not:
          </li>
          <li className="flex">
            <span className="mr-2">(a)</span> be false, inaccurate or misleading
            or deceptive;
          </li>
          <li className="flex">
            <span className="mr-2">(b)</span>
            be fraudulent or involve the sale of counterfeit or stolen items;
          </li>
          <li className="flex">
            <span className="mr-2">(c)</span>
            infringe any third party's copyright, patent, trademark, trade
            secret or other proprietary rights or intellectual property rights,
            rights of publicity, confidentiality or privacy;
          </li>
          <li className="flex">
            <span className="mr-2">(d)</span>
            violate any applicable law, statute, ordinance or regulation
            (including, but not limited to, those governing export and import
            control, consumer protection, unfair competition, criminal law,
            antidiscrimination and trade practices/fair trading laws);
          </li>
          <li className="flex">
            <span className="mr-2">(e)</span> be defamatory, libellous,
            threatening or harassing;
          </li>
          <li className="flex">
            <span className="mr-2">(f)</span>
            be obscene or contain any material that, in TaskHub 's sole and
            absolute discretion, is in any way inappropriate or unlawful,
            including, but not limited to obscene, inappropriate or unlawful
            images; or
          </li>
          <li className="flex">
            <span className="mr-2">(g)</span>
            contain any malicious code, data or set of instructions that
            intentionally or unintentionally causes harm or subverts the
            intended function of any TaskHub Platform, including, but not
            limited to viruses, trojan horses, worms, time bombs, cancelbots,
            easter eggs or other computer programming routines that may damage,
            modify, delete, detrimentally interfere with, surreptitiously
            intercept, access without authority or expropriate any system, data
            or Personal Information.
          </li>
          <li className="flex">
            <span className="mr-2">3.8</span>
            TaskHub Platform may from time to time engage location-based or
            map-based functionality. The TaskHub Platform may display the
            location of Posters and Taskers to persons browsing the TaskHub
            Platform. A User should never disclose personal details such as the
            Poster's full name, street number, phone number or email address in
            a Posted Task or in any other public communication on the TaskHub
            Platform.
          </li>
          <li className="flex">
            <span className="mr-2">3.9</span>
            If You are a Tasker, You must have the right to provide Services
            under a Task Contract and to work in the jurisdiction where the
            Services are performed. You must comply with tax and regulatory
            obligations in relation to any payment (including Tasker Funds)
            received under a Task Contract.
          </li>
          <li className="flex">
            <span className="mr-2">3.10</span>
            You must not, when supplying Services, charge a Poster any fees on
            top of the Tasker Funds. However, the parties to a Task Contract may
            agree to amend the Agreed Price through the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">3.11</span>
            You must not request payments outside of the TaskHub Platform from
            the Poster for the Services except to the extent permitted by clause
            3.12 and only if the TaskHub Platform does not facilitate the
            reimbursement via the Payment Account of costs considered in clause
            3.12.
          </li>
          <li className="flex">
            <span className="mr-2">3.12</span>
            If a Tasker agrees to pay some costs of completing the Services
            (such as equipment to complete the Services), the Tasker is solely
            responsible for obtaining any reimbursement from the Poster. TaskHub
            advises Taskers not to agree to incur costs in advance of receiving
            the payment for these costs, unless the Tasker is confident the
            Poster will reimburse the costs promptly.
          </li>
          <li className="flex">
            <span className="mr-2">3.13</span>
            For the proper operation of the TaskHub Platform (including
            insurance, proper pricing and compliance with Policies), the Tasker
            must ensure that, if it subcontracts any part of the performance of
            the Services to a third party in accordance with a Task Contract,
            then that third party must also be a registered User of the TaskHub
            Platform.
          </li>
          <li className="flex">
            <span className="mr-2">3.14</span>
            If TaskHub determines at its sole discretion that You have breached
            any obligation under this clause 3 or that You have breached one or
            more Task Contracts, it reserves the rights to remove any content,
            Posted Task or Offer You have submitted to the TaskHub Service or
            cancel or suspend Your account and/or any Task Contracts.
          </li>
        </ul>
        <p className="font-extrabold my-4">4. FEES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">4.1</span>A Poster Service Fee is payable to
            TaskHub in respect of bookings made on the Platform. When a Customer
            accepts a Tasker's offer a Task Contract is formed between the two
            parties. At this time the Customer will be charged the Agreed Price
            plus the Poster Service Fee.
          </li>
          <li className="flex">
            <span className="mr-2">4.2</span>
            When a Customer releases the Task Payment to the Tasker, the Tasker
            Service Fee and the Poster Service Fee will be retained by TaskHub.
          </li>
          <li className="flex">
            <span className="mr-2">4.3</span>
            The Poster Service Fee and the Tasker Service Fee include GST (or
            equivalent tax on supplies, including VAT).
          </li>
          <li className="flex">
            <span className="mr-2">4.4</span>
            All Fees and charges payable to TaskHub are non-cancellable and
            non-refundable, save for Your rights under any Non-Excludable
            Conditions.
          </li>
          <li className="flex">
            <span className="mr-2">4.5</span>
            If TaskHub introduces a new service on the TaskHub Platform, the
            Fees applying to that service will be payable from the launch of the
            service.
          </li>
          <li className="flex">
            <span className="mr-2">4.6</span>
            TaskHub reserves the right to amend the amount of the Poster Service
            Fee from time to time and any changes will be updated on TaskHub's
            website.
          </li>
        </ul>
        <p className="font-extrabold my-4">5. PAYMENTS AND REFUNDS</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            {" "}
            <span className="mr-2">5.1</span>
            If the Task Contract is cancelled for any reason (by a Poster, a
            Tasker or under this Agreement) prior to the commencement of the
            Task Contract, then if TaskHub is reasonably satisfied that the
            Agreed Price should be returned to the Poster then the Agreed Price
            will be refunded to the Poster as Stored Value and a Cancellation
            Admin Fee will be due to TaskHub by the User who the cancellation of
            the Task Contract is attributable to under clause 5.5 or 5.6.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.2</span>
            TaskHub may decide in its absolute discretion to refund the Agreed
            Price back onto the Poster's credit card instead of Stored Value or
            waive the Cancellation Admin Fee.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.3</span>
            Any amount returned by TaskHub to a Poster on behalf of a Tasker
            under clause 5.1 will be a debt owed by the Tasker to TaskHub and
            may be offset by TaskHub against any other payments owed at any time
            to the Tasker.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.4</span>
            Any outstanding Cancellation Admin Fee owed by a User under clause
            5.1 will be a debt owed by that User to TaskHub and may also be
            offset by TaskHub against any other payments owed at any time to the
            User.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.5</span>
            Cancellation of a Task Contract will be attributable to the Tasker
            where:
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(a)</span>
            the Poster and the Tasker mutually agree to cancel the Task
            Contract; or
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(b)</span>
            following reasonable but unsuccessful attempts by a Poster to
            contact a Tasker to perform the Task Contract, the Task Contract is
            cancelled by the Poster; or
          </li>{" "}
          <li>
            {" "}
            <span className="mr-2">(c)</span> the Tasker cancels the Task
            Contract; or
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(d)</span>a Task Contract is cancelled in
            accordance with clause 3.14 as a result of the Tasker’s actions or
            breach.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.6</span>A Cancellation of a Task Contract
            will be attributable to a Poster where:
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(a)</span>
            the Poster cancels the Task Contract (other than in accordance with
            clause 5.5(b)); or
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">(b)</span>a Task Contract is cancelled in
            accordance with clause 3.14 as a result of the Poster’s actions or
            breach.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.7</span>
            If the parties agree to any additional cancellation fee payable
            under the Task Contract, it is the responsibility of the party to
            claim any amount owed directly from the other.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.8</span>
            TaskHub may take up to 14 days to return the Agreed Price (less the
            Cancellation Admin Fee, if applicable) to the Poster.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.9</span>
            If, for any reason, the Tasker Funds cannot be transferred or
            otherwise made to the Tasker or returned to the Poster (as the case
            may be) or no claim is otherwise made for the Tasker Funds, the
            Tasker Funds will remain in the Payment Account until paid or
            otherwise for up to three months from the date the Poster initially
            paid the Agreed Price into the Payment Account.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.10</span>
            Following the 3 months referred to in clause 5.9, and provided there
            is still no dispute in respect of the Tasker Funds, the Tasker Funds
            will be credited to the Poster as Stored Value.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">5.11</span>
            If the Task Contract is cancelled and a User who is party to the
            Task Contract can show that work under a Task Contract was
            commenced, then the amount of the Agreed Price to be returned to the
            Poster will be conditional upon the mediation and dispute process in
            clause 18. However, the Cancellation Admin Fee will always be due in
            accordance with clause 5.1.
          </li>
        </ul>
        <p className="font-extrabold my-4">6. STORED VALUE</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">6.1</span> Stored Value:
          </li>
          <li className="flex">
            <span className="mr-2">(a)</span>
            can be used by the credited User to pay for any new Services via the
            TaskHub Platform;
          </li>
          <li className="flex">
            <span className="mr-2">(b)</span>
            are not refundable or redeemable for cash;
          </li>
          <li className="flex">
            <span className="mr-2">(c)</span>
            cannot be replaced, exchanged or reloaded or transferred to another
            card or account;
          </li>
          <li className="flex">
            <span className="mr-2">(d)</span>
            are valid for 12 months from the date on which that particular
            Stored Value is applied to a User's account, the date of issue or
            purchase or any expiry date applied by TaskHub (conditional upon any
            contrary specific jurisdictional legislative requirements);
          </li>
          <li className="flex">
            <span className="mr-2">(e)</span>
            if the Stored Value is acquired other than under this Agreement, it
            may also be conditional on compliance with additional, or different,
            terms and conditions, as specified in relation to Stored Value, such
            as a restriction on when the Stored Value is redeemable (for example
            only for a User's first Task Contract), specify a minimum Services
            value, or specify a maximum credit or discount value; and
          </li>
          <li className="flex">
            <span className="mr-2">(f)</span>
            must not be reproduced, copied, distributed, or published directly
            or indirectly in any form or by any means for use by an entity other
            than the credited User, or stored in a data retrieval system,
            without TaskHub 's prior written permission.
          </li>
          <li className="flex">
            <span className="mr-2">6.2</span>
            The User credited with a Stored Value is solely responsible for the
            security of any Stored Value. Save for the Non-Excludable
            Conditions, TaskHub will have no liability for any loss or damage to
            the Stored Value and does not have any obligation to replace Stored
            Value.
          </li>
          <li className="flex">
            <span className="mr-2">6.3</span>
            TaskHub will not accept, and may refuse or cancel, any Stored Value,
            which it reasonably determines in its discretion, have been used in
            breach of this Agreement or have been forged, tampered with, or are
            otherwise fraudulent and TaskHub reserves the right to refer any
            suspected fraudulent activity to relevant law enforcement
            authorities. In particular, Stored Value, such as promotional
            coupons, vouchers or codes distributed or circulated without our
            approval, for example on an internet message board or on a
            "bargains" website, are not valid for use and may be refused or
            cancelled.
          </li>
          <li className="flex">
            <span className="mr-2">6.4</span>
            TaskHub is entitled to any value on Stored Value which is not
            redeemed before the Stored Value expires or is cancelled by TaskHub.
          </li>
        </ul>
        <p className="font-extrabold my-4">7. BUSINESS PARTNERS</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">7.1</span>
            TaskHub may enter into agreements with Business Partners and may
            seek to engage Taskers in the provision of Business Services.
            Taskers who agree to perform Business Services for Business Partners
            acknowledge and agree that TaskHub and the Business Partner may
            on-sell Services supplied to third parties for an increased fee.
          </li>
          <li className="flex">
            <span className="mr-2">7.2</span>
            Business Partners may require Taskers providing Business Services to
            be approved or hold particular qualifications. TaskHub may assist
            Business Partners to locate suitably qualified Taskers. TaskHub
            makes no warranty that it will promote any or all suitably qualified
            Taskers to Business Partners.
          </li>
          <li className="flex">
            <span className="mr-2">7.3</span>
            Business Partners may require Taskers to enter into a Business
            Partner Contract before providing Business Services.
          </li>
          <li className="flex">
            <span className="mr-2">7.4</span>
            Where a Tasker accepts a Posted Task with a Business Partner:
          </li>
          <li className="flex">
            <span className="mr-2">(a)</span>
            the Tasker must provide Business Services to the Business Partner in
            accordance with the Task Contract and any applicable Business
            Partner Contract; and
          </li>
          <li className="flex">
            <span className="mr-2">(b)</span>
            the terms of the Business Partner Contract will prevail to the
            extent of any inconsistency.
          </li>
        </ul>
        <p className="font-extrabold my-4">8. PAYMENT FACILITY</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            {" "}
            <span className="mr-2">8.1</span>
            TaskHub uses a Payment Provider to operate the Payment Account.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">8.2</span>
            In so far as it is relevant to the provision of the Payment Account,
            the terms at (http of the payment processor) are incorporated into
            this Agreement and will prevail over this Agreement to the extent of
            any inconsistency in relation to the provision of the Payment
            Account.
          </li>
          <li className="flex">
            {" "}
            <span className="mr-2">8.3</span>
            If TaskHub changes its Payment Provider You may be asked to agree to
            any further additional terms with those providers. If you do not
            agree to them, you will be given alternative means of payment.
          </li>
        </ul>
        <p className="font-extrabold my-4"> 9. THIRD PARTY SERVICES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">9.1</span>
            TaskHub may from time to time include Third Party Services on the
            TaskHub Platform. These Third Party Services are not provided by
            TaskHub.
          </li>
          <li className="flex">
            <span className="mr-2">9.2</span>
            Third Party Services are offered to Users pursuant to the third
            party's terms and conditions. Third Party Services may be promoted
            on the TaskHub Platform as a convenience to our Users who may find
            the Third Party Services of interest or of use.
          </li>
          <li className="flex">
            <span className="mr-2">9.3</span>
            If a User engages with any Third-Party Service provider, the
            agreement will be directly between the User and that Third Party
            Service provider.
          </li>
          <li className="flex">
            <span className="mr-2">9.4</span>
            TaskHub makes no representation or warranty as to the Third Party
            Services. However, to help us continue to improve our TaskHub
            Platform, Users may inform TaskHub of their Third Party Service
            experience here.
          </li>
        </ul>
        <p className="font-extrabold my-4"> 10. VERIFICATION</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">10.1 </span>
            TaskHub may use Identity Verification Services.
          </li>
          <li className="flex">
            <span className="mr-2">10.2</span>
            You agree that TaskHub Identity Verification Services may not be
            fully accurate as all TaskHub Services are dependent on
            User-supplied information and/or information or Verification
            Services provided by third parties.
          </li>
          <li className="flex">
            <span className="mr-2">10.3</span>
            You are solely responsible for identity verification and TaskHub
            accepts no responsibility for any use that is made of an TaskHub
            Identity Verification Service.
          </li>
          <li className="flex">
            <span className="mr-2"> 10.4</span>
            TaskHub Identity Verification Services may be modified at any time.
          </li>
          <li className="flex">
            <span className="mr-2">10.5</span>
            The TaskHub Platform may also include a User-initiated feedback
            system to help evaluate Users.
          </li>
        </ul>
        <p className="font-extrabold my-4">11. FEEDBACK</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">11.1</span>
            You can complain about any comment made on the TaskHub Platform
            using the 'Report' function of the TaskHub Platform or contact
            TaskHub via the TaskHub Platform.
          </li>
          <li className="flex">
            <span className="mr-2">11.2</span>
            TaskHub is entitled to suspend or terminate Your account at any time
            if TaskHub, in its sole and absolute discretion, is concerned by any
            feedback about You, or considers Your feedback rating to be
            problematic for other TaskHub Users.
          </li>
        </ul>
        <p className="font-extrabold my-4">12. LIMITATION OF LIABILITY</p>
        <p className="ml-4 text-[12px]">
          Please see Your Country Specific Terms for the applicable exclusions
          and limitations of liability.
        </p>
        <p className="font-extrabold my-4">13. PRIVACY</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">13.1</span>
            Third Party Service providers will provide their service pursuant to
            their own Privacy Policy. Prior to acceptance of any service from a
            third party, you must review and agree to their terms of service
            including their privacy policy.
          </li>
          <li className="flex">
            <span className="mr-2">13.2</span>Task Hub will endeavor to permit
            you to transact anonymously on the TaskHub Platform. However, in
            order to ensure TaskHub can reduce the incidence of fraud and other
            behavior in breach of the Community Guidelines, TaskHub reserves the
            right to ask Users to verify themselves in order to remain a User.
          </li>
        </ul>
        <p className="font-extrabold my-4">
          14. MODIFICATIONS TO THE AGREEMENT
        </p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">14.1</span>
            TaskHub may modify this Agreement or the Policies (and update the
            TaskHub pages on which they are displayed) from time to time.
            TaskHub will send notification of such modifications to Your TaskHub
            account or advise You the next time You login.
          </li>
          <li className="flex">
            <span className="mr-2">14.2</span>
            When You actively agree to amended terms (for example, by clicking a
            button saying "I accept") or use the TaskHub Platform in any manner,
            including engaging in any acts in connection with a Task Contract,
            the amended terms will be effective immediately. In all other cases,
            the amended terms will automatically be effective 30 days after they
            are initially notified to You.
          </li>
          <li className="flex">
            <span className="mr-2">14.3</span>
            If You do not agree with any changes to this Agreement (or any of
            our Policies), You must either terminate your account or You must
            notify TaskHub who will terminate Your TaskHub account, and stop
            using the TaskHub Service.
          </li>
        </ul>
        <p className="font-extrabold my-4">15. NOTICES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">15.1</span>
            Except as stated otherwise, any notices must be given by registered
            ordinary post or by email, either to Task Hub’s contact address as
            displayed on the TaskHub Platform, or to TaskHub Users' contact
            address as provided at registration. Any notice shall be deemed
            given:
          </li>
          <li className="flex">
            <span className="mr-2">(a)</span>
            if sent by email, 24 hours after email is sent, unless the User is
            notified that the email address is invalid or the email is
            undeliverable, and
          </li>
          <li className="flex">
            <span className="mr-2">(b)</span>
            if sent by pre-paid post, three Business Days after the date of
            posting, or on the seventh Business Day after the date of posting if
            sent to or posted from outside the jurisdiction in which You have
            Your TaskHub Platform account.
          </li>
          <li className="flex">
            <span className="mr-2">15.2</span>
            Notices related to performance of any Third Party Service must be
            delivered to such third party as set out in the Third Party Service
            provider's terms and conditions.
          </li>
        </ul>
        <p className="font-extrabold my-4">
          16. MEDIATION AND DISPUTE RESOLUTION
        </p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">16.1</span>
            TaskHub encourages You to try and resolve disputes (including claims
            for returns or refunds) with other Users directly. Accordingly, you
            acknowledge and agree that TaskHub may, in its absolute discretion,
            provide Your information as it decides is suitable to other parties
            involved in the dispute.
          </li>
          <li className="flex">
            <span className="mr-2">16.2</span>
            If a dispute arises with another User, you must co-operate with the
            other User and make a genuine attempt to resolve the dispute.
          </li>
          <li className="flex">
            <span className="mr-2">16.3</span>
            TaskHub may elect to assist Users resolve disputes. Any User may
            refer a dispute to TaskHub. You must co-operate with any
            investigation undertaken by TaskHub. TaskHub reserves the right to
            make a final determination (acting reasonably) based on the
            information supplied by the Users and direct the Payment Provider to
            make payment accordingly. You may raise your dispute with the other
            User or TaskHub 's determination in an applicable court or tribunal.
          </li>
          <li className="flex">
            <span className="mr-2">16.4</span>
            TaskHub has the right to hold any Agreed Price that is the subject
            of a dispute in the Payment Account, until the dispute has been
            resolved.
          </li>
          <li className="flex">
            <span className="mr-2">16.5</span>
            TaskHub may provide access to a Third Party Dispute Service. If such
            a service is provided, either party may request the other party to
            submit to the Third Party Dispute Service if the parties have failed
            to resolve the dispute directly. Terms and conditions for the Third
            Party Dispute Service will be available on request. The Third Party
            Dispute Service is a Third Party Service and Users are responsible
            for paying any costs associated with the Third Party Dispute Service
            in accordance with the Third Party Dispute Service terms and
            conditions.
          </li>
          <li className="flex">
            <span className="mr-2">16.6</span>
            Disputes with any Third Party Service provider must proceed pursuant
            to any dispute resolution process set out in the terms of service of
            the Third Party Service provider.
          </li>
          <li className="flex">
            <span className="mr-2">16.7</span>
            If You have a complaint about the TaskHub Service please contact us
            here.
          </li>
          <li className="flex">
            <span className="mr-2">16.8</span>
            If TaskHub provides information about other Users to You for the
            purposes of resolving disputes under this clause, You acknowledge
            and agree that such information will be used only for the purpose of
            resolving the dispute (and no other purpose) and that you will be
            responsible and liable to TaskHub for any costs, losses or
            liabilities incurred by TaskHub in relation to any claims relating
            to any other use of information not permitted by this Agreement.
          </li>
        </ul>
        <p className="font-extrabold my-4">17. TERMINATION</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">17.1</span>
            Either You or TaskHub may terminate your account and this Agreement
            at any time for any reason.
          </li>
          <li className="flex">
            <span className="mr-2">17.2</span>
            Termination of this Agreement does not affect any Task Contract that
            has been formed between TaskHub Users.
          </li>
          <li className="flex">
            <span className="mr-2">17.3</span>
            Third Party Services are conditional upon, and governed by, Third
            Party Service provider terms and conditions.
          </li>
          <li className="flex">
            <span className="mr-2">17.4</span>
            Sections 4 (Fees), 13 (Limitation of Liability) and 18 (Mediation
            and Dispute Resolution) and any other terms which by their nature
            should continue to apply, will survive any termination or expiration
            of this Agreement.
          </li>
          <li className="flex">
            <span className="mr-2">17.5</span>
            If Your account or this Agreement are terminated for any reason then
            You may not without TaskHub's consent (in its absolute discretion)
            create any further accounts with TaskHub and we may terminate any
            other accounts You operate.
          </li>
        </ul>
        <p className="font-extrabold my-4">18. GENERAL</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">18.1</span>
            This Agreement is governed by the laws specified in Your Country
            Specific Terms.
          </li>
          <li className="flex">
            <span className="mr-2">18.2</span>
            The provisions of this Agreement are severable, and if any provision
            of this Agreement is held to be invalid or unenforceable, such
            provision may be removed and the remaining provisions will be
            enforceable.
          </li>
          <li className="flex">
            <span className="mr-2">18.3</span>
            This Agreement may be assigned or novated by TaskHub to a third
            party without your consent. In the event of an assignment or
            novation the User will remain bound by this Agreement.
          </li>
          <li className="flex">
            <span className="mr-2">18.4</span>
            This Agreement sets out the entire understanding and agreement
            between the User and TaskHub with respect to its subject matter.
          </li>
        </ul>
        <p className="my-8 font-bold">
          Revised May 2023 copyright &copy; TaskHub 2024
        </p>
        {/* <p className="font-extrabold my-4">18. GENERAL</p> */}
        <p className="font-extrabold my-4">APPENDIX A:</p>
        <p className="font-extrabold my-4">MODEL TASK CONTRACT:</p>
        <p className="my-4">
          The terms used in this Task Contract have the meaning set out in the
          TaskHub Glossary. A Task Contract is created in accordance with the
          TaskHub Agreement. Unless otherwise agreed, the Poster and the Tasker
          enter into a Task Contract on the following terms:
        </p>
        <p className="font-extrabold my-4">1. COMMENCEMENT DATE AND TERM</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2"> 1.1</span>
            The Task Contract is created when the Poster accepts the Tasker's
            Offer on a Posted Task to provide Services. When using Search
            Assist, the Task Contract is created when the Tasker makes an
            Instant Claim.
          </li>
          <li className="flex">
            <span className="mr-2">1.2</span>
            The Task Contract will continue until terminated in accordance with
            clause 7.
          </li>
        </ul>
        <p className="font-extrabold my-4">2. SERVICES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2"> 2.1</span>
            The Tasker will perform Services in a proper and workmanlike manner.
          </li>
          <li className="flex">
            <span className="mr-2">2.2</span>
            The Tasker must perform the Services at the time and location
            agreed.
          </li>
          <li className="flex">
            <span className="mr-2">2.2</span>
            The Tasker must perform the Services at the time and location
            agreed.
          </li>
          <li className="flex">
            <span className="mr-2">2.3</span>
            The parties must perform their obligations in accordance with any
            other terms or conditions agreed by the parties during or subsequent
            to the creation of the Task Contract.
          </li>
          <li className="flex">
            <span className="mr-2">2.4</span>
            The parties acknowledge that the Task Contract is one of personal
            service where the Poster selected the Tasker to perform the
            Services. Therefore, the Tasker must not subcontract any part of the
            Services to any third party without the Poster's consent.
          </li>
          <li className="flex">
            <span className="mr-2">2.4</span>
            The Tasker remains responsible and liable at all times to the Poster
            for any acts or omissions of a subcontractor as if those acts or
            omissions had been made by the Tasker.
          </li>
        </ul>
        <p className="font-extrabold my-4">3. WARRANTIES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2"> 3.1</span>
            Each party warrants that the information provided in the creation of
            the Task Contract is true and accurate. 3.2 The Tasker warrants that
            they have (and any subcontractor has) the right to work and provide
            Services and hold all relevant licenses in the jurisdiction where
            the Services are performed.
          </li>
        </ul>
        <p className="font-extrabold my-4">4. PAYMENT OR CANCELLATION</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">4.1</span>
            Upon the creation of the Task Contract, the Poster must pay the
            Agreed Price into the Payment Account. 4.2 Upon the Services being
            completed, the Tasker will provide notice on the TaskHub Platform.
            4.3 The Poster will be prompted to confirm the Services are
            complete. If the Tasker has completed the Services in accordance
            with clause 2, the Poster must use the TaskHub Platform to release
            the Tasker Funds from the Payment Account. For Recurring Services,
            the Tasker Funds for an Occurrence will automatically be released by
            TaskHub from the Payment Account to the Tasker unless paused by the
            Poster in accordance with the User's TaskHub Agreement. 4.4 If the
            parties agree to cancel the Task Contract, or the Poster is unable
            to contact the Tasker to perform the Task Contract, the Tasker Funds
            will be dealt with in accordance with the User's TaskHub Agreement.
          </li>
        </ul>
        <p className="font-extrabold my-4">5. LIMITATION OF LIABILITY</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">5.1</span>
            Except for liability in relation to a breach of a Non-excludable
            Condition, the parties exclude all Consequential Loss arising out of
            or in connection to the Services, and any claims by any third
            person, or the Task Contract, even if the party causing the breach
            knew the loss was possible or the loss was otherwise foreseeable.
            5.2 Subject to any insurance or agreement to the contrary, the
            liability of each party to the other except for a breach of any
            Non-Excludable Condition is capped at the Agreed Price.
          </li>
        </ul>
        <p className="font-extrabold my-4">6. DISPUTES</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">6.1</span>
            If a dispute arises between the parties, the parties will attempt to
            resolve the dispute within 14 days by informal negotiation (by
            phone, email or otherwise). 6.2 If the parties are unable to resolve
            the dispute in accordance with clause 6.1, either party may refer
            the dispute to TaskHub and act in accordance with clause 18 of the
            TaskHub Agreement.
          </li>
        </ul>
        <p className="font-extrabold my-4">7. TERMINATION OF CONTRACT</p>
        <p className="ml-4">The Task Contract will terminate when:</p>
        <ul className="ml-4 text-[12px] flex flex-col space-y-2 text-justify">
          <li className="flex">
            <span className="mr-2">(a)</span>
            the Services are completed and the Agreed Price is released from the
            Payment Account;
          </li>
          <li className="flex">
            <span className="mr-2">(b)</span>a party is terminated or suspended
            from the TaskHub Platform, at the election of the other party;
          </li>
          <li className="flex">
            <span className="mr-2">(c)</span>otherwise agreed by the parties or
            the Third Party Dispute Service; or
          </li>
          <li className="flex">
            <span className="mr-2">(c)</span>notified by TaskHub in accordance
            with the party's TaskHub Agreement.
          </li>
        </ul>
        <p className="font-extrabold my-4">8. APPLICATION OF POLICIES</p>
        <p className="ml-4">
          The parties incorporate by reference the applicable Policies.
        </p>
        <p className="font-extrabold my-4">9. GOVERNING LAW</p>
        <p className="ml-4">
          The Task Contract is governed by the laws of the jurisdiction where
          the Posted Task was posted on the TaskHub Platform.
        </p>
        <p className="my-8 font-bold">
          Revised May 2023 copyright &copy; TaskHub 2024
        </p>
        <p className="font-extrabold my-4">TASKHUB GLOSSARY</p>
        <div className=" text-[12px] flex flex-col space-y-4 text-justify">
          <p className="">
            <span className="mr-1 font-bold">"Agreement"</span>
            means the most updated version of the agreement between TaskHub and
            a User.
          </p>
          <p>
            <span className="mr-1 font-bold">"Agreed Price"</span>means agreed
            price for Services (including any variation) paid into the Payment
            Account made by the Poster but does not include any costs incurred
            by the Tasker when completing Services which the Poster agrees to
            reimburse.
          </p>
          <p>
            <span className="mr-1 font-bold">
              "TaskHub", "we" "us" or "our"
            </span>
            means the legal entity prescribed in Your Country Specific Terms.
          </p>
          <p>
            <span className="mr-1 font-bold">"TaskHub Badge"</span>
            means a badge that may be issued to a User based on the User meeting
            certain qualifications or other thresholds, including Verification
            Icons, as determined and set by TaskHub.
          </p>
          <p>
            <span className="mr-1 font-bold">"TaskHub Platform"</span>
            means the TaskHub website at <b>https://www.taskhub.com/</b>,
            TaskHub smartphone app, and any other affiliated platform that may
            be introduced from time to time.
          </p>
          <p>
            <span className="mr-1 font-bold">"TaskHub Service"</span>
            means the service of providing the TaskHub Platform.
          </p>
          <p>
            <span className="mr-1 font-bold">"Badge"</span>
            means an TaskHub Badge and Verification Icon.
          </p>
          <p>
            <span className="mr-1 font-bold">"Business Day"</span>
            means a day on which banks are open for general business in the
            jurisdiction where Users have their TaskHub Platform account, other
            than a Saturday, Sunday or public holiday.
          </p>
          <p>
            <span className="mr-1 font-bold">"Business Partner Contract"</span>
            means a contract between a Business Partner and a Tasker to perform
            Business Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Business Partner"</span>
            means the business or individual that enters into an agreement with
            TaskHub to acquire Business Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Business Services"</span>
            means Services provided by a Tasker to a Business Partner acquired
            for the purpose of on selling to a third party (such as the Business
            Partner's customer)
          </p>
          <p>
            <span className="mr-1 font-bold">"Cancellation Admin Fee"</span>
            means the Fee payable by a Poster or a Tasker for cancelling a Task
            Contract and will not exceed 22% of the Agreed Price.
          </p>
          <p>
            <span className="mr-1 font-bold">"Consequential Loss"</span>
            means any loss, damage or expense recoverable at law:
          </p>
          <p className="flex">
            <span className="mr-2">(a)</span>
            other than a loss, damage or expense that would be suffered or
            incurred by any person in a similar situation to the person
            suffering or incurring the loss, damage or expense; or
          </p>
          <div className="flex flex-col space-y-2">
            <p className="flex">
              <span className="mr-2">(b)</span>
              which is a loss of:
            </p>
            <ul className="list-disc ml-4">
              <li>opportunity or goodwill;</li>
              <li>profits, anticipated savings or business;</li>
              <li>data; or</li>
              <li>
                value of any equipment, and any costs or expenses incurred in
                connection with the foregoing
              </li>
            </ul>
          </div>
          <p>
            <span className="mr-1 font-bold">"Country Specific Terms"</span>
            means those terms set out in Appendix B.
          </p>
          <p>
            <span className="mr-1 font-bold">"Customer"</span>
            means a User that uses the TaskHub Platform to search for particular
            Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Fees"</span>
            means all fees payable to TaskHub by Users including the Service
            Fee.
          </p>
          <p>
            <span className="mr-1 font-bold">
              "Identity Verification Services"
            </span>
            means the tools available to help Users verify the identity,
            qualifications or skills of other Users including mobile phone
            verification, verification of payment information, References,
            integration with social media, TaskHub Badges and Verification
            Icons.
          </p>
          <p>
            <span className="mr-1 font-bold">"Instant Claim"</span>
            means the acceptance of an Offer by a Tasker via the Search Assist
            function.
          </p>
          <p>
            <span className="mr-1 font-bold"> "Marketing Material"</span>
            means any updates, news and special offers in relation to TaskHub or
            its Third Party Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Non-excludable Condition"</span>
            means any implied condition, warranty or guarantee in a contract,
            the exclusion of which would contravene the law or cause any part of
            the contract to be void. Further detail on the Non-excludable
            Conditions for consumers in the United Kingdom and in Ireland is set
            out in the relevant Your Country Specific Terms.
          </p>
          <p>
            <span className="mr-1 font-bold">"Occurrence"</span>
            means each individual occurrence of services to be performed by a
            Tasker that form part of Recurring Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Offer"</span>
            means an offer made by a Tasker in response to a Posted Task to
            perform the Services, or an offer made by a Poster for the
            performance of Services by a Tasker when using Search Assist.
          </p>
          <p>
            <span className="mr-1 font-bold">"Payment Account"</span>
            means the account operated by the Payment Provider.
          </p>
          <p>
            <span className="mr-1 font-bold">"Payment Provider"</span>
            means an entity appointed by TaskHub that manages and operates the
            Payment Account including accepting payments from and making
            payments to Users.
          </p>
          <p>
            <span className="mr-1 font-bold">"Personal Information"</span>
            has the same meaning as described in Your Country Specific Terms.
          </p>
          <p>
            <span className="mr-1 font-bold">"Policies"</span>
            means the policies posted by TaskHub on the TaskHub Platform,
            including but not limited to the Community Guidelines.
          </p>
          <p>
            <span className="mr-1 font-bold">"Poster"</span>
            means a User that uses the TaskHub Platform to search for particular
            Services.
          </p>
          <p>
            <span className="mr-1 font-bold">"Posted Task"</span>
            means the Poster's request for Services published on the Platform
            (including via Search Assist), and includes the deadline for
            completion, price and description of the Services to be provided.
          </p>
          <p>
            <span className="mr-1 font-bold">"Poster Service Fee"</span>
            means the fee payable by the Poster to TaskHub as consideration for
            the TaskHub Services (and comprised as part of the Agreed Price)
            displayed to a Poster prior to entering into each Task Contract
          </p>
          <p>
            <span className="mr-1 font-bold">"Recurring Services"</span>
            means the same services procured by a Poster using the Search Assist
            feature from the same Tasker on a recurring basis, for example
            weekly, fortnightly or monthly.
          </p>
          <p>
            <span className="mr-1 font-bold">"Reference"</span>
            means a feature allowing a User to request other Users to post a
            reference on the TaskHub Platform endorsing that User.
          </p>
          <p>
            <span className="mr-1 font-bold">"Search Assist"</span>
            means a feature of the TaskHub Platform whereby a Poster can submit
            specific details of a Posted Task with TaskHub's assistance to
            calculate the Agreed Price and find potential Taskers to perform the
            Services. This may also be referred to on the TaskHub Platform as
            "Instant Booking".
          </p>
          <p>
            <span className="mr-1 font-bold">"Service Fee"</span>
            means the Poster Service Fee and the Tasker Service Fee.
          </p>
          <p>
            <span className="mr-1 font-bold">"Service"</span>
            means the services to be rendered as described in the Posted Task,
            including any variations or amendments agreed before or subsequent
            to the creation of a Task Contract and for Recurring Services the
            Services are the services to be performed under each Occurrence.
          </p>
          <p>
            <span className="mr-1 font-bold">"Stored Value"</span>
            means the physical or virtual card, coupon, voucher or code
            containing credit or a discount or refund provided as credit or
            anything else identified or described as <b>'Stored Value'</b> in
            this Agreement, for use on the TaskHub Platform.
          </p>
          <p>
            <span className="mr-1 font-bold">"Task Contract"</span>
            means the separate contract which is formed between a Poster and a
            Tasker for Services. In the absence of, or in addition to, any terms
            specifically agreed, the model terms of which are included in
            Appendix A to the Agreement apply to Task Contracts.
          </p>
          <p>
            <span className="mr-1 font-bold">"Tasker"</span>
            means a User who provides Services to Posters. "Tasker Funds" means
            the Agreed Price less the Service Fee.
          </p>
          <p>
            <span className="mr-1 font-bold">"Tasker Listing"</span>
            means a page published by a Tasker, containing details (including
            prices) of a service they are willing to provide to Posters.
          </p>
          <p>
            <span className="mr-1 font-bold">"Tasker Service Fee"</span>
            means the fee payable by the Tasker to TaskHub as consideration for
            the TaskHub Services (and comprised as part of the Agreed Price)
            displayed to a Tasker prior to entering into each Task Contract.
          </p>
          <p>
            <span className="mr-1 font-bold">
              "Third Party Dispute Service"
            </span>
            means a third party dispute resolution service provider used to
            resolve any disputes between Users.
          </p>
          <p>
            <span className="mr-1 font-bold">"Third Party Service"</span>
            means the promotions and links to services offered by third parties
            as may be featured on the TaskHub Platform from time to time.
          </p>
          <p>
            <span className="mr-1 font-bold">"User" or "You" </span>
            means the person who has signed up to use the TaskHub Platform,
            whether as the Customer or Service Provider.
          </p>
          <p>
            <span className="mr-1 font-bold">"Verification Icons"</span>
            means the icons available to be displayed on a User's profile and
            any such posts on the TaskHub Platform to confirm details such as a
            User's qualification, license, certificate or other skill.
          </p>
        </div>
        <p className="my-8 font-bold">
          Revised May 2023 copyright &copy; TaskHub 2024
        </p>
      </div>
    </div>
  );
};
