import { useEffect, useState } from "react"
import styles from "./Work.module.sass"
import cn from "classnames"

import useGithubService from "../../services/githubService"
import { RepoProps } from "../../interfaces"
import { Title, Button, Card, CardSkeleton } from "../"

export const Work = (): JSX.Element => {
  const [reposList, setReposList] = useState<RepoProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)

  const { loading, error, getRepos } = useGithubService()

  useEffect(() => {
    onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: RepoProps[]) => {
    setReposList([...reposList, ...newRepos])
    setReposLoading(false)
  }

  const renderItems = () => {
    const items = reposList
      .map((item) => {
        return (
          <Card
            key={item.id}
            card={item}
          />
        )
      })
      .slice(0, 6)

    return <ul className={styles.projects}>{items}</ul>
  }

  const errorMessage = error ? <h3 className={styles.error}>Repositories not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null
  const content = renderItems()

  return (
    <section
      className={cn(styles.work, "section-ltr")}
      id="projects"
    >
      <div className="inner">
        <Title
          className={styles.title}
          number={3}
          link="#projects"
          title="Projects"
          direction="ltr"
        />

        <div className={styles.body}>
          {errorMessage}
          {spinner}
          {content}

          {!error ? (
            <Button
              link="https://github.com/davidaganov21?tab=repositories"
              className={styles.btn}
            >
              Open GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
