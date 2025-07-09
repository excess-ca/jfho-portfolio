import Dock from '@/components/custom/dock'
import Hero from '@/components/custom/hero'
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
      <Hero />
    </div>
  )
}