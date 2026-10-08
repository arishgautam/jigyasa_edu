import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='py-20 px-4 sm:px-12 lg:px-24'>
      <div className='max-w-5xl mx-auto rounded-3xl bg-[#5044E5] px-6 sm:px-12 py-14 text-center text-white'>

        <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium'>
          Ready to Start Learning?
        </h2>

        <p className='mt-5 text-white/80 max-w-xl mx-auto'>
          Your next question could lead to your next discovery.
        </p>

        <Link
          to='/services'
          className='inline-block mt-8 px-7 py-3 rounded-full bg-white text-[#5044E5] text-sm font-medium hover:scale-105 transition'
        >
          Explore Jigyasa
        </Link>

      </div>
    </section>
  )
}

export default CTA