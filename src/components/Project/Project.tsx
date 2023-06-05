import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import styles from "./Project.module.sass"
import cn from "classnames"

import useGithubService from "../../services/githubService"
import { RepoProps } from "../../interfaces"

export const Project = () => {
  const [project, setProject] = useState<RepoProps>()

  const { name } = useParams()
  const { error, getRepo } = useGithubService()
  const { t } = useTranslation()

  const clearName = project?.name.replace(/[.\-/\\\s]/g, " ")
  const date = new Date(project?.created_at || "").toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  useEffect(() => {
    onRequest()
  }, [name])

  const onRequest = async () => {
    getRepo({ name: name?.replace(/^project-/, "") || "" }).then(onReposLoaded)
  }

  const onReposLoaded = (repo: RepoProps) => {
    setProject(repo)
  }

  const renderDescription = () => {
    const list = t(`projects.${project?.name}.description`, { returnObjects: true })

    if (Array.isArray(list)) {
      const items = list.map((item: string) => (
        <p
          className={styles.descriptionItem}
          key={item}
        >
          {item}
        </p>
      ))

      return <div className={styles.description}>{items}</div>
    } else {
      return null
    }
  }

  const renderList = () => {
    const prioritizeKeywords = ["react", "vue"]

    const filteredTopics = project?.topics
      .filter((topic) => topic !== "site")
      .sort((a, b) => {
        if (prioritizeKeywords.includes(a) && prioritizeKeywords.includes(b)) {
          return 0
        } else if (prioritizeKeywords.includes(a)) {
          return -1
        } else if (prioritizeKeywords.includes(b)) {
          return 1
        } else {
          return 0
        }
      })

    const items = filteredTopics?.map((tag, i) => {
      return (
        <li
          className={styles.listItem}
          key={i}
        >
          {tag}
        </li>
      )
    })

    const list = <ul className={styles.list}>{items}</ul>

    return (
      <div className={styles.about}>
        <p className={styles.aboutTitle}>{t(`projects.${project?.name}.listTitle`)}:</p>
        {list}
      </div>
    )
  }

  const Project = () => {
    if (project) {
      return (
        <>
          <div className={styles.user}>
            <a
              href={project.owner.github}
              className={styles.left}
            >
              <img
                src={project.owner.avatar}
                className={styles.avatar}
                width="40"
                height="40"
              />
              <p className={styles.login}>@{project.owner.login}</p>
            </a>

            <time
              dateTime={project.created_at}
              className={styles.date}
            >
              {date}
            </time>
          </div>

          <article className={styles.content}>
            <h2 className={styles.title}>{clearName}</h2>

            {description}

            <div className={styles.links}>
              <a
                href={project.html_url}
                className="inline-link"
              >
                {t("projects.go_repo")}
                <span
                  lang="en"
                  className="visually-hidden"
                >
                  {clearName}
                </span>
              </a>

              <span className={styles.separator}>|</span>

              <a
                href={project.homepage}
                className={cn(styles.link, styles["link--live"], "inline-link")}
                target="_blank"
                rel="noreferrer"
              >
                {t("projects.go_site")}
                <span
                  lang="en"
                  className="visually-hidden"
                >
                  {clearName}
                </span>
              </a>
            </div>

            {list}

            <img
              className={styles.image}
              src={require(`../../assets/images/${project.name}-cover.jpg`)}
              alt={`${t(`projects.${project.name}.description`)}`}
              width="300"
              height="187"
            />
          </article>
        </>
      )
    } else {
      return <></>
    }
  }

  const description = renderDescription()
  const list = renderList()

  const errorMessage = error ? <h3 className={styles.error}>Project not found</h3> : null

  return (
    <section
      className={styles.project}
      id="project"
    >
      <div className="inner">
        <Project />

        <div className={styles.body}>{errorMessage}</div>
      </div>
    </section>
  )
}
