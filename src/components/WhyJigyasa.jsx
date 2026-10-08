import React from 'react'

const features = [
  {
    title: 'Student First',
    description:
      'Everything we build starts with the needs of learners.',
  },
  {
    title: 'Easy to Understand',
    description:
      'We believe learning resources should be simple, clear, and accessible.',
  },
  {
    title: 'Learn Together',
    description:
      'Knowledge becomes more powerful when students share it.',
  },
  {
    title: 'Always Curious',
    description:
      'We encourage students to question, explore, and discover.',
  },
]

const WhyJigyasa = () => {
  return (
    <section className='py-20 px-4 sm:px-12 lg:px-24 text-gray-700 dark:text-white'>
      <div className='max-w-6xl mx-auto'>

        <div className='text-center mb-12'>
          <p className='text-sm font-medium text-[#5044E5]'>
            WHY JIGYASA EDU?
          </p>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mt-3'>
            Learning Made for Students
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/40'
            >
              <div className='w-10 h-10 rounded-full bg-[#5044E5]/10 dark:bg-[#5044E5]/20 flex items-center justify-center text-[#5044E5] font-medium'>
                {index + 1}
              </div>

              <h3 className='text-lg font-medium mt-5'>
                {feature.title}
              </h3>

              <p className='mt-3 text-sm leading-6 text-gray-500 dark:text-white/70'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyJigyasa