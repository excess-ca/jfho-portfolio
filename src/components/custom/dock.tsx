import { Card } from '@/components/ui/card'
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

export default function Dock() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-6">
      <Card className="flex flex-row items-center gap-2 lg:gap-4 px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-xl bg-gradient-to-br from-blue-200/35 to-purple-200/35 border-0 text-neutral-900">
        <a
          href="https://github.com/excess-ca"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 lg:p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200"
        >
          <IoLogoGithub className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/francesca-oquindo-625029298/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 lg:p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200"
        >
          <IoLogoLinkedin className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:oquindojulia@gmail.com"
          className="p-1.5 lg:p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200"
        >
          <IoIosMail className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">Email</span>
        </a>
      </Card>
    </div>
  )
}