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
                {item.link ? (
                  <>
                    <span className="hidden lg:inline font-semibold text-neutral-900">
                      {item.company}
                    </span>
                    <a
                      aria-label={`Visit ${item.company} website`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500 hover:text-blue-700 transition-colors lg:hidden"
                    >
                      {item.company}
                    </a>
                  </>
                ) : (
                  <span className="font-semibold text-neutral-900">
                    {item.company}
                  </span>
                )}
                {item.link && (
                  <a
                    aria-label={`Visit ${item.company} website`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <GoLinkExternal size={14} />
                  </a>
                )}
              </div>
              <p className="text-xs italic text-neutral-500">{item.duration}</p>
            </div>
            <p className="text-sm text-neutral-700">{item.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
