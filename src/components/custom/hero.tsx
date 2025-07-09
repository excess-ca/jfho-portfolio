import { Card } from '@/components/ui/card'
import info from '@/data/information'
import Image from 'next/image'

export default function Hero() {
  return (
    <Card className="p-4 lg:p-6 bg-white/70 backdrop-blur-md text-gray-800 rounded-xl shadow-md w-full max-w-lg mx-auto flex flex-row items-center min-w-[300px] min-h-[150px]">
      {/* Image Section */}
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden border border-gray-300 shadow-sm mr-4">
        <Image
          src="/images/profile.jpeg"
          alt="Profile Picture"
          width={130}
          height={130}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-lg lg:text-xl font-bold mb-1 text-gray-900">
          {info.name}
        </h1>
        <p className="text-sm lg:text-base italic text-gray-700 mb-2">
          🚀 {info.title}
        </p>
        <p className="text-xs lg:text-sm text-gray-600 mb-2">
          {info.description}
        </p>
        <div className="text-xs lg:text-sm text-gray-600">
          <p>📍 {info.location}</p>
        </div>
      </div>
    </Card>
  )
}