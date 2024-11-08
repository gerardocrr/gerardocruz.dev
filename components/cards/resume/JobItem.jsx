'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function JobItem({ role }) {
  const marginBoxTop = 'last:mb-[128px]'
  return (
    <motion.div
      className={`flex gap-4 pb-4 snap-start work-item ${marginBoxTop}`}
    >
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
        <Image
          src={role.logo}
          alt={role.title}
          className="w-10 h-10 rounded-md"
        />
      </div>
      <div className="flex flex-wrap flex-auto gap-x-2">
        <div className="sr-only">Empresa y Fecha</div>
        <div className="flex-none w-full text-sm font-medium body-primary">
          {role.company}&nbsp;-&nbsp;
          <div
            className="inline text-xs body-secondary"
            aria-label={`${role.start.label ?? role.start} until ${
              role.end.label ?? role.end
            }`}
          >
            <time dateTime={role.start.dateTime ?? role.start}>
              {role.start.label ?? role.start}
            </time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={role.end.dateTime ?? role.end}>
              {role.end.label ?? role.end}
            </time>
          </div>
        </div>

        <div className="sr-only">Rol</div>
        <div className="text-xs body-secondary">{role.title}</div>
      </div>
    </motion.div>
  )
}
