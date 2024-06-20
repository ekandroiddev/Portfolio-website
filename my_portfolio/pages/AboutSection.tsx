"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home_image from '../public/assets/images/bg111.png'
import Education from '@/components/Education'
import Skills from '@/components/Skills'

const AboutSection = () => {
  const [Qualification, setQualification] = useState(true);
  const [skills, setskills] = useState(false);

  const qualificationView = () => {
    setQualification(true);
    setskills(false);
  }
  const skillsView = () => {
    setskills(true);
    setQualification(false);
  }

  return (
    <section id='aboutSection' className='w-[80%] mx-auto my-3 h-[100%] text-black flex flex-col items-center'>
      <div className='w-full h-fill flex flex-col justify-center items-center'>
        <h3 className='text-[28px]  flex items-center gap-2 text-[#06D001]'>  <span className='w-8 h-[3px]  bg-[#06D001] inline-flex'>
        </span> About Me <span className='w-8 h-[3px]  bg-[#06D001] inline-flex'>
          </span>
        </h3>
        <p className=''>let's Know something about me !</p>
      </div>
      <div className='w-full h-full flex flex-col mdl:flex-row items-center justify-between gap-8 mt-7'>
        <div className='hidden md:flex w-full mdl:w-[35%] h-full items-center justify-center '>
          <Image src={home_image} alt={'about'} className='w-auto h-[200px] mdl:h-[280px] lg:h-[390px] border-2 border-[#06D001] rounded-lg' />
        </div>
        <div className='w-full mdl:w-[65%] h-fill flex flex-col text-justify '>
          <h3 className='text-[15px] mdl:text-[16px] '>Hello,</h3>
          <h3 className='w-full mdl:w-[65%] h-fill flex text-justify gap-1 text-[18px] mdl:text-[20px]'><span className='text-[#06D001]'>AJAY KUMAR.</span></h3>
          <p className='text-[16px]'>
          I am Ajay Kumar from Saharsa, Bihar. I completed my schooling in Saharsa, achieving 68% in matriculation from Zila School Saharsa in 2019, followed by 64% in Intermediate (I Sc) from R M College Saharsa in 2021. Afterward, I moved to Patna and pursued BCA (Bachelor of Computer Application) from ISM Patna, graduating in June 2024.
<br />During my college years, I initially aimed to become a web developer and started pursuing that path. However, I later shifted my focus to becoming a mobile application developer. Currently, I am working as a professional Android application developer. To date, I have developed over 5 Android applications using Java and created 3 websites using Next.js with Tailwind CSS, among other technologies.
  </p>

          <div className='w-full h-fill mt-[8px] flex flex-col sm:flex-row gap-3'>

            <button
              onClick={qualificationView}
              className={` ${Qualification ? "bg-[#06D001] text-black" : "bg-[#02244a] text-white"} px-3 p-1 font-semibold   rounded-md hover:-translate-y-1 duration-200`}>
              Qualification
            </button>


            <button
              onClick={skillsView}
              className=
              {` ${skills ? "bg-[#06D001] text-black" : "bg-[#02244a] text-white"} px-3 p-1 font-semibold  rounded-md  duration-200 hover:-translate-y-1 `}
            >
              Skills
            </button>

            {/* <Link href={'#'}>
              <button className='px-3 p-1 font-semibold border-2 rounded-md border-green-400 hover:bg-white duration-200 hover:-translate-y-1'>
                Achievements
              </button>
            </Link> */}
          </div>

          <div className='w-full f-full text-[17px] md:text-[20px] mt-3 ml-3'>
            {Qualification && <Education />}
            {skills && <Skills />}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
