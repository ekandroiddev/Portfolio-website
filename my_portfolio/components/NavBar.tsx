"use client"
import Link from 'next/link' 
import React, { useState, useEffect } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { RxGithubLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";


const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg('bg-[#000000]');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-[90px] hidden mdl:flex fixed top-0 z-10 transition-colors duration-1000 ${navbarBg}`}>
      <div className='w-[88%] mx-auto h-full flex flex-row items-center justify-between text-black'>
        <div id='logo' className='cursor-pointer bg-[#06D001] hover:bg-[#ffff] px-3 py-1 rounded-xl'>
          <Link href="/" className='text-[24px] font-semibold'>
              AJ
          </Link>
        </div>
        <div id='links' className='hidden lg:inline-flex gap-8 items-center'>
          <ul className='flex gap-8 text-[15px] text-[#06D001]'>
            <Link href="#homeSection" className=' hover:text-[#ffff] duration-200'>
              <li>Home</li>
            </Link>
            <Link href="#aboutSection" className=' hover:text-[#ffff] duration-200' >
              <li>About</li>
            </Link>
            <Link href="#services" className=' hover:text-[#ffff] duration-200'>
              <li>Services</li>
            </Link>
            <Link href="#projectSection" className=' hover:text-[#ffff] duration-200'>
              <li>Portfolio</li>
            </Link>
            <Link href="#about" className=' hover:text-[#ffff] duration-200'>
              <li>Blogs</li>
            </Link>
            <Link href="#contact" className=' hover:text-[#ffff] duration-200'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div id='socal'>
          <ul className='hidden lg:flex gap-5 items-center'>

            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001] hover:bg-[#ffff] hover:text-[#091a45]  hover:-translate-y-1 duration-100'>
              <CiLinkedin />
            </Link>
            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001] hover:bg-[#ffff] hover:-translate-y-1 duration-100'>
              <RxGithubLogo />
            </Link>
            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001] hover:bg-[#ffff] hover:text-[#db2777] hover:-translate-y-1 duration-100'>
              <BsInstagram />
            </Link>
          </ul>
        </div>
        <div className='w-6 h-5 flex flex-col justify-between items-center text-4xl text-teal-500 cursor-pointer overflow-hidden group lg:hidden'>
          <span className='w-full h-[2px] bg-teal-300 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-teal-300 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-teal-300 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>

        </div>
      </div>
    </div>
  )
}

export default NavBar
