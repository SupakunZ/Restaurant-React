import React, { useEffect, useRef, useState } from 'react'
import logo_nav from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'


const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const navRef = useRef()
  const navMenuRef = useRef()
  const miniMenuRef = useRef()
  const arrowRef = useRef()

  const handleToggle = () => {
    if (toggle) {
      miniMenuRef.current.classList.add('max-h-[250px]')
      arrowRef.current.classList.add('rotate-90')
    } else {
      miniMenuRef.current.classList.remove('max-h-[250px]')
      arrowRef.current.classList.remove('rotate-90')
    }
    setToggle(!toggle)
  }

  const handleonTop = (e) => {
    e.window.scrollY(0)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('!bg-blackBlue')
      } if (window.scrollY < 50) {
        navRef.current.classList.remove('!bg-blackBlue')
      }
    })
  }, [])

  return (
    <>
      <nav ref={navRef} className='py-[5px] w-screen bg-[#0f172b] lg:bg-transparent fixed z-20 transition ease-linear duration-200'>
        <div className='flex items-center justify-between container-section'>
          <Link to={'/'} onClick={(e) => e.window.scrollY(0)} className='logo flex items-center gap-2'>
            <img className='w-[60px] ani' src={logo_nav} alt="" />
            <h1 className='text-[23px] text-white font-semibold'>RESTAURANT</h1>
          </Link>
          <div className="nav-menu flex text-[15px] text-white gap-[10px]">
            <ul className='hidden lg:flex items-center justify-center'>
              <Link to={'/'} onClick={(e) => e.window.scrollY(0)} className='p-[15px] hover:text-yellow transition duration-300'>HOME</Link>
              <Link to={'/about'} onClick={(e) => e.window.scrollY(0)} className='p-[15px] hover:text-yellow transition duration-300'>ABOUT</Link>
              <Link to={'/service'} onClick={(e) => e.window.scrollY(0)} className='p-[15px] hover:text-yellow transition duration-300'>SERVICE</Link>
              <Link to={'/menu'} onClick={(e) => e.window.scrollY(0)} className='p-[15px] hover:text-yellow transition duration-300'>MENU</Link>
              <div class="mx-auto flex w-full items-center justify-center">
                <div class="group relative cursor-pointer">
                  <div class="flex items-center justify-between gap-2 p-[15px]">
                    <a class="menu-hover text-base font-medium text-[16px] text-white group-hover:text-yellow" onClick="">
                      PAGES
                    </a>
                    <span className='group-hover:text-yellow'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                  <div
                    class="invisible opacity-0 absolute z-50 text-[15px] flex w-[9rem] top-[3.9rem] flex-col bg-gray-100 py-1 px-4 transition-all duration-300 text-gray-800 shadow-xl group-hover:visible group-hover:opacity-100">
                    <Link to={'/ourteam'} onClick={(e) => e.window.scrollY(0)} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 ">
                      Our Team
                    </Link>
                    <Link to={'/testimonial'} onClick={(e) => e.window.scrollY(0)} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2">
                      Testimonial
                    </Link>
                    <Link to={'/booking'} onClick={(e) => e.window.scrollY(0)} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2">
                      Booking
                    </Link>
                  </div>
                </div>
              </div>
              <Link to={'/contact'} onClick={(e) => e.window.scrollY(0)} className='p-[15px] hover:text-yellow transition duration-300'>CONTACT</Link>
            </ul>
            <div className='flex lg:hidden items-center'>
              <Hamburger size={30} toggled={isOpen} toggle={setOpen} onToggle={toggle => toggle ? navMenuRef.current.classList.add('max-h-[550px]') : navMenuRef.current.classList.remove('max-h-[550px]')} />
            </div>
            <div ref={navMenuRef} className='absolute top-[4rem] left-0 w-full flex items-center justify-start bg-blackBlue overflow-hidden max-h-0' style={{ transition: "linear max-height 0.2s" }}>
              <ul className='flex flex-col p-[42px]'>
                <li className='cursor-pointer mb-7 hover:text-yellow transition duration-300'>HOME</li>
                <li className='cursor-pointer mb-7 hover:text-yellow transition duration-300'>ABOUT</li>
                <li className='cursor-pointer mb-7 hover:text-yellow transition duration-300'>SERVICE</li>
                <li className='cursor-pointer mb-7 hover:text-yellow transition duration-300'>MENU</li>
                <li className='flex items-start cursor-pointer relative right-2 mb-7 group' onClick={handleToggle}>
                  <i ref={arrowRef} class="bx bx-chevron-right text-[18px] mt-[2px] transition duration-300 group-hover:text-yellow"></i>
                  <span className='flex flex-col'>
                    <p className='group-hover:text-yellow transition duration-300'>PAGES</p>
                    <ul ref={miniMenuRef} className='pl-3 flex flex-col gap-6 cursor-pointer overflow-hidden max-h-0' style={{ transition: "linear max-height 0.2s" }}>
                      <li className='mt-7 hover:text-yellow transition duration-300'>OurTeam</li>
                      <li className='hover:text-yellow transition duration-300'>Testimonial</li>
                      <li className='hover:text-yellow transition duration-300'>Booking</li>
                    </ul>
                  </span>
                </li>
                <li className='cursor-pointer hover:text-yellow transition duration-300'>CONTACT</li>
              </ul>
            </div>
            <div className='flex gap-[15px] items-center'>
              <button className='p-[10px] bg-yellow border-soLinkd border-[1px] border-yellow rounded-md hover:bg-yellowHover transition duration-300'>Singup</button>
              <button className='p-[10px_15px] border-soLinkd border-[1px] border-yellow rounded-md hover:bg-yellowHover transition duration-300'>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar