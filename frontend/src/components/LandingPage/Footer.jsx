import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const openTermsModal = () => {
    setTermsModalOpen(true);
  };
  const closeTermsModal = () => {
    setTermsModalOpen(false);
  };
  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };
  const closePrivacyModal = () => {
    setPrivacyModalOpen(false);
  };
  const TermsModal = () => {
    return (
      <div
        tabIndex="-1"
        aria-hidden="true"
        className=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Terms And Conditions
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-purple-500 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="default-modal"
                onClick={closeTermsModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 ">
                Acceptance of Terms:
                <br />
                By accessing or using our website BlocWork, you agree to comply
                with and be bound by these Terms and Conditions.
                <ol>
                  <br />
                  <li>
                    <b>User Eligibility:</b> You must be at least 18 years old
                    and capable of forming a legally binding contract to use our
                    services. By using our website, you affirm that you meet
                    these criteria.
                  </li>
                  <br />
                  <li>
                    <b>User Accounts:</b> You are responsible for maintaining
                    the confidentiality of your account credentials and for all
                    activities that occur under your account. You agree to
                    notify us immediately of any unauthorized use of your
                    account.
                  </li>
                  <br />
                  <li>
                    <b>User Conduct:</b> You agree to use our website and
                    services in compliance with all applicable laws and
                    regulations. You will not engage in any unlawful or
                    fraudulent activities, including but not limited to
                    spamming, hacking, or distributing malware.
                  </li>
                  <br />
                  <li>
                    <b>Intellectual Property:</b> All content and materials
                    available on our website, including but not limited to text,
                    graphics, logos, and software, are the property of BlocWork
                    or its licensors and are protected by intellectual property
                    laws.
                  </li>
                  <br />
                  <li>
                    <b>User Content:</b> By submitting content to our website,
                    including but not limited to job postings, bids, and
                    messages, you grant BlocWork a worldwide, non-exclusive,
                    royalty-free license to use, reproduce, and distribute your
                    content.
                  </li>
                  <br />
                  <li>
                    <b>Payment Terms:</b> Users agree to pay all fees and
                    charges associated with the use of our services. Payments
                    may be processed through third-party payment gateways, and
                    users are responsible for any associated fees.
                  </li>
                  <br />
                  <li>
                    <b>Dispute Resolution:</b> Any disputes between users should
                    be resolved directly between the parties involved. BlocWork
                    may, but is not obligated to, assist in resolving disputes.
                  </li>
                  <br />
                  <li>
                    <b>Governing Law:</b> These Terms and Conditions shall be
                    governed by and construed in accordance with the laws of
                    India, without regard to its conflict of law provisions.
                  </li>
                  <br />
                  <li>
                    <b>Severability:</b> If any provision of these Terms and
                    Conditions is found to be invalid or unenforceable, the
                    remaining provisions shall remain in full force and effect.
                  </li>
                  <br />
                  <li>
                    <b>Entire Agreement:</b>These Terms and Conditions
                    constitute the entire agreement between you and BlocWork
                    regarding your use of our website and services, superseding
                    any prior agreements or understandings. If you have any
                    questions or concerns about these Terms and Conditions,
                    please contact us at{" "}
                    <a
                      href="mailto:support.blocwork@gmail.com"
                      className="text-purple-500"
                    >
                      support.blocwork@gmail.com.
                    </a>
                  </li>
                </ol>
              </p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={closeTermsModal}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-slate-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const PrivacyModal = () => {
    return (
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Privacy Policy
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
                onClick={closePrivacyModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                Your privacy is important to us. It is BlocWork&apos;s policy to
                respect your privacy regarding any information we may collect
                from you across our website, <a href="#">BlocWork.com</a>, and
                other sites we own and operate.
                <br />
                <br />
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we&apos;re collecting it and how it will be used.
                <br />
                <br />
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we&apos;ll protect within commercially acceptable means to
                prevent loss and theft, as well as unauthorized access,
                disclosure, copying, use, or modification.
                <br />
                <br />
                We don&apos;t share any personally identifying information
                publicly or with third-parties, except when required to by law.
                <br />
                <br />
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies.
                <br />
                <br />
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services.
                <br />
                <br />
                Your continued use of our website will be regarded as acceptance
                of our practices around privacy and personal information. If you
                have any questions about how we handle user data and personal
                information, feel free to contact us.
                <br />
                <br />
                This policy is effective as of 1 January 2025.
              </p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={closePrivacyModal}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // eslint-disable-next-line react/prop-types
  const FooterItem = ({ label, route }) => {
    return (
      <li>
        <Link to={route}>
          <span
            rel="noopener noreferrer"
            href="#"
            className="inline-block border-b-2 border-transparent hover:border-purple-500 transition ease-in-out duration-300 cursor-pointer"
          >
            {label}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <div>
      <footer className=" divide-y bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12">
                <img
                  src={logo}
                  className="transition-transform duration-500 transform hover:rotate-180"
                />
              </div>
              <span className="self-center text-2xl font-semibold">
                BlocWork
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 px-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-900">Product</h3>
              <ul className="space-y-1">
                <FooterItem label="Features" route={"#feat"} />
                <FooterItem label="FAQ" route={"/faq"} />
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-900">Company</h3>
              <ul className="space-y-1">
                <li>
                  <button onClick={openPrivacyModal}>
                    <FooterItem label="Privacy Policy" />
                  </button>
                </li>
                <li>
                  <button onClick={openTermsModal}>
                    <FooterItem label="Terms of Service" />
                  </button>
                </li>
                <li>
                  <FooterItem label="Contact US" route={"/contact-us"} />
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase text-gray-900">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/blocwork_inc?t=7w9_QK8r0FmFZutNx8bkWQ&s=08 "
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/blocwork2024?igsh=djZjeXE2cnF6aTI3"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-900 ">
                ADDRESS
              </h3>
              <p className="flex items-start ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-2 text-black w-72">
                  Amritsar, Punjab, India
                </span>
              </p>
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-1  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="mx-2 truncate text-black">
                  <a href="mailto:info.blocwork@gmail.com">
                    info.blocwork@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        {privacyModalOpen && <PrivacyModal />}
        {termsModalOpen && <TermsModal />}
        <div className="py-6 text-sm text-center">Made with ❤️ in ਪੰਜਾਬ</div>
      </footer>
    </div>
  );
};

export default Footer;
