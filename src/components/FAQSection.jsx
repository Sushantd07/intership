import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I find a customer care number?",
    answer: "Simply search by brand or category (e.g., Banking, Telecom, Shopping) and you'll see verified toll-free numbers instantly.\n\n- No login required\n- Free for everyone\n- Works 24x7"
  },
  {
    question: "Are these numbers verified?",
    answer: "Yes, our team manually verifies each number from official brand websites and trusted sources."
  },
  {
    question: "Can I report a wrong number?",
    answer: "Absolutely! Each listing has a 'Report' option. You can also email us at report@indiancustomerhelp.com."
  },
  {
    question: "Do you support all Indian brands?",
    answer: "We currently support over 500+ brands across Telecom, Banking, Shopping, Healthcare, Travel, and more. New entries are added weekly."
  },
  {
    question: "Is this service free?",
    answer: "Yes, Indian Customer Help is 100% free for users. No subscription, no sign-up needed."
  },
  {
    question: "Can I suggest a company to be added?",
    answer: "Yes! Use our suggestion form or email support@indiancustomerhelp.com to recommend a missing brand."
  },
  {
    question: "How often is the data updated?",
    answer: "Our team updates toll-free numbers and support info every 7 days to ensure accuracy."
  },
  {
    question: "Is there a mobile app available?",
    answer: "A mobile app is currently under development and will be released soon for Android and iOS users."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-0">
        {/* Left: Heading, Description, Button */}
        <div className="md:w-[38%] flex flex-col justify-start mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Helping you connect with brands faster
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Indian Customer Help is your go-to directory for verified toll-free numbers of major Indian companies. Whether it's a refund, complaint, or general support — we've got you covered.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md text-base shadow-md transition-colors w-fit">
            BROWSE DIRECTORY
          </button>
        </div>
        {/* Right: FAQ Accordion */}
        <div className="md:w-[62%] flex flex-col gap-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-gray-200 last:border-b-0">
                <button
                  className={`w-full flex items-center justify-between py-5 px-2 md:px-6 text-left focus:outline-none transition-colors ${isOpen ? 'font-bold text-gray-900' : 'text-purple-700 font-semibold hover:text-purple-900'}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className={`ml-4 flex items-center justify-center rounded-full border-2 border-purple-300 w-8 h-8 transition-colors ${isOpen ? 'bg-purple-600 border-purple-600' : 'bg-white'}`}>
                    <span className={`text-2xl font-bold transition-transform ${isOpen ? 'text-white rotate-45' : 'text-purple-600'}`}>+</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="pl-2 md:pl-6 pb-6 text-gray-700 text-sm md:text-base animate-fadeIn">
                    {faq.answer.split('\n').map((line, i) =>
                      line.trim().startsWith('-') ? (
                        <li key={i} className="ml-6 list-disc">{line.replace('-', '').trim()}</li>
                      ) : (
                        <p key={i} className="mb-2">{line}</p>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
      `}</style>
    </section>
  );
};

export default FAQSection;
