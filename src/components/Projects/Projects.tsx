import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Projects.module.sass"
import cn from "classnames"

import useGithubService from "../../services/githubService"
import { ReposProps } from "../../interfaces"
import { Title, ProjectsList, Button } from ".."

export const Projects = ({ title }: { title: boolean }) => {
  const [projectsList, setProjectsList] = useState<ReposProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)

  const { loading, error, getRepos } = useGithubService()
  const { t } = useTranslation()

  useEffect(() => {
    onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos({ topics: ["site"] }).then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: ReposProps[]) => {
    setProjectsList(newRepos)
    setReposLoading(false)
  }

  const CardSkeleton = () => {
    const cards = []
    for (let i = 0; i < 2; i++) {
      cards.push(
        <li
          key={i}
          className={styles.skeleton}
        />
      )
    }

    return <ul className={styles.list}>{cards}</ul>
  }

  const errorMessage = error ? <h3 className={styles.error}>Projects not found</h3> : null
  const spinner = loading && !reposLoading ? <CardSkeleton /> : null

  return (
    <section
      className={styles.projects}
      id="projects"
    >
      <div className={cn(styles.inner, !title ? styles.carousel : null, "inner")}>
        {title ? (
          <Title
            link="#projects"
            title={t("projects.title")}
          />
        ) : null}

        <div className={styles.control}>
          <Button
            type="button"
            className={cn("projects-btn-prev", styles.arrow, styles.prev)}
          >
            &lt;
          </Button>
          <Button
            type="button"
            className={cn("projects-btn-next", styles.arrow, styles.next)}
          >
            &gt;
          </Button>
        </div>

        <div className={styles.body}>
          {errorMessage}
          {spinner}

          <ProjectsList projectsList={projectsList} />
        </div>
      </div>
    </section>
  )
}
