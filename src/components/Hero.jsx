import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <section
      id="hero"
      className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 text-center w-full overflow-hidden text-gray-700 dark:text-white'
    >

      {/* BADGE */}
      <div className='inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-white/5 p-1.5 pr-4 rounded-full'>
        <img
          className='w-20'
          src={assets.group_profile}
          alt="Jigyasa Edu community"
        />

        <p className='text-xs font-medium'>
          EMPOWERING THE NEXT GENERATION OF LEARNERS
        </p>
      </div>


      {/* HEADING */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
        Where{' '}
        <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          Curiosity
        </span>{' '}
        Meets Learning
      </h1>


      {/* DESCRIPTION */}
      <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 leading-7'>
        Jigyasa Edu is a student-focused learning platform designed to help you
        ask questions, discover knowledge, practice your skills, and learn
        together.
      </p>


      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row items-center gap-4'>

        <a
          href='/services'
          className='px-7 py-3 rounded-full bg-[#5044E5] text-white text-sm font-medium hover:scale-105 transition-all'
        >
          Explore Our Services
        </a>

        <a
          href='/our-team'
          className='px-7 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all'
        >
          Meet Our Team
        </a>

      </div>


      {/* HERO IMAGE */}
      <div className='relative w-full mt-6'>

        <img
          src={assets.hero_img}
          alt="Jigyasa Edu learning"
          className='w-full max-w-6xl mx-auto'
        />

        {/* BACKGROUND DECORATION */}
        <img
          src={assets.bgImage1}
          alt=""
          className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-10 dark:hidden'
        />

      </div>

    </section>
  )
}

export default Hero