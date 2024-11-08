'use client'

import { stackDeveopment } from '@/data/stacks'

import { Tool } from '@/components/stack/ToolItem'
import { ToolsSectionGrid } from '@/components/stack/ToolsSections'

export function SwitchTool() {
  return (
    <>
      <div className="space-y-20">
        <ToolsSectionGrid title="Desarrollo">
          {stackDeveopment.map((item, index) => (
            <Tool
              grid={true}
              title={item.title}
              href={item.link}
              key={item.title}
              img={item.img}
              index={index}
            >
              {item.title}
            </Tool>
          ))}
        </ToolsSectionGrid>
      </div>
    </>
  )
}
