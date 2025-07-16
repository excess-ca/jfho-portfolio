import { Separator } from '@/components/ui/separator'
import { education } from '@/data/information'
import { GoLinkExternal } from 'react-icons/go'

export default function Education() {
  return (
    <section className="space-y-4">
      <h1 className="font-bold text-2xl">Education 🎓</h1>
      <Separator className="bg-neutral-500" />
      <section className="space-y-4">
        {education.items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {item.link ? (
                  <>
                    <span className="hidden lg:inline font-semibold text-neutral-900">
                      {item.institution}
                    </span>
                    <a
                      aria-label={`Visit ${item.institution} website`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500 hover:text-blue-700 transition-colors lg:hidden"
                    >
                      {item.institution}
                    </a>
                  </>
                ) : (
                  <span className="font-semibold text-neutral-900">
                    {item.institution}
                  </span>
                )}
                {item.link && (
                  <a
                    aria-label={`Visit ${item.institution} website`}
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
            <p className="text-sm text-neutral-700">{item.degree}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
