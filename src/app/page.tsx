import Dock from '@/components/custom/dock'
import Image from 'next/image'
import { hero } from '@/data/information'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50/25 flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <Image
        src="/images/background.jpg"
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] animate-pulse"
        width={1920}
        height={1080}
      />

      {/* Dock */}
      <Dock />

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl p-4">
        {/* Left Column (Fixed) */}
        <div className="space-y-2 text-center lg:text-left sticky top-4 self-start">
          <Image
            src="/images/profile.jpeg"
            alt="Profile Picture"
            className="rounded-full w-35 h-35 mx-auto lg:mx-0"
            width={800}
            height={800}
            priority
          />
          <h1 className="text-2xl font-bold">{hero.name}</h1>
          <p className="font-semibold">{hero.title}</p>
          <p>{hero.description}</p>
          <p className="italic">{hero.location}</p>
        </div>

        {/* Right Column (Scrollable) */}
        <div className="space-y-8 overflow-y-auto max-h-[calc(100vh-2rem)]">
          <Skills />
          <Experience />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600">Made with 🩷</p>
        <p className="text-xs text-gray-500">
          © 2025 @jfhoquindo — all rights reserved.
        </p>
      </footer>
    </div>
  )
}