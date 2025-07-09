import Dock from '@/components/custom/dock'
import Header from '@/components/custom/header'
import HomeSection from '@/components/sections/home'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50/25 flex flex-col items-center justify-center p-4">
      <Image
        src="/images/background.jpg"
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] animate-pulse"
        width={1920}
        height={1080}
      />
      <Dock />
      <Header />
      <main>
        <HomeSection />
      </main>
      <footer className="text-center mt-8">
        <p className="text-sm text-gray-600">Made with 🩷</p>
        <p className="text-xs text-gray-500">
          © 2025 @jfhoquindo — all rights reserved.
        </p>
      </footer>
    </div>
  )
}