import { Card } from '@/components/ui/card'
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosInformationCircleOutline
} from 'react-icons/io'
import link from '@/data/links'

export default function Dock() {
  const iconClass =
    'p-1.5 lg:p-2 hover:bg-purple-100/50 rounded-full transition-colors duration-200'
  return (
    <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 z-50 lg:bottom-20">
      <Card className="flex flex-row items-center gap-2 lg:gap-4 px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-xl bg-gradient-to-br from-blue-200/35 to-purple-200/35 border-0 text-slate-900">
        <a
          href={link.github}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <IoLogoGithub className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href={link.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <IoLogoLinkedin className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href={link.mail} className={iconClass}>
          <IoIosMail className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">Email</span>
        </a>
        <a href={link.cv} className={iconClass}>
          <IoIosInformationCircleOutline className="h-5 w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">CV</span>
        </a>
      </Card>
    </div>
  )
}
