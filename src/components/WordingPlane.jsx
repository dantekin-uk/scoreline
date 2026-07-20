import React from 'react'
import { motion } from 'framer-motion'

const WordingPlane = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-10 sm:pb-8 sm:pt-12 lg:pb-8 lg:pt-14">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="ml-auto max-w-lg text-right font-display text-xs font-bold leading-[1.45] tracking-tight sm:max-w-xl sm:text-sm lg:max-w-2xl lg:text-xl lg:leading-[1.4]"
          style={{ fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent">
            Our business is built on one fundamental principle:
            <br />
            our clients&apos; success is our success...
            <br />
            We believe that every engagement should be
          </span>
          <span className="text-accent/45">
            <br />
            characterized by professionalism, responsiveness,
            <br />
            and an unwavering commitment to delivering value.
          </span>
        </motion.p>
      </div>
    </section>
  )
}

export default WordingPlane
