import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from './ui/FadeIn'
import { SectionHeading } from './ui/SectionHeading'

const faqs = [
  {
    question: 'Do I need an appointment?',
    answer:
      'Yes. MODA STUDIOS operates by appointment only to ensure every client receives dedicated time, a full consultation, and an unhurried experience. Book through Squire at any time.',
  },
  {
    question: 'How long does a service take?',
    answer:
      'The Moda Experience typically runs 60–90 minutes including consultation, cut, beard work, and styling. Standard haircuts and grooming services vary — timing is confirmed when you book.',
  },
  {
    question: 'What services are offered?',
    answer:
      'We offer the signature Moda Experience, haircut and beard packages, precision fades, texture and styling cuts, and standalone grooming services. View the Services section for full details.',
  },
  {
    question: 'What should I expect at my first visit?',
    answer:
      'Your barber will discuss your hair history, daily routine, and style goals before any cutting begins. Come with an idea of what you like — references are welcome — and leave the precision to us.',
  },
  {
    question: 'Where is the studio located?',
    answer:
      'MODA STUDIOS is located in Garden City, New York. Exact address and directions are available on your Squire booking confirmation and in the Contact section below.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-ink sm:text-xl">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-ink-muted sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions & Answers"
          subtitle="Everything you need to know before your appointment."
        />

        <FadeIn>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
