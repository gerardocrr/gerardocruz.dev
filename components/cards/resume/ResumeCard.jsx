import { Briefcase, Download } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import JobsList from '@/components/cards/resume/JobList'
import { Button } from '@/components/ui/Button'

export default function Resume({ className }) {
  return (
    <Card className={cn(className)}>
      <Card.Pill icon={Briefcase}>Experiencia</Card.Pill>
      <JobsList />
      <div className="flex gap-2 justify-between w-full">
        <Button
          href="/images/blog/cover-lorem-ipsum.png"
          styleBtn="boxgen"
          className="w-full"
          target="_blank"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Descargar CV
        </Button>
      </div>
    </Card>
  )
}
