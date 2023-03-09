import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Projects.module.sass"

import useGithubService from "../../services/githubService"
import { RepoProps } from "../../interfaces"
import { Title, Button, Repos } from ".."

export const Projects = () => {
  const [reposList, setReposList] = useState<RepoProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)

  const { loading, error, getRepos } = useGithubService()
  const { t } = useTranslation()

  useEffect(() => {
    onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: RepoProps[]) => {
    setReposList(newRepos)
    setReposLoading(false)
  }

  const CardSkeleton = () => {
    const cards = []
    for (let i = 0; i < 6; i++) {
      cards.push(
        <li
          key={i}
          className={styles.skeleton}
        />
      )
    }

    return <ul className={styles.projects}>{cards}</ul>
  }

  const errorMessage = error ? <h3 className={styles.error}>Repositories not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null

  const showMore = !error ? (
    <Button
      href="https://github.com/davidaganov?tab=repositories"
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
    >
      {t("projects.go_github")}
    </Button>
  ) : null

  return (
    <section
      className={styles.work}
      id="projects"
    >
      <div className="inner">
        <Title
          link="#projects"
          title={t("projects.title")}
        />

        <div className={styles.body}>
          {errorMessage}
          {spinner}

          <Repos repos={reposList} />

          {showMore}
        </div>
      </div>
    </section>
  )
}
