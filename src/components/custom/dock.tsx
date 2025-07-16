import { Card } from '@/components/ui/card'
import externalLinks from '@/data/links'

export default function Dock() {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-20">
      <Card className="flex flex-row items-center gap-3 lg:gap-4 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full shadow-xl bg-gradient-to-br from-blue-200/25 to-purple-200/25 border-0 text-slate-900">
        {externalLinks.map(({ key, href, icon: Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-2 hover:bg-purple-200/50 rounded-full transition-colors duration-200"
          >
            <Icon className="h-6 w-6 lg:h-6 lg:w-6" />
            <span className="sr-only">{key}</span>
          </a>
        ))}
      </Card>
    </div>
  )
}
