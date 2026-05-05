import React from 'react'

function Contact() {
  return (
    <div className='min-h-screen '>
      <div className='max-w-2xl mx-auto px-6 py-20'>
        <h1 className='text-4xl font-light text-gray-800 mb-4'>Get in Touch</h1>
        <div className='w-54 h-0.5 bg-gray-800 mb-8'></div>
        <p className='text-gray-500 mb-10'>Have a question or feedback? We'd love to hear from you.</p>
        <div className='flex flex-col gap-4'>
          <input type='text' placeholder='Your Name' className='w-full border border-gray-200 rounded-lg p-4 bg-white focus:outline-none focus:border-gray-400 text-gray-700' />
          <input type='email' placeholder='Your Email' className='w-full border border-gray-200 rounded-lg p-4 bg-white focus:outline-none focus:border-gray-400 text-gray-700' />
          <textarea placeholder='Your Message' rows={5} className='w-full border border-gray-200 rounded-lg p-4 bg-white focus:outline-none focus:border-gray-400 text-gray-700 resize-none' />
          <button className='w-full bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-700 transition-colors'>Send Message</button>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8 flex flex-col gap-2'>
          <p className='text-gray-500 text-sm'>Email: essence@gmail.com</p>
          <p className='text-gray-500 text-sm'>Location: Sialkot, Pakistan</p>
        </div>
      </div>
    </div>
  )
}

export default Contact