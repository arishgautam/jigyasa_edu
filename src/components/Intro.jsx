import React from 'react'

const Intro = () => {
  return (
    <section className='py-20 px-4 sm:px-12 lg:px-24 text-gray-700 dark:text-white'>
      <div className='max-w-6xl mx-auto text-center'>

        <p className='text-sm font-medium text-[#5044E5]'>
          ABOUT JIGYASA EDU
        </p>

        <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mt-3'>
          Learning Starts With a{' '}
          <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
            Question
          </span>
        </h2>

        <p className='mt-5 max-w-2xl mx-auto text-gray-500 dark:text-white/70 text-sm sm:text-base leading-7'>
          Jigyasa Edu is a student-focused learning platform created to make
          learning easier, more accessible, and more engaging. We believe
          curiosity is the first step toward meaningful learning.
        </p>

      </div>
    </section>
  )
}

export default Intro