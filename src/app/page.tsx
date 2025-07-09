import Dock from '@/components/custom/dock'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      <Dock />
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-4 shadow-xl">
          <h1 className="text-2xl font-bold">Hello.</h1>
        </Card>
      </div>
    </div>
  )
}