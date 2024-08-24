import React from 'react'
import bg_image from '../assets/image/aboutImg1_3.jpg'

const Header = (props) => {
  return (
    <section className='before:content-[""] before:absolute before:bg-[#0f172bd7] before:z-[-9] before:w-full before:h-[60vh]'>
      <img className='absolute z-[-10] w-full h-[60vh] object-cover' src={bg_image} alt="" />
      <div className="container-section h-[60vh] flex items-center justify-center">
        <div className="content flex flex-col text-white text-center gap-y-[20px]">
          <h1 className='text-[50px] font-semibold'>{props.header == 'ABOUT' ? 'About Us' : props.header}</h1>
          <div>
            <p className='flex gap-[15px] items-center justify-center'>
              <span className='text-yellow'>HOME</span>
              <span className='text-[#8B8C8C]'>/</span>
              <span className='text-yellow'>PAGES</span>
              <span className='text-[#8B8C8C]'>/</span>
              <span>{props.header}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header