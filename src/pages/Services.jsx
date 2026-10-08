import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Doubt Solving',
    subtitle: 'Understand what you learn.',
    description:
      'Learning becomes easier when you can ask questions. Jigyasa Edu helps students clear their doubts and better understand concepts that feel difficult or confusing.',
    points: [
      'Ask questions about difficult concepts',
      'Get clear and easy-to-understand explanations',
      'Learn concepts instead of simply memorizing answers',
    ],
  },
  {
    number: '02',
    title: 'Study Materials',
    subtitle: 'Resources for better learning.',
    description:
      'Find useful study materials and learning resources that can support your classes, revision, and independent learning.',
    points: [
      'Access useful notes and resources',
      'Find materials for revision and practice',
      'Keep your learning resources organized',
    ],
  },
  {
    number: '03',
    title: 'Online Tests & Quizzes',
    subtitle: 'Practice. Test. Improve.',
    description:
      'Put your knowledge into practice through tests and quizzes. Regular practice can help you understand what you know and identify areas where you need more work.',
    points: [
      'Practice concepts through quizzes',
      'Test your understanding',
      'Identify areas that need more practice',
    ],
  },
  {
    number: '04',
    title: 'Student Community',
    subtitle: 'Learn together.',
    description:
      'Learning does not have to happen alone. Connect with other students, exchange ideas, discuss topics, and grow together as a learning community.',
    points: [
      'Connect with other learners',
      'Share ideas and knowledge',
      'Discuss topics and learn together',
    ],
  },
]

const Services = () => {
  return (
    <main className='text-gray-700 dark:text-white'>

      {/* PAGE HERO */}
      <section className='py-24 sm:py-32 px-4 sm:px-12 lg:px-24 text-center'>
        <p className='text-sm font-medium text-[#5044E5]'>
          JIGYASA EDU
        </p>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium mt-4'>
          Our Services
        </h1>

        <p className='max-w-2xl mx-auto mt-6 text-gray-500 dark:text-white/70 text-sm sm:text-lg leading-7'>
          Everything you need to ask questions, learn concepts, practice your
          skills, and connect with other learners.
        </p>
      </section>


      {/* SERVICES */}
      <section className='px-4 sm:px-12 lg:px-24 pb-24'>
        <div className='max-w-6xl mx-auto space-y-8'>

          {services.map((service, index) => (
            <div
              key={service.number}
              className='group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden hover:-translate-y-1 transition-all duration-300'
            >

              <div className='grid lg:grid-cols-[180px_1fr]'>


                {/* NUMBER */}
                <div className='p-8 lg:p-10 bg-gray-50 dark:bg-white/5 flex lg:items-start items-center justify-between lg:flex-col'>
                  <span className='text-4xl sm:text-5xl font-medium text-[#5044E5]/80'>
                    {service.number}
                  </span>

                  <span className='text-sm text-gray-400 dark:text-white/30 hidden lg:block'>
                    SERVICE
                  </span>
                </div>


                {/* CONTENT */}
                <div className='p-8 sm:p-10 lg:p-12'>

                  <p className='text-sm font-medium text-[#5044E5]'>
                    {service.subtitle}
                  </p>

                  <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mt-2'>
                    {service.title}
                  </h2>

                  <p className='max-w-3xl mt-5 text-gray-500 dark:text-white/65 leading-7'>
                    {service.description}
                  </p>


                  {/* POINTS */}
                  <div className='grid sm:grid-cols-3 gap-4 mt-8'>

                    {service.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className='flex gap-3 items-start'
                      >
                        <div className='w-6 h-6 shrink-0 rounded-full bg-[#5044E5]/10 dark:bg-[#5044E5]/20 flex items-center justify-center'>
                          <span className='text-[#5044E5] text-xs'>
                            ✓
                          </span>
                        </div>

                        <p className='text-sm text-gray-600 dark:text-white/65 leading-6'>
                          {point}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>


      {/* WHY THESE SERVICES */}
      <section className='py-24 px-4 sm:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900/50'>

        <div className='max-w-4xl mx-auto text-center'>

          <p className='text-sm font-medium text-[#5044E5]'>
            OUR APPROACH
          </p>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mt-3'>
            Learning Starts With Curiosity
          </h2>

          <p className='mt-6 text-gray-500 dark:text-white/70 leading-7'>
            Jigyasa means curiosity. Our goal is to create a learning
            experience where students feel comfortable asking questions,
            exploring ideas, practicing what they learn, and learning with
            others.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className='px-4 sm:px-12 lg:px-24 py-24'>

        <div className='max-w-5xl mx-auto rounded-3xl bg-[#5044E5] px-6 sm:px-12 py-14 text-center text-white'>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium'>
            Have Something to Ask?
          </h2>

          <p className='mt-5 text-white/80 max-w-xl mx-auto'>
            Every great learning journey can start with a simple question.
          </p>

          <Link
            to='/contact'
            className='inline-block mt-8 px-7 py-3 rounded-full bg-white text-[#5044E5] text-sm font-medium hover:scale-105 transition-all'
          >
            Connect With Us
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Services