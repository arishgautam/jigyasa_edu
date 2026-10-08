import React from 'react'
import { teamData } from '../assets/assets'

const OurTeam = () => {
  return (
    <main className='text-gray-700 dark:text-white'>

      {/* PAGE HEADER */}
      <section className='py-24 px-4 sm:px-12 lg:px-24 text-center'>

        <p className='text-sm font-medium text-[#5044E5]'>
          THE PEOPLE BEHIND JIGYASA EDU
        </p>

        <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium mt-4'>
          Meet Our Team
        </h1>

        <p className='max-w-2xl mx-auto mt-6 text-gray-500 dark:text-white/70 text-sm sm:text-lg leading-7'>
          Jigyasa Edu is powered by a team of curious, passionate, and creative
          individuals working together to make learning more accessible and
          engaging.
        </p>

      </section>


      {/* TEAM */}
      <section className='pb-24 px-4 sm:px-12 lg:px-24'>

        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

          {teamData.map((person) => (
            <div
              key={person.name}
              className='group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl'
            >

              {/* PHOTO */}
              <div className='relative aspect-[4/5] overflow-hidden'>

                <img
                  src={person.image}
                  alt={person.name}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />


                {/* DESCRIPTION POPUP */}
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>

                  <div className='p-6 text-white translate-y-5 group-hover:translate-y-0 transition-transform duration-500'>

                    <h3 className='text-xl font-medium'>
                      {person.name}
                    </h3>

                    <p className='text-sm text-white/70 mt-1'>
                      {person.title}
                    </p>

                    <p className='text-sm text-white/85 leading-6 mt-4'>
                      {person.description || 'Description coming soon.'}
                    </p>

                  </div>

                </div>

              </div>


              {/* NORMAL CARD INFO */}
              <div className='p-5 bg-white dark:bg-gray-900/60'>

                <h3 className='text-lg font-medium'>
                  {person.name}
                </h3>

                <p className='text-sm text-gray-500 dark:text-white/60 mt-1'>
                  {person.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* CLOSING */}
      <section className='pb-24 px-4 sm:px-12 lg:px-24 text-center'>

        <div className='max-w-3xl mx-auto'>

          <h2 className='text-3xl sm:text-4xl font-medium'>
            Different Skills.{' '}
            <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
              One Mission.
            </span>
          </h2>

          <p className='mt-5 text-gray-500 dark:text-white/70 leading-7'>
            Together, we bring different skills, ideas, and perspectives to
            create a better learning experience for students.
          </p>

        </div>

      </section>

    </main>
  )
}

export default OurTeam