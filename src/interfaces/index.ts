export interface navLink {
  link: string
  title: string
  last?: boolean
}

export interface RepoProps {
  id: string
  name: string
  description: string
  html_url: string
  topics: string[]
  homepage: string
}
