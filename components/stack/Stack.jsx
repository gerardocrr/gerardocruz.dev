'use client'

import { stackDevelopment } from '@/data/stacks'

import { Tool } from '@/components/stack/ToolItem'
import { ToolsSectionGrid } from '@/components/stack/ToolsSections'

export function Stack() {
  return (
    <>
      <div className="space-y-20">
        <ToolsSectionGrid title="Desarrollo">
          {stackDevelopment.map((item, index) => (
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
