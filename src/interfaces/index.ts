export interface SkillProps {
  id: string;
  title: string;
  list: {
    id: string;
    title: string;
    tag: string[]
  }[]
}

export interface CardProps {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  language: string
}

export interface SocialProps {
  classes: string
}

export interface ButtonProps {
  link: string
  value: string
  classes: string
}

export interface TitleProps {
  classes: string
  title: string
  link: string
  number?: number
  direction?: string
}
