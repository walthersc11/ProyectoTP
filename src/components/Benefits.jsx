import React from 'react'
import Image from 'next/image'

export default function Benefits () {
  
  return (
    <section>
      <div className='flex md:flex-row flex-col justify-center items-center'>
        <h1 className=' text-center text-white font-bold text-[40px] mr-2'>¿Qué ofrece
        <a className='text-center text-teal-300 font-bold text-[40px]'> Mapri Chatbot</a>
        ?
        </h1>        
      </div>
      <div className='flex md:flex-row flex-col p-16 gap-6'>
        <div className='flex-1 justify-center items-center rounded-2xl bg-white p-2 sm:px-2'>
          <div className='items-center text-center rounded-xl bg-black p-6 h-full'>
            <div className='flex justify-center items-center p-6'>
              <Image src="/diagnostico.svg" width={80} height={80}/>
            </div>
            <h1 className='font-poppins font-semibold text-[30px] text-white'>
              Diagnostico inmediato</h1>
            <p className='font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
            </p>
          </div>        
        </div>

        <div className='flex-1 justify-center items-center rounded-2xl bg-white p-3 sm:px-3'>
          <div className='text-center rounded-xl bg-black p-6 h-full'>
            <div className='flex justify-center items-center p-6'>
              <Image src="/telefono.svg" width={80} height={80}/>
            </div>
            <h1 className='font-poppins font-semibold text-[30px] text-white'>
              Contacto con psicólogos</h1>
            <p className='font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
            </p>
          </div>        
        </div>

        <div className='flex-1 justify-center items-center rounded-2xl bg-white p-3 sm:px-3'>
          <div className='text-center rounded-xl bg-black p-6 h-full'>
            <div className='flex justify-center items-center p-6'>
              <Image src="/24-hours.svg" width={80} height={80}/>
            </div>
            <h1 className='font-poppins font-semibold text-[30px] text-white'>
              Atención 24/7</h1>
            <p className='font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
            </p>
          </div>        
        </div>

      </div>
    </section>
  )
}
