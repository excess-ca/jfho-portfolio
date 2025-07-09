import { Card } from '@/components/ui/card'
import { Github, Linkedin } from 'lucide-react'

export default function Dock() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Card className="flex flex-col rounded-full items-center gap-4 px-3 py-5 shadow-xl bg-gradient-to-br from-blue-200/35 to-purple-200/35 border-2 text-blue-900">
        <a
          href="https://github.com/excess-ca"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/francesca-oquindo-625029298/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Card>
    </div>
  )
}
