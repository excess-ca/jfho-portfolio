import { Separator } from '@/components/ui/separator'
import { experience } from '@/data/information'
import { GoLinkExternal } from 'react-icons/go'

export default function Experience() {
  return (
    <section className="space-y-4">
      <h1 className="font-bold text-2xl">Experience 👩🏻‍💻</h1>
      <Separator className="bg-neutral-500" />
      <section className="space-y-4">
        {experience.items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold">{item.company}</h2>
                {item.link && (
                  <a
                    aria-label={`Visit ${item.company} website`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <GoLinkExternal size={16} />
                  </a>
                )}
              </div>
              <p className="text-sm italic text-neutral-500">{item.duration}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
