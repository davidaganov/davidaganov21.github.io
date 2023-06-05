import { useHttp } from "../hooks/http.hook"
import { Topics, GithubReposResponse, GithubRepoResponse } from "../interfaces"

const useGithubService = () => {
  const { loading, request, error, clearError } = useHttp()

  const _apiBase = "https://api.github.com/users/davidaganov"
  const _apiRepo = "https://api.github.com/repos/davidaganov"

  const getRepos = async ({ topics, ignoreTopics }: Topics) => {
    const res = await request(`${_apiBase}/repos`)
    return _transformProjects({ items: res, topics, ignoreTopics })
  }

  const getRepo = async ({ name }: { name: string }) => {
    const res = await request(`${_apiRepo}/${name}`)
    return _transformProject({ repo: res })
  }

  const _transformProjects = ({ items, topics, ignoreTopics }: GithubReposResponse) => {
    let filteredItems = items
      .map((item) => {
        const { id, name, description, html_url, topics, homepage } = item
        return {
          id,
          name,
          description,
          html_url,
          topics,
          homepage
        }
      })
      .filter((item) => item.name !== "davidaganov.github.io")
      .filter((item) => item.description)

    if (topics && topics.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return item.topics.some((topic) => topics.includes(topic))
      })
    }

    if (ignoreTopics && ignoreTopics.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return !item.topics.some((topic) => ignoreTopics.includes(topic))
      })
    }

    return filteredItems
  }

  const _transformProject = ({ repo }: { repo: GithubRepoResponse }) => {
    const { created_at, name, html_url, homepage, topics, owner } = repo

    return {
      created_at,
      name,
      html_url,
      homepage,
      topics,
      owner: {
        avatar: owner.avatar_url,
        login: owner.login,
        github: owner.html_url
      }
    }
  }

  return { loading, error, clearError, getRepos, getRepo }
}

export default useGithubService
