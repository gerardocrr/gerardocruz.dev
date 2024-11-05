'use client'

import { resume } from '@/data/resume'
import { motion } from 'framer-motion'

import { JobItem } from '@/components/cards/resume/JobItem'

export default function JobsList() {
  return (
    <motion.div className="relative w-full">
      <section className="relative overflow-auto h-[192px] snap-y snap-proximity">
        {resume.map((role, roleIndex) => (
          <JobItem key={roleIndex} role={role} />
        ))}
      </section>
    </motion.div>
  )
}
