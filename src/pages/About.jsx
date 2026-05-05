import React from 'react'

function About() {
  return (
    <div className='min-h-screen '>
      <div className='w-full mx-auto px-6 py-20'>
        <h1 className='text-4xl font-light text-gray-800 mb-4'>About Essence</h1>
        <div className='w-12 h-0.5 bg-gray-800 mb-8'></div>
        <p className='text-gray-600 text-lg leading-relaxed mb-6'>
          Essence is a modern clothing brand built for those who value simplicity, quality, and timeless style. We believe great clothing doesn't need to shout.
        </p>
        <p className='text-gray-600 text-lg leading-relaxed mb-12'>
          Every piece in our collection is carefully selected to ensure comfort, durability, and a clean aesthetic that works for any occasion.
        </p>
        <div className='grid grid-cols-3 gap-8 border-t border-gray-200 pt-12'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-800'>100+</h3>
            <p className='text-gray-500 text-sm mt-1'>Products</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-gray-800'>500+</h3>
            <p className='text-gray-500 text-sm mt-1'>Happy Customers</p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-gray-800'>2024</h3>
            <p className='text-gray-500 text-sm mt-1'>Est.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About