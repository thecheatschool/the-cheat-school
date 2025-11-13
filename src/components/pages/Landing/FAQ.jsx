import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex === index
      if (indexExists) {
        return null
      }
      return index
    })
  }

  const items = [
    {
      question: "What courses do you offer for civil engineering?",
      answer: "We offer comprehensive courses covering structural engineering, geotechnical engineering, transportation, water resources, and construction management. All courses are designed by industry experts."
    },
    {
      question: "How long is the free trial period?",
      answer: "You get a 7-day free trial with full access to all courses and materials. No credit card required to start your trial."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Yes! Our courses cater to all levels - from undergraduate students to practicing engineers looking to upskill. Each course clearly indicates its difficulty level."
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Absolutely! Upon successfully completing a course, you'll receive a verified certificate that you can share on LinkedIn and add to your professional portfolio."
    }
  ]

  return (
    <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-14 md:p-8">
      <h2 
        className="text-center text-4xl font-bold text-[#2b2b2b] md:text-left md:text-6xl"
        style={{ fontFamily: 'Antonio, sans-serif' }}
      >
        Frequently Asked Questions
      </h2>
      <div>
        {items.map(({ question, answer }, idx) => (
          <div
            key={idx}
            onClick={() => toggleFaq(idx)}
            className="flex cursor-pointer items-start gap-4 border-b border-gray-300 py-5 last:border-0"
          >
            <div className="mt-0.5">
              {idx === activeIndex ? (
                <Minus color="#e83f25" />
              ) : (
                <Plus color="#e83f25" />
              )}
            </div>
            <div>
              <h4 
                className="text-lg font-medium"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {question}
              </h4>
              <div
                className={`${idx === activeIndex ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'} transition-all duration-300`}
              >
                <p 
                  className="mt-2 overflow-hidden text-left text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq