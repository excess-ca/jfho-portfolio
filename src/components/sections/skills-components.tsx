import { BiLogoMicrosoftTeams } from 'react-icons/bi'
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSlack
} from 'react-icons/fa'
import { IoLogoBitbucket, IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiCanva,
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiTypescript
} from 'react-icons/si'

export function Languages() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">Languages</p>
        <div className="flex items-center space-x-2">
          <IoLogoHtml5 className="text-2xl text-orange-600" title="HTML" />
          <IoLogoCss3 className="text-2xl text-blue-600" title="CSS" />
          <SiJavascript
            className="text-2xl text-yellow-500"
            title="Javascript"
          />
          <SiTypescript className="text-2xl text-blue-600" title="Typescript" />
          <FaPhp className="text-3xl text-purple-600" title="PHP" />
          <FaJava className="text-2xl text-red-600" title="Java" />
          <FaPython className="text-2xl text-yellow-500" title="Python" />
          <SiDotnet className="text-2xl text-blue-600" title=".NET" />
        </div>
      </div>
    </div>
  )
}

export function Frameworks() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">Frameworks</p>
        <div className="flex items-center space-x-2">
          <FaReact className="text-2xl text-cyan-500" title="React" />
          <SiNextdotjs className="text-2xl text-gray-800" title="Next.js" />
          <FaLaravel className="text-2xl text-red-600" title="Laravel" />
          <FaNodeJs className="text-2xl text-green-600" title="Node.js" />
          <SiExpress className="text-2xl text-gray-600" title="Express.js" />
          <RiTailwindCssFill
            className="text-2xl text-sky-400"
            title="Tailwind CSS"
          />
        </div>
      </div>
    </div>
  )
}

export function Databases() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">Databases</p>
        <div className="flex items-center space-x-2">
          <SiMysql className="text-3xl text-blue-600" title="MySQL" />
          <SiPostgresql
            className="text-2xl text-stone-800"
            title="PostgreSQL"
          />
          <SiMongodb className="text-2xl text-green-600" title="MongoDB" />
          <SiSequelize className="text-2xl text-blue-600" title="Sequelize" />
        </div>
      </div>
    </div>
  )
}

export function Devops() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">DevOps</p>
        <div className="flex items-center space-x-2">
          <FaGitAlt className="text-2xl text-orange-600" title="Git" />
          <FaGithub className="text-2xl text-gray-800" title="GitHub" />
          <IoLogoBitbucket
            className="text-2xl text-blue-600"
            title="Bitbucket"
          />
        </div>
      </div>
    </div>
  )
}

export function Projectmanagement() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">Project Management</p>
        <div className="flex items-center space-x-2">
          <SiJira className="text-xl text-blue-600" title="Jira" />
          <FaSlack className="text-2xl text-red-600" title="Slack" />
          <BiLogoMicrosoftTeams
            className="text-2xl text-purple-600"
            title="Microsoft Teams"
          />
        </div>
      </div>
    </div>
  )
}

export function Design(){
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-semibold">Design</p>
        <div className="flex items-center space-x-2">
          <FaFigma className="text-2xl text-orange-600" title="Figma" />
          <SiCanva className="text-2xl text-cyan-500" title="Canva" />
        </div>
      </div>
    </div>
  )
}
