import { Separator } from "@/components/ui/separator";
import { Databases, Design, Devops, Frameworks, Languages, Projectmanagement } from "@/components/sections/skills-components";

export default function Skills() {
  return(
    <section className="space-y-4">
      <h1 className="font-bold text-2xl">Skills 🤹🏻‍♀️</h1>
      <Separator className="bg-neutral-500" />
      <section className="flex gap-2">
        <Languages />
      </section>
      <section className="flex gap-2">
        <Frameworks />
      </section>
      <section className="flex gap-2">
        <Databases />
      </section>
      <section className="flex gap-2">
        <Devops />
      </section>
      <section className="flex gap-2">
        <Projectmanagement />
      </section>
      <section className="flex gap-2">
        <Design />
      </section>
    </section>
  )
}