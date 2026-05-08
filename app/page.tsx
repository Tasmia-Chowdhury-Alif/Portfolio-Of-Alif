'use client'

import { CustomCursor } from '@/components/custom-cursor'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollProgress } from '@/components/scroll-progress'
import { PageLoader } from '@/components/page-loader'
import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { TechStack } from '@/components/sections/tech-stack'
import { Skills } from '@/components/sections/skills'
import { Education } from '@/components/sections/education'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      
      <main className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
