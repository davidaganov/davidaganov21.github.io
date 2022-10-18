export interface SkillItems {
  id: string;
  title: string;
  list: {
    id: string;
    title: string;
    tag: string[]
  }[]
}

export interface Repos {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  language: string
}

export interface Btn {
  link: string
  value: string
  classes: string
}
