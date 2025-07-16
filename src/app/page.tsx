import Dock from '@/components/custom/dock'
import Image from 'next/image'
import { hero } from '@/data/information'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Education from '@/components/sections/education'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/background.jpg"
        alt="background"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] animate-pulse"
        width={1920}
        height={1080}
        style={{ minWidth: '100%', minHeight: '100%' }}
      />

      {/* Dock */}
      <Dock />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 lg:fixed lg:left-0 lg:top-0 lg:h-full flex flex-col items-center justify-center p-6 lg:p-10">
          <div className="space-y-4 text-center lg:text-left max-w-md">
            <Image
              src="/images/profile.jpeg"
              alt="Profile Picture"
              className="rounded-full w-28 h-28 mx-auto lg:mx-0"
              width={800}
              height={800}
              priority
            />
            <h1 className="text-xl lg:text-2xl font-bold">{hero.name}</h1>
            <p className="text-sm lg:text-base font-semibold">{hero.title}</p>
            <p className="text-xs lg:text-sm">{hero.description}</p>
            <p className="text-xs lg:text-sm italic">{hero.location}</p>
          </div>

          {/* Footer - only show on large screens in left column */}
          <footer className="hidden lg:block absolute bottom-8 text-center">
            <p className="text-sm text-gray-600">Made with 🩷</p>
            <p className="text-xs text-gray-500">© 2025 @jfhoquindo — all rights reserved.</p>
          </footer>
        </div>

        {/* Scrollable Right Column */}
        <div className="w-full lg:w-1/2 lg:ml-auto">
          <div className="overflow-y-auto p-4 lg:p-10">
            <div className="space-y-8 lg:pt-16">
              <Projects />
              <Experience />
              <Skills />
              <Education />

              {/* Footer for mobile */}
              <footer className="lg:hidden text-center mt-8">
                <p className="text-sm text-gray-600">Made with 🩷</p>
                <p className="text-xs text-gray-500">© 2025 @jfhoquindo — all rights reserved.</p>
              </footer>

              {/* Extra padding at bottom for better scrolling on desktop */}
              <div className="hidden lg:block pb-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}