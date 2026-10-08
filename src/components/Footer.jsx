import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-700 dark:text-white'>

      <div className='max-w-6xl mx-auto px-4 sm:px-12 lg:px-24 py-14'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>


          {/* BRAND */}
          <div className='lg:col-span-2'>

             <Link to='/'>
    {/* Light theme → black logo */}
    <img
      src={assets.logo}
      alt='Jigyasa Edu'
      className='w-36 dark:hidden'
    />

    {/* Dark theme → white logo */}
    <img
      src={assets.logo_dark}
      alt='Jigyasa Edu'
      className='w-36 hidden dark:block'
    />
  </Link>

            <p className='max-w-md mt-5 text-sm text-gray-500 dark:text-white/60 leading-7'>
              Jigyasa Edu is a student-focused learning platform designed to
              help you ask questions, discover knowledge, practice your skills,
              and learn together.
            </p>


            {/* SOCIALS */}
            <div className='flex items-center gap-3 mt-6'>

              <a
                href='#'
                className='w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
              >
                <img
                  src={assets.facebook_icon}
                  alt='Facebook'
                  className='w-4'
                />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
              >
                <img
                  src={assets.instagram_icon}
                  alt='Instagram'
                  className='w-4'
                />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
              >
                <img
                  src={assets.linkedin_icon}
                  alt='LinkedIn'
                  className='w-4'
                />
              </a>

              <a
                href='#'
                className='w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
              >
                <img
                  src={assets.twitter_icon}
                  alt='Twitter'
                  className='w-4'
                />
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className='font-medium'>
              Quick Links
            </h3>

            <div className='flex flex-col gap-3 mt-5 text-sm text-gray-500 dark:text-white/60'>

              <Link
                to='/'
                className='hover:text-[#5044E5] transition'
              >
                Home
              </Link>

              <Link
                to='/services'
                className='hover:text-[#5044E5] transition'
              >
                Services
              </Link>

              <Link
                to='/our-team'
                className='hover:text-[#5044E5] transition'
              >
                Our Team
              </Link>

              <Link
                to='/contact'
                className='hover:text-[#5044E5] transition'
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* SERVICES */}
          <div>

            <h3 className='font-medium'>
              Services
            </h3>

            <div className='flex flex-col gap-3 mt-5 text-sm text-gray-500 dark:text-white/60'>

              <span>
                Doubt Solving
              </span>

              <span>
                Study Materials
              </span>

              <span>
                Online Tests & Quizzes
              </span>

              <span>
                Student Community
              </span>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className='border-t border-gray-200 dark:border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>

          <p className='text-xs text-gray-400 dark:text-white/40'>
            © {new Date().getFullYear()} Jigyasa Edu. All rights reserved.
          </p>

          <Link
            to='/contact'
            className='text-sm font-medium text-[#5044E5] hover:underline'
          >
            Connect with us →
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer