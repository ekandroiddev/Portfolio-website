import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { RxGithubLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id='contact' className='w-[80%] mx-auto h-[100%] my-7 text-black'>
      <div className='w-full h-auto flex flex-col justify-center items-center'>
        <h3 className='text-[30px] flex items-center gap-2 text-[#06D001]'>
          <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
          </span>
          Contact Form
          <span className='w-8 h-[3px] bg-[#06D001] inline-flex'>
          </span></h3>
        <p className=''>Let's Connect with me !</p>
      </div>

      <div className='w-full my-8 h-[100%] bg-[#f4f2ff] rounded-2xl flex flex-col mdl:flex-row items-center gap-3 border-2 border-[#06D001]'>
        <div className='w-full mdl:w-[30%] h-full pl-[5px] mdl:px-10 flex flex-col justify-start md:items-start gap-2 mdl:gap-5'>
          <h3 className='text-[28px] text-[#06D001]'>Contact <br /> Information</h3>
          <p className='text-black'>
            <span>Email : </span><br /> ajaykumar23saharsa@gmail.com
          </p>
          <p className='text-black'>
            <span>Phone : </span><br /> +916299368862
          </p>
          <p className='text-black'>
            <span>Address : </span> <br /> Saharsa Bihar 852216
          </p>
          <h3 className='text-[20px] text-[#06D001]'>Follow Me :</h3>
          <div className='w-full h-auto flex items-center justify-center mdl:justify-start gap-5'>
            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001] hover:-translate-y-1 duration-100'>
              <CiLinkedin />
            </Link>
            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001]  hover:-translate-y-1 duration-100'>
              <RxGithubLogo />
            </Link>
            <Link href="#about" className='flex flex-col justify-center items-center w-[30px] h-[30px] rounded-full bg-[#06D001]  hover:-translate-y-1 duration-100'>
              <BsInstagram />
            </Link>

          </div>

        </div>
        <div className='w-full py-4 mdl:w-[70%] h-full px-[5px] mdl:px-20 bg-black rounded-2xl flex flex-col justify-center gap-4'>
          <h3 className='w-full h-auto text-[23px] text-[#06D001] font-semibold '>Just Say Hello !</h3>
          <p className='w-full h-auto text-[15px] text-[#06D001]'>Let me Know Something about you !</p>
          <form action="" method="post" className='w-full h-auto flex flex-col justify-between gap-2'>
            <div className='w-full h-auto flex gap-5 '>
              <div className='w-[50%] h-auto'>
                <label htmlFor="" className='pl-[10px] text-white'>First Name :</label>
                <br />
                <input type="text" className='w-full pl-3 text-black h-9 rounded-lg border-2 ' />

              </div>
              <div className='w-[50%] h-auto'>
                <label htmlFor="" className='pl-[10px] text-white'>Last Name :</label>
                <br />
                <input type="text" className='w-full pl-3 text-black h-9 rounded-lg border-2 ' />

              </div>
            </div>
            <div className='w-full '>
              <label htmlFor="" className='pl-[10px] text-white'>Email : </label><br />
              <input type="text" className='w-full pl-3 text-black h-9 rounded-lg border-2 ' />
            </div>
            <div className='w-full '>
              <label htmlFor="" className='pl-[10px] text-white'>Address : </label><br />
              <input type="text" className='w-full pl-3 text-black h-9 rounded-lg border-2 ' />
            </div>

            <div className='w-full '>
              <label htmlFor="" className='pl-[10px] text-white'>Query : </label><br />
              <textarea name="postContent" rows={4} cols={40}  className='w-full px-3 py-3 text-black h-18 rounded-lg border-2'/>
            </div>
            <div className='w-full flex  items-center justify-center '>
              <button className='px-3 py-1  bg-[#06D001]  rounded-lg text-[18px] font-bold hover:bg-white duration-200'>Submit</button>
            </div>


          </form>


        </div>

      </div>

    </section>
  )
}

export default ContactSection
