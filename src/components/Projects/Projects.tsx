import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Projects.module.sass"
import cn from "classnames"

import useGithubService from "../../services/githubService"
import { RepoProps } from "../../interfaces"
import { Title, Button, Card } from ".."

export const Work = (): JSX.Element => {
  const [reposList, setReposList] = useState<RepoProps[]>([])
  const [reposLoading, setReposLoading] = useState(false)
  const [selectTag, setSelectTag] = useState<string>("")
  const [sortRepos, setSortRepos] = useState<RepoProps[]>([])

  const { loading, error, getRepos } = useGithubService()
  const { t } = useTranslation()

  useEffect(() => {
    onRequest(true)
  }, [])

  useEffect(() => {
    setSortRepos(reposList.filter((item) => item.topics.some((i) => [selectTag].includes(i))))
  }, [selectTag])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: RepoProps[]) => {
    setReposList(newRepos)
    setReposLoading(false)
  }

  const renderTags = () => {
    const topics: string[] = []

    reposList.map((item) => {
      item.topics.map((tag) => {
        if (!topics.includes(tag)) topics.push(tag)
      })
    })

    const tags = topics.map((tag) => (
      <label
        htmlFor={`tag-${tag}`}
        key={tag}
      >
        <input
          className="visually-hidden"
          type="checkbox"
          name="tag"
          id={`tag-${tag}`}
          value={tag}
          checked={tag === selectTag}
          onChange={() => setSelectTag(tag === selectTag ? "" : tag)}
        />
        <span
          className={cn(styles.tag, {
            [styles.tagActive]: tag === selectTag
          })}
        >
          {tag}
        </span>
      </label>
    ))

    return (
      <fieldset className={styles.tags}>
        <legend className="visually-hidden">{t("projects.sort")}</legend>
        {tags}
      </fieldset>
    )
  }

  const renderItems = () => {
    const repos = sortRepos.length === 0 ? reposList : sortRepos
    const items = repos.slice(0, 6).map((item) => {
      return (
        <Card
          key={item.id}
          card={item}
        />
      )
    })

    return <ul className={styles.projects}>{items}</ul>
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
  const tags = renderTags()
  const projects = renderItems()

  return (
    <section
      className={cn(styles.work, "section-ltr")}
      id="projects"
    >
      <div className="inner">
        <Title
          number={3}
          link="#projects"
          title={t("projects.title")}
        />

        <div className={styles.body}>
          {errorMessage}

          <div style={{ width: "100%" }}>
            <form id="selectTags">{tags}</form>

            {spinner}
            {projects}
          </div>

          {!error ? (
            <Button
              href="https://github.com/davidaganov21?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
            >
              {t("projects.go_github")}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
