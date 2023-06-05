import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Repos.module.sass"

import useGithubService from "../../services/githubService"
import { ReposProps } from "../../interfaces"
import { Title, Button, ReposList } from ".."

export const Repos = () => {
  const [reposList, setReposList] = useState<ReposProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)

  const { loading, error, getRepos } = useGithubService()
  const { t } = useTranslation()

  useEffect(() => {
    onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos({ ignoreTopics: ["site"] }).then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: ReposProps[]) => {
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

    return <ul className={styles.repositories}>{cards}</ul>
  }

  const errorMessage = error ? <h3 className={styles.error}>Repos not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null

  const showMore = !error ? (
    <Button
      href="https://github.com/davidaganov?tab=repositories"
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
    >
      {t("repositories.go_github")}
    </Button>
  ) : null

  return (
    <section
      className={styles.work}
      id="repositories"
    >
      <div className="inner">
        <Title
          link="#repositories"
          title={t("repositories.title")}
          direction="rtl"
        />

        <div className={styles.body}>
          {errorMessage}
          {spinner}

          <ReposList repos={reposList} />

          {showMore}
        </div>
      </div>
    </section>
  )
}
