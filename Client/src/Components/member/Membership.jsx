import React from 'react'
import member_image from '../assets/image/memberSection.jpg'

const Membership = () => {
  return (
    <>
      <section className='overflow-hidden relative before:content-[""] before:absolute before:bg-[#000000b3] before:z-[-9] before:w-full before:h-screen'>
        <div className='container-section flex flex-col p-[30px] text-center items-center justify-center gap-6'>
          <img className='absolute z-[-10] w-full  object-cover' src={member_image} alt="" />
          <h1 className='text-[40px] text-white font-semibold'>Sign up for a special membership to receive monthly or seasonal discounts.</h1>
          <button className='p-[15px_30px] bg-yellow text-white text-[16px] hover:bg-yellowHover'>go to member</button>
        </div>
      </section>
    </>
  )
}

export default Membership