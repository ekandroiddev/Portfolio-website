import React from 'react';
import home_image from '../public/assets/images/home_image.png';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section
      id='homeSection'
      className='relative text-white w-full h-[100vh] flex justify-center items-center'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{
          backgroundImage: "url('/assets/images/Home BG image.jpg')", 
        }}
      ></div>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>      
      {/* Content */}
      <div className='relative w-[80%] mx-auto h-full flex items-center justify-center'>
        <div className='w-[100%] flex justify-center items-center -mt-10'>
          <div className='w-[0%] mdl:w-[40%] h-auto'>
             
          </div>
          <div className='w-[100%] mdl:w-[60%] h-full flex flex-col justify-center items-start mdl:items-end '>
            <p className='text-[16px] flex flex-row items-center gap-3'>
              <span className='w-6 h-[3px] bg-[#06D001] inline-flex'></span>
              Welcome to My place.
            </p>
            <h2 className='text-[18px] md:text-[20px]'>
              I'm <span className='text-[#06D001]'>Ajay Kumar...</span>
            </h2>
            <p className='text-[16px] flex text-justify'>               
              A passionate Android application developer with hands-on experience in Java and Kotlin, eager to build innovative and user-friendly mobile applications. Proficient in Android Studio, familiar with RESTful APIs, and committed to continuous learning and improving coding skills.
            </p>
            <div className='w-full flex justify-center mdl:justify-end h-7 mt-[20px] gap-3'>
              <Link href={'#'}>
                <button className='px-3 p-1 font-semibold rounded-md bg-[#06D001] text-black hover:-translate-y-1 duration-200'>
                  Download CV
                </button>
              </Link>
              <Link href={'#'}>
                <button className='px-3 p-1 font-semibold rounded-md bg-[#06D001] text-black duration-200 hover:-translate-y-1'>
                  Join Us!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
