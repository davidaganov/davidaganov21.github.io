import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import styles from "./Project.module.sass"
import cn from "classnames"

import { RepoProps } from "../../interfaces"

export const Project = () => {
  const [project, setProject] = useState<RepoProps>()

  const { name } = useParams()
  const { t, i18n } = useTranslation()

  const projectId = name?.replace(/^project-/, "") || ""
  const clearName = projectId.replace(/[.\-/\\\s]/g, " ")
  const date = new Date(project?.created_at || "").toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  useEffect(() => {
    setData()
  }, [name])

  useEffect(() => {
    i18n.on("languageChanged", setData)
    return () => {
      i18n.off("languageChanged", setData)
    }
  }, [i18n])

  const setData = () => {
    const data: RepoProps[] = t("projects.list", { returnObjects: true })
    const project = data.find((item: RepoProps) => item.name === projectId)
    setProject(project)
  }

  const renderDescription = () => {
    if (project?.description) {
      const items = project?.description.map((item: string) => (
        <p
          className={styles.descriptionItem}
          key={item}
        >
          {item}
        </p>
      ))

      return (
        <>
          {project?.description.length > 0 ? (
            <div className={styles.description}>{items}</div>
          ) : (
            <div className={styles.description}>
              <p className={styles.descriptionItem}>{project?.short_description}</p>
            </div>
          )}
        </>
      )
    } else {
      return null
    }
  }

  const renderDuties = () => {
    if (project?.duties) {
      const items = project?.duties.map((item: string) => (
        <li
          className={styles.dutiesItem}
          key={item}
        >
          {item}
        </li>
      ))

      return (
        <div className={styles.duties}>
          <p className={styles.dutiesTitle}>{t(`projects.dutiesTitle`)}:</p>
          <ul className={styles.dutiesList}>{items}</ul>
        </div>
      )
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
        <p className={styles.aboutTitle}>{t(`projects.techListTitle`)}:</p>
        {list}
      </div>
    )
  }

  const renderLinks = () => {
    if (project?.html_url || project?.homepage) {
      return (
        <div className={styles.links}>
          <p className={styles.linksTitle}>{t("projects.linksTitle")}:</p>
          <div className={styles.linksBlock}>
            {project?.html_url && (
              <a
                href={project.html_url}
                className="inline-link inline-link--white"
              >
                {t("projects.go_repo")}
                <span
                  lang="en"
                  className="visually-hidden"
                >
                  {clearName}
                </span>
              </a>
            )}

            {project?.html_url && project?.homepage && <span className={styles.separator}>|</span>}

            {project?.homepage && (
              <a
                href={project.homepage}
                className={cn(styles.link, styles["link--live"], "inline-link inline-link--white")}
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
            )}
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  const description = renderDescription()
  const duties = renderDuties()
  const list = renderList()
  const links = renderLinks()

  const Project = () => {
    if (project) {
      return (
        <>
          <div className={styles.user}>
            <a
              href="https://github.com/davidaganov"
              className={styles.left}
            >
              <img
                src="https://avatars.githubusercontent.com/u/84830129?v=4"
                className={styles.avatar}
                width="40"
                height="40"
              />
              <p className={styles.login}>@davidaganov</p>
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
            {duties}
            {links}
            {list}

            <img
              className={styles.image}
              src={require(`../../assets/images/${projectId}-cover.jpg`)}
              alt={project?.short_description}
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

  return (
    <section
      className={styles.project}
      id="project"
    >
      <div className="inner">
        <Project />
      </div>
    </section>
  )
}
