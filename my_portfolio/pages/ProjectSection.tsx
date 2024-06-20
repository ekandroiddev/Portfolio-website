import React from 'react'
import Image from 'next/image'
import home_image from '../public/assets/images/home_image.png'

const ProjectSection = () => {
  return (
    <section id='projectSection' className='w-[80%] mx-auto h-[100%] my-10 text-black'>
      <div className='w-full h-fill flex flex-col justify-center items-center'>
        <h3 className='text-[30px] flex items-center gap-2 text-[#06D001]'>
          <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
          </span>
          Project we build
          <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
          </span></h3>
        <p className=''>Let's Know what have done before !</p>
      </div>
      <div className='w-full h-full mt-[20px] '>
        <div className='w-full h-full  grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 items-center justify-items-center gap-6'>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
              <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Tic Tac Toe</h3>
              <h3 className=' '>Platform : Android</h3>
              <ul className='flex gap-3 '>
                <li className=''>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
              <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Quizz App</h3>
              <h3 className=''>Platform : Android</h3>
              <ul className='flex gap-3  '>
                <li className=''>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
              <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Expance Recorder</h3>
              <h3 className=' '>Platform : Android</h3>
              <ul className='flex gap-3  '>
                <li className=' '>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
            <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Music Player</h3>
              <h3 className=' '>Platform : Android</h3>
              <ul className='flex gap-3  '>
                <li className='   '>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
              <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Music Player</h3>
              <h3 className=' '>Platform : Android</h3>
              <ul className='flex gap-3  '>
                <li className='   '>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
          <div className='w-full px-2 h-[300px] relative bg-black border-2 border-[#06D001] rounded-lg cursor-pointer hover:-translate-y-2 duration-300'>
            {/* <Image src={home_image} alt={'image'} className='w-full h-[70%] bg-white' /> */}
            
            <div className='w-full px-2 h-full text-white text-[17px] absolute flex flex-col items-center justify-center'>
            <h3 className='w-fill h-fill font-semibold text-[21px]'>Title : Music Player</h3>
              <h3 className=' '>Platform : Android</h3>
              <ul className='flex gap-3  '>
                <li className=''>
                  Tech :
                </li>
                <li >
                  Java
                </li>
                <li >
                  XML
                </li>

              </ul>
            </div>
          </div>
        

      
        </div>
      </div>

    </section>
  )
}

export default ProjectSection
