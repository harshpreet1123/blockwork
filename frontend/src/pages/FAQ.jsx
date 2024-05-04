import { useState } from 'react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(new Array(6).fill(false)); // Assuming there are 6 FAQ items

  const toggleAccordion = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            <div
              key={0}
              className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleAccordion(0)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How do I join BlockWork as a freelancer?
                </h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                  {isOpen[0] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen[0] && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  To join BlockWork as a freelancer, visit our website and
                  click on the "Sign Up" button. Follow the instructions to
                  create your account, complete your profile, and start
                  browsing available freelance opportunities.
                </p>
              )}
            </div>

            {/* Add more FAQ items using similar structure */}
            <div
              key={1}
              className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleAccordion(1)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How does the payment system work on BlockWork?
                </h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                  {isOpen[1] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen[1] && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  BlockWork uses smart contracts on the Polygon network to
                  facilitate payments between freelancers and clients. Once a
                  freelance job is completed and approved by the client, the
                  payment is automatically transferred to the freelancer's
                  Polygon wallet.
                </p>
              )}
            </div>

            {/* Repeat the above structure for additional FAQ items */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
