import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageCustomerAcceptancePolicyCAP from "../../../../images/about/customer-acceptance-policy-CAP.png"
import imageCustomerIdentificationProcedures from "../../../../images/about/customer_identification_procedures.png"
import AMLCFT from "../../../../misc/AML/AML_CFT_GUIDANCE_NOTES_Revised_2013__2_.pdf"
import Anti from "../../../../misc/AML/Anti-Money_Laundering__Suppression_of_Terrorist_Financing_Code_of_Practice_No._10_of_2014__1_.pdf"

const AMLPage = () => {
  return (
    <div id="aml">
      <div className={`content ${styles.content}`}>
        <Fade left>
          <h1 className={styles.h1_aml}>AML</h1>
          <h1>Overview:</h1>
          <p>
            Digi Bank Corporation’s AML and Know Your Customer (KYC) guidelines
            are governed and regulated by the following laws enacted in the
            Commonwealth of Dominica:
          </p>
          <ul>
            <li>
              <a
                className={styles.Atag}
                href="http://www.dominica.gov.dm/laws/2013/money_laundering_prevention_amendment_sro_2013.pdf"
                target="_blank"
              >
                Money Laundering (Prevention) Act S.R.O. 4 of 2013
              </a>
            </li>
            <li>
              <a className={styles.Atag} href={AMLCFT} target="_blank">
                Anti-Money Laundering Guidance Notes (Revised Edition) 2013
              </a>
            </li>
            <li>
              <a className={styles.Atag} href={Anti} target="_blank">
                The Proceeds of Crime Act S.R.O. 10 of 2014
              </a>
            </li>
            <li>
              <a
                className={styles.Atag}
                href="http://www.dominica.gov.dm/laws/1996/act8-1996.pdf"
                target="_blank"
              >
                Offshore Banking Act 8 of 1996 &amp; Amendments
              </a>
            </li>
            <li>
              <a
                className={styles.Atag}
                href="http://www.dominica.gov.dm/laws/2011/money_laundering_prevention_no8.pdf"
                target="_blank"
              >
                Money Laundering (Prevention) Act 8 of 2011
              </a>
            </li>
            <li>
              <a
                className={styles.Atag}
                href="http://www.dominica.gov.dm/laws/2008/act18-2008.pdf"
                target="_blank"
              >
                Financial Services Unit Act 18 of 2008
              </a>
            </li>
            <li>
              <a
                className={styles.Atag}
                href="http://www.dominica.gov.dm/laws/2003/act3-2003.pdf"
                target="_blank"
              >
                Suppression of the Financing of Terrorism Act 3 of 2003
              </a>
            </li>
          </ul>
          <p>
            The entire staff and directorship of Digi Bank are guided by the
            above code of conduct in execution of their AML responsibilities as
            individuals and a corporate. KYC policies are essential to any
            financial institution. Knowing whom you are doing business with can
            prevent a bank from inadvertently facilitating money laundering. If
            not, an inadequate or nonexistent KYC system can result in the bank,
            as well as individual employees becoming subjects to civil and/or
            criminal penalties.
          </p>
          <p>
            The objectives of KYC guidelines are to prevent banks from being
            used, intentionally or unintentionally, by criminal elements for
            money laundering activities. KYC procedures also enable banks to
            know and understand their customers and their financial dealings
            better, which in turn help them, manage their risks prudently.
          </p>
          <p>
            Banks with inadequate KYC risk management procedures may be subject
            to significant risks, especially legal and reputational ones. Sound
            KYC policies and procedures not only contribute to a bank’s overall
            safety and soundness, but also protect the integrity of the banking
            system by reducing the likelihood of banks becoming vehicles for
            money laundering, terrorist financing and other unlawful activities.
          </p>
        </Fade>
        <Grid className={styles.cap} container spacing={5}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Fade left>
              <img
                src={imageCustomerAcceptancePolicyCAP}
                alt="Customer Acceptance Policy CAP"
              />
            </Fade>
          </Grid>
          <Grid item lg={1} md={1} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Fade right>
              <h1>Customer Acceptance Policy CAP</h1>
              <p>
                “Customer” refers to any person or entity who opens or maintains
                an account, as well as beneficial owner(s), beneficiary/ies of
                transaction(s) performed by intermediaries, and entities or
                persons connected with high-risk financial transactions.
              </p>
              <p>
                The Bank must know the identity of all customers, authorized
                persons, and all the bona fides of potential customers must be
                confirmed and enquiries made into the nature of their
                business(es) and the source of their funds before opening of
                account(s). It is the responsibility of the Compliance Officer
                (CO) to satisfy him/her self that all Due Diligence (DD) and
                customer information requirements have been satisfactorily
                completed.
              </p>
              <p>
                A “customer” will only be accepted by Digi Bank if he/she has
                satisfactorily met all requirements outlined for the opening of
                accounts. Such requirements must be satisfied by notarized
                documentation which must be provided to the Bank. A soft copy
                sent electronically (for initial screening) and hard copy
                forwarded via courier to complete the account opening process.
              </p>
            </Fade>
          </Grid>
        </Grid>
        <Fade left>
          <p>
            The CAP enumerates explicit guidelines on the following aspects of
            customer relationship in the Bank.
          </p>
          <p>
            1. No account must be opened in anonymous or fictitious name(s).
          </p>
          <p>
            2. No account must be opened or closed where the branch is unable to
            verify the identity and/or obtain documents required as per the risk
            categorization due to non-cooperation of the customer or
            non-reliability of the data/information furnished to the Bank by the
            individual.
          </p>
          <p>
            3. The Bank has guidelines which allow for the closure of accounts
            without providing prior notice and or an explanation, should the
            Bank think that this decision protects its employees and its
            reputation.
          </p>
          <p>
            4. Circumstances in which a customer is permitted to act on behalf
            of another person/entity, should be clearly outlined in conformity
            with the established laws and practice of banking as there could be
            occasions when an account is operated by a mandate holder or where
            an account may be opened by an intermediary in the fiduciary
            capacity and in which case the identity of the intermediary as well
            as the customer must be established and verified, alongside the
            appropriate Power of Attorney (POA) or similar document.
          </p>
          <p>
            5. Necessary DD checks are conducted prior to opening new account(s)
            to ensure that the identity of the customer is not identical to any
            person identified with a criminal background or with banned entities
            such as individual terrorists or terrorist organizations available
            from circulars etc.
          </p>
          <p>
            6. Politically Exposed Persons (PEPs) are individuals who are or
            have been entrusted with prominent public functions or same in a
            foreign country or immediate family members of the same, e.g., Heads
            of States or of Governments, senior politicians, senior
            government/judicial/military officers, senior executives of
            state-owned corporations, important political party officials, etc.
            Branch/office should gather sufficient information on any
            person/customer of this category intending to establish a
            relationship and check all the information available on the person
            in the public domain. Ensure that adequate DD is conducted prior to
            establishing banking relationship(s), and Enhanced Due Diligence
            (EDD) is always used when dealing with this category of customers.
          </p>
          <p>
            Digi Bank MUST verify the identity of the prospect and seek the
            relevant information about the sources of funds before accepting the
            PEP as a customer and should be subjected to ongoing monitoring.
          </p>
          <p>
            Digi Bank does not accept cash deposits, does not issue cash to
            customers/does not conduct cash transactions nor does Digi Bank open
            coded or shell accounts.
          </p>
          <p>
            Digi Bank does not open accounts for other banks, e-currency
            providers or similar kinds of businesses. Business relationships are
            not established unless and until there is irrefutable proof
            concerning the prospective customer’s identity, and the purpose of
            and intended nature of the proposed business relationship is known.
            If a prospective customer refuses or is unable to present any of the
            information requested by Digi Bank, the business relationship must
            not be established.
          </p>
          <p>
            Ongoing monitoring of all account behaviors MUST be exercised as
            DIGI BANK wants to ensure that it does not compromise its policies
            and expose itself to reputational risks.
          </p>
        </Fade>
        <Grid
          className={`${styles.cap} ${styles.first}`}
          style={{ paddingBootm: 0 }}
          container
          spacing={0}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Fade left>
              <h1>Customer Identification Procedures</h1>
              <p>
                Digi Bank will make a reasonable effort to determine the true
                identity of all customers and authorized signatories requesting
                its services by obtaining appropriate identifications from each.
                The Bank will, therefore, take particular care to identify the
                ownership of all accounts prior to having the account(s) opened.
                A customer’s identity will be vetted by providing Digi Bank with
                a notarized colored copy of a valid machine readable passport
                with clear photo and recognizable features. Additionally, a 2nd
                piece of valid photo identification such as National ID or
                driver’s license must also be provided alongside a 3rd document
                as needed to prove an applicant’s residential address.
              </p>
              <p className={styles.cap_text}>
                If the documents are not in English request a notarized copy of
                a translated document prepared by a certified translator.
              </p>
            </Fade>
          </Grid>
          <Grid item lg={1} md={1} sm={12} xs={12}></Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Fade right>
              <img
                src={imageCustomerIdentificationProcedures}
                alt="Customer Identification Procedures"
              />
            </Fade>
          </Grid>
        </Grid>
        <Fade left>
          <p>
            “Declaration of Source of Funds” (DSF) MUST be provided when
            requested by the Bank, and should indicate “how the funds were
            earned/accumulated” e.g salary, sale of property, inheritance and
            should be supported by source documents. The DSF should be completed
            and signed by either the beneficial owner or the authorized person
            on the account.
          </p>
          <p>
            Once all the documents have been examined an e-mail message is sent
            to the prospective customer/authorize person stating that the
            application has been received. Any outstanding documents or queries
            will then be addressed and should it be necessary to conduct further
            verification on a prospective customer’s identity, the customer will
            be so advised. To reiterate: “it is of utmost importance that Digi
            Bank knows its customers and all signatories and the business they
            are involved in. This ensures that the bank can offer and provide
            the most suitable banking services to its customers and also ensures
            that Digi Bank enters into a relation-ship that will not create a
            reputational risk for the bank and the jurisdiction of operation”.
          </p>
        </Fade>
        <Fade left>
          <div className={styles.aml_content}>
            <h1>Risk Management</h1>
            <p>
              An effective KYC programme has been established and implemented by
              Digi Bank. The nature and extent of “DD” will depend on the risk
              perceived by the Bank. The customer’s profile is confidential and
              details contained therein will not be divulged for cross selling
              or any other purposes, unless authorized by the customer in
              writing.
            </p>
            <p>
              Bank’s internal audit and compliance functions have an important
              role in evaluating and ensuring adherence to the KYC policies and
              procedures. The compliance function will provide an independent
              evaluation of the Bank’s own policies and procedures, including
              legal and regulatory requirements.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.aml_content}>
            <h1>Training of staff and Management</h1>
            <p>
              Annual training sessions on all aspects of KYC are geared to equip
              the board of directors and staff members on ‘KYC’ &amp; ‘AML’
              policies so as to protect the Bank and its employees from Money
              Laundering transactions and consequences.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.aml_content}>
            <h1>Evaluation of KYC Guidelines</h1>
            <p>
              An independent evaluation of KYC guidelines for identifying
              weaknesses is conducted by an independent body. The process is
              meant to identify the effectiveness of measures taken by Digi Bank
              on the implementation of KYC guidelines and prevention of Money
              Laundering and will be reported to the board of directors on an
              annual basis.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.aml_content}>
            <h1>Duties/ Responsibilities and Accountabilities</h1>
            <p>
              The Bank employees are expected to conduct themselves in
              accordance with the highest ethical standards and in accordance
              with the existing regulatory requirements and laws. Staff and
              management shall not provide advice or other assistance to
              individuals who are known to be indulging in money laundering
              activities. Dereliction of duty and avoidance of knowledge will
              lead to examination of staff accountabilities.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.aml_content}>
            <h1>The Compliance Function</h1>
            <p>
              The role of Compliance is to identify, assess, advise on,
              communicate, monitor, and report on the Bank’s compliance with
              regulatory requirements. Digi Bank’s compliance program is
              reasonably designed to identify and control the risk of compliance
              failure that could result in financial and reputational damage to
              the Bank or to meet regulatory requirements and standards.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}
export default AMLPage
