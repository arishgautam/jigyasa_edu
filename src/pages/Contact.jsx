
import React, { useState } from 'react'
import assets from '../assets/assets'

const Contact = () => {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const form = e.target
    const formData = new FormData(form)

    // Web3Forms
    formData.append('access_key', '73f2bd90-03b8-4009-8b3d-35c404cb95c1')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='text-gray-700 dark:text-white'>

      {/* PAGE HEADER */}
      <section className='py-24 sm:py-32 px-4 sm:px-12 lg:px-24 text-center'>
        <p className='text-sm font-medium text-[#5044E5]'>
          GET IN TOUCH
        </p>

        <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium mt-4'>
          Let's Talk
        </h1>

        <p className='max-w-2xl mx-auto mt-6 text-gray-500 dark:text-white/70 text-sm sm:text-lg leading-7'>
          Have a question, suggestion, or idea? We'd love to hear from you.
          Tell us a little about yourself and how we can help.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className='px-4 sm:px-12 lg:px-24 pb-24'>
        <div className='max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10'>

          {/* LEFT SIDE */}
          <div className='rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 sm:p-10'>

            <p className='text-sm font-medium text-[#5044E5]'>
              CONNECT WITH US
            </p>

            <h2 className='text-3xl font-medium mt-3'>
              We'd love to hear from you.
            </h2>

            <p className='mt-5 text-gray-500 dark:text-white/65 leading-7'>
              Whether you have a question about Jigyasa Edu, want to share
              feedback, or simply want to connect with us, feel free to reach
              out.
            </p>

            {/* EMAIL */}
            <div className='flex items-center gap-4 mt-10'>
              <div className='w-12 h-12 rounded-full bg-[#5044E5]/10 dark:bg-[#5044E5]/20 flex items-center justify-center'>
                <img
                  src={assets.email_icon}
                  alt='Email'
                  className='w-5'
                />
              </div>

              <div>
                <p className='text-sm text-gray-400 dark:text-white/50'>
                  Email
                </p>

                <p className='text-sm font-medium mt-1'>
                  your-email@example.com
                </p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className='mt-10'>
              <p className='text-sm text-gray-400 dark:text-white/50'>
                Follow us
              </p>

              <div className='flex items-center gap-4 mt-4'>

                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
                >
                  <img
                    src={assets.facebook_icon}
                    alt='Facebook'
                    className='w-4'
                  />
                </a>

                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
                >
                  <img
                    src={assets.instagram_icon}
                    alt='Instagram'
                    className='w-4'
                  />
                </a>

                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
                >
                  <img
                    src={assets.linkedin_icon}
                    alt='LinkedIn'
                    className='w-4'
                  />
                </a>

                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
                >
                  <img
                    src={assets.twitter_icon}
                    alt='Twitter'
                    className='w-4'
                  />
                </a>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className='rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 sm:p-10'>

            <h2 className='text-2xl sm:text-3xl font-medium'>
              Tell us about yourself
            </h2>

            <p className='mt-3 text-sm text-gray-500 dark:text-white/60'>
              Fill out the form below and send us your message.
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-8 space-y-5'
            >

              {/* NAME */}
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Name
                </label>

                <input
                  type='text'
                  name='name'
                  placeholder='Your full name'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 outline-none focus:border-[#5044E5] transition'
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Email Address
                </label>

                <input
                  type='email'
                  name='email'
                  placeholder='you@example.com'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 outline-none focus:border-[#5044E5] transition'
                />
              </div>

              {/* STREAM + CLASS */}
              <div className='grid sm:grid-cols-2 gap-5'>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Stream of Study
                  </label>

                  <select
                    name='stream'
                    defaultValue=''
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900 outline-none focus:border-[#5044E5] transition'
                  >
                    <option value='' disabled>
                      Select your stream
                    </option>
                    <option value='Science'>Science</option>
                    <option value='Management'>Management</option>
                    <option value='Humanities'>Humanities</option>
                    <option value='Education'>Education</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Class / Grade
                  </label>

                  <select
                    name='class'
                    defaultValue=''
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900 outline-none focus:border-[#5044E5] transition'
                  >
                    <option value='' disabled>
                      Select class
                    </option>
                    <option value='School'>School</option>
                    <option value='Grade 11'>Grade 11</option>
                    <option value='Grade 12'>Grade 12</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

              </div>

              {/* SUBJECT */}
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Subject / Area
                </label>

                <input
                  type='text'
                  name='subject'
                  placeholder='e.g. Mathematics, Science, Programming...'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 outline-none focus:border-[#5044E5] transition'
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className='block text-sm font-medium mb-2'>
                  Message
                </label>

                <textarea
                  name='message'
                  rows='5'
                  placeholder='Tell us how we can help...'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 outline-none focus:border-[#5044E5] transition resize-none'
                />
              </div>

              {/* HONEYPOT */}
              <input
                type='checkbox'
                name='botcheck'
                className='hidden'
                style={{ display: 'none' }}
              />

              {/* STATUS MESSAGE */}
              {status === 'success' && (
                <p className='text-sm text-green-600 dark:text-green-400'>
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className='text-sm text-red-600 dark:text-red-400'>
                  Something went wrong. Please try again.
                </p>
              )}

              {/* SUBMIT */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full sm:w-auto px-8 py-3 rounded-full bg-[#5044E5] text-white text-sm font-medium hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
