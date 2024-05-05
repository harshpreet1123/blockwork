import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(new Array(6).fill(false)); // Assuming there are 6 FAQ items
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted or updated
  }, []);

  const faqData = [
    {
      question: "How do I create an account on BlockWork?",
      answer:
        "To create an account on BlockWork, go to our website and click on the 'Sign Up' button. Fill in the required information and follow the instructions to complete the registration process.",
    },
    {
      question: "How do I apply for freelance jobs on BlockWork?",
      answer:
        "After signing in to your BlockWork account, navigate to the 'Jobs' section. Browse through the available freelance jobs and click on the job title to view more details. If you're interested and meet the requirements, you can apply for the job by following the application instructions provided by the client.",
    },
    {
      question: "What payment methods are supported on BlockWork?",
      answer:
        "BlockWork primarily uses cryptocurrency payments, with Polygon (MATIC) being the preferred choice. However, depending on the client's preference, other payment methods such as bank transfers or PayPal may also be accepted in Future.",
    },
    {
      question: "How does BlockWork ensure the security of freelancers' funds?",
      answer:
        "BlockWork employs robust security measures to safeguard freelancers' funds. Smart contracts on the Polygon network ensure that payments are securely transferred only upon completion and approval of the freelance job by both parties. Additionally, freelancers have full control over their funds stored in their Polygon wallets.",
    },
    {
      question: "Can I communicate directly with clients on BlockWork?",
      answer:
        "Yes, BlockWork allows direct communication between freelancers and clients. Once a freelancer is awarded a job, they can communicate with the client through our secure messaging system to discuss project details, deadlines, and any other relevant information.",
    },
    {
      question: "How do I contact support if I encounter issues on BlockWork?",
      answer:
        "If you encounter any issues while using BlockWork, you can reach out to our support team by sending an email to support@blockwork.com. Our team will promptly assist you with any questions or concerns you may have.",
    },
  ];

  const filteredFAQ = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900">
      <section className="h-full ">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredFAQ.map(({ question, answer }, index) => (
              <div
                key={index}
                className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
              >
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAccordion(index)}
                >
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    {question}
                  </h1>

                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    {isOpen[index] ? (
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

                {isOpen[index] && (
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className=" flex flex-col justify-center items-center py-10">
        <h2 className="text-white text-2xl">
          Can&apos;t find what you are lookin for?
        </h2>
        <h2 className="text-purple-600 text-2xl">Don&apos;t Worry...</h2>

        <Link to="/contact-us">
          <p className=" mt-5 px-6 py-4 text-white bg-purple-600 hover:bg-purple-800 rounded-sm">
            Conatct Us
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
