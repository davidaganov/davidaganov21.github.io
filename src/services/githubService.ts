import { useHttp } from "../hooks/http.hook"
import { RepoProps } from "../interfaces"

const useGithubService = () => {
  const { loading, request, error, clearError } = useHttp()

  const _apiBase = "https://api.github.com/users/davidaganov"

  const getRepos = async () => {
    const res = await request(`${_apiBase}/repos`)
    return _transformProjects(res)
  }

  const _transformProjects = (items: RepoProps[]) => {
    return items
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
      .filter((item) => item.topics.length !== 0)
  }

  return { loading, error, clearError, getRepos }
}

export default useGithubService
