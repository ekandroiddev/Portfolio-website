import React from 'react'
import { PiAndroidLogoBold } from "react-icons/pi";
import { SlGlobe } from "react-icons/sl";

const ServiceSection = () => {
  return (
    <section id='services' className='w-[80%] mx-auto h-[100%] my-20 text-black'>
      <div className='w-full h-fill flex flex-col justify-center items-center'>
        <h3 className='text-[30px] flex items-center gap-2 text-[#06D001]'>  <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
        </span> Word we Do  <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
          </span>
        </h3>
        <p className=''>Let's Know what we do !</p>
      </div>
      <div className='text-black w-full my-5 h-full grid sm:grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-5 '>
        {/* <div className='w-[100%] h-full flex item justify-around'> */}
        <div className='w-full  h-[280px]  bg-[#000000] border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
          <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
            <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-[#06D001] text-[#06D001]'>
              <PiAndroidLogoBold />
            </div>
            <h3 className='my-2 text-[17px] text-[#06D001]'>Android App Development</h3>
            <p className='text-[16px] text-justify text-white'>
            Android App Development involves creating apps for Android OS using Java/Kotlin, Android Studio, SDK, and various UI/data management tools.
            </p>
          </div>
        </div>
        <div className='w-full  h-[280px]   bg-[#000000] border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
          <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
            <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-[#06D001] text-[#06D001]'>
              <SlGlobe />
            </div>
            <h3 className='my-2 text-[17px] text-[#06D001]'>Web Application Development</h3>
            <p className='text-[16px] text-justify text-white'>
            Web Application Development involves creating interactive applications accessed via web browsers, using languages like HTML, CSS, JavaScript, and frameworks like Next.js or Typescript.
            </p>
          </div>
        </div>
        {/* <div className='w-full  h-[280px]   bg-[#02244a] border border-[#00FFFF] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
          <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
            <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-slate-800 text-[#00FFFF]'>
              <GrAndroid />
            </div>
            <h3 className='my-2 text-[19px] font-bold text-[#00FFFF]'>Cross App Developer</h3>
            <p className='text-[17px] font-semibold text-justify text-white'>By using Flutter, React Native i can transform your thought into Mobile Application.</p>
          </div>
        </div> */}
        {/* </div> */}

        {/* <div className='w-[100%] h-full flex item justify-around'> */}
        {/* <div className='w-[350px] md:w-[290px] h-[280px]   bg-[#00308F] border-2 border-gray-600 rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
              <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-slate-800 text-cyan-400'>
                <GrAndroid />
              </div>
              <h3 className='my-2 text-[20px] font-bold text-cyan-400'>Android App Developer</h3>
              <p className='text-[17px] font-semibold text-justify'>elit. Natus delectus similique placeat deleniti alias debitis porro dolorum maxime rerum excepturi.</p>
            </div>
          </div>    
          <div className='w-[350px] md:w-[290px] h-[280px]  bg-[#00308F] border-2 border-gray-600 rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
              <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-slate-800 text-cyan-400'>
                <GrAndroid />
              </div>
              <h3 className='my-2 text-[20px] font-bold text-cyan-400'>Android App Developer</h3>
              <p className='text-[17px] font-semibold text-justify'>elit. Natus delectus similique placeat deleniti alias debitis porro dolorum maxime rerum excepturi.</p>
            </div>
          </div>    
          <div className='w-[350px] md:w-[290px] h-[280px]  bg-[#00308F] border-2 border-gray-600 rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            <div className='w-[80%] h-full mx-auto flex flex-col items-center justify-center'>
              <div className='w-[40px] h-[40px] rounded-lg flex items-center justify-center border-2 border-slate-800 text-cyan-400'>
                <GrAndroid />
              </div>
              <h3 className='my-2 text-[20px] font-bold text-cyan-400'>Android App Developer</h3>
              <p className='text-[17px] font-semibold text-justify'>elit. Natus delectus similique placeat deleniti alias debitis porro dolorum maxime rerum excepturi.</p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default ServiceSection
