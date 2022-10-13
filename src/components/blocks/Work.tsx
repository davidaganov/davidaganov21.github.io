import { useEffect, useState } from "react"

import { Repos } from "../../interfaces"
import useGithubService from "../../services/githubService"
import Button from "../base/Button"
import Card from "../base/Card"
import CardSkeleton from "../base/CardSkeleton"

export default function Work() {
  const [reposList, setReposList] = useState<Repos[]>([])
  const [reposLoading, setReposLoading] = useState(false)

  const { loading, error, getRepos } = useGithubService()

  useEffect(() => {
    onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: Repos[]) => {
    setReposList([...reposList, ...newRepos])
    setReposLoading(false)
  }

  const renderItems = (arr: Repos[]) => {
    const items = arr
      .map((item) => {
        return (
          <Card
            key={item.id}
            {...item}
          />
        )
      })
      .slice(0, 4)

    return <ul className="work__projects">{items}</ul>
  }

  const errorMessage = error ? <h3 className="work__error">Repositories not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null
  const content = renderItems(reposList)

  return (
    <section
      className="work section-ltr"
      id="work"
    >
      <div className="work__inner inner">
        <h2 className="work__title section-title">
          <a href="#work">
            <span>03.</span> Projects
          </a>
        </h2>

        <div className="work__body">
          <p className="work__block-title">GitHub Repositories</p>

          {errorMessage}
          {spinner}
          {content}

          {!error ? (
            <Button
              link="https://github.com/davidaganov21?tab=repositories"
              classes="work__btn"
              value="Go To Github"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
