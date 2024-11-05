import {
  Code,
  Github,
  Layers,
  Linkedin,
  Mail,
  Twitter,
  User,
} from 'lucide-react'

import config from '@/config/config'

export const generalLinks = [
  {
    href: config.links.home,
    label: 'Inicio',
    icon: 'Avatar',
  },
  {
    href: config.links.about,
    label: 'About',
    icon: User,
  },
  {
    href: config.links.projects,
    label: 'Proyectos',
    icon: Code,
  },
  {
    href: config.links.stack,
    label: 'Stack',
    icon: Layers,
  },
]

export const linksSocial = [
  {
    href: config.socialLinks.linkedin,
    icon: Linkedin,
    label: 'Seguir en LinkedIn',
    outline: true,
  },
  {
    href: config.socialLinks.github,
    icon: Github,
    label: 'Seguir en GitHub',
    outline: true,
  },
  {
    href: config.socialLinks.twitter,
    icon: Twitter,
    label: 'Seguir en Twitter',
    outline: true,
  },
  {
    href: config.links.email,
    icon: Mail,
    label: 'Enviar Correo',
    outline: true,
  },
]
