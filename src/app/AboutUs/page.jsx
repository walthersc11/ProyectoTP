import React from 'react'

export default function AboutUs () {
  return (
    <section className="grid grid-cols-3 flex md:flex-row flex-col bg-[url('/artificial-intelligence.jpg')]">
      
      <div className='p-16 gap-6 col-span-2'>
        <h1 className='text-teal-400 font-bold px-16 ss:text-[72px] text-[60px]'>About us</h1>
        <p className='px-16 text-white'>Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.</p>
      </div>

    </section>
  )
}
