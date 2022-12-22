export interface navLink {
  tag: "a" | "route" | "hashlink"
  link: string
  title: string
}

export interface RepoProps {
  id: string
  name: string
  description: string
  html_url: string
  topics: string[]
  homepage: string
  language: string
}
