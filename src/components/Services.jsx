import React from 'react'
import { projects } from '../assets/assets'

const Services = () => {
  return (
    <section
      id='our-work'
      className='py-24 px-4 sm:px-12 lg:px-24 text-gray-700 dark:text-white'
    >
      <div className='max-w-6xl mx-auto'>

        {/* Heading */}
        <div className='text-center'>
          <p className='text-sm font-medium text-[#5044E5]'>
            OUR WORK
          </p>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mt-3'>
            Projects Under Our Guidance
          </h2>

          <p className='max-w-2xl mx-auto mt-5 text-gray-500 dark:text-white/70 leading-7'>
            Explore projects completed by students with guidance and support
            from the Jigyasa Edu team.
          </p>
        </div>

        {/* Projects */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>

          {projects.slice(0, 6).map((project, index) => (
            <div
              key={project.title}
              className='group rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'
            >

              {/* Image */}
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-6'>

                <p className='text-xs font-medium text-[#5044E5]'>
                  PROJECT {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className='text-xl font-medium mt-2'>
                  {project.title}
                </h3>

                <p className='text-sm text-gray-500 dark:text-white/60 leading-6 mt-3'>
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 mt-5 text-sm font-medium text-[#5044E5] hover:gap-3 transition-all'
                >
                  View Project
                  <span>→</span>
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services