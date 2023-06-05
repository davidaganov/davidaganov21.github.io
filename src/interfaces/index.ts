export interface navLink {
  link: string
  title: Record<string, string>
  last?: boolean
}

export interface ReposProps {
  id: string
  name: string
  description: string
  html_url: string
  topics: string[]
  homepage: string
}

export interface RepoProps {
  created_at: string
  name: string
  html_url: string
  homepage: string
  topics: string[]
  owner: Record<string, string>
}

export interface Topics {
  topics?: string[]
  ignoreTopics?: string[]
}

export interface GithubReposResponse extends Topics {
  items: ReposProps[]
}

export type GithubRepoResponse = RepoProps
