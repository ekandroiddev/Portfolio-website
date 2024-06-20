import Footer from '@/components/Footer'    
import AboutSection from '@/pages/AboutSection'
import ContactSection from '@/pages/ContactSection'
import HomeSection from '@/pages/HomeSection'
import ProjectSection from '@/pages/ProjectSection'
import ServiceSection from '@/pages/ServiceSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative w-full h-[100%]'>
      <div className='absolute top-0 left-0'>
        <HomeSection />
        <AboutSection />
        <ServiceSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
      
      
    </main>
  )
}
