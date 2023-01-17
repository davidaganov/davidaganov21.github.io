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
  const { loading, error, getRepos } = useGithubService()
  let sortRepos = reposList

  const { t } = useTranslation()

  useEffect(() => {
    if (reposList.length === 0) onRequest(true)
  }, [])

  const onRequest = (initial: boolean) => {
    initial ? setReposLoading(false) : setReposLoading(true)
    getRepos().then(onReposLoaded)
  }

  const onReposLoaded = (newRepos: RepoProps[]) => {
    setReposList([...reposList, ...newRepos])
    setReposLoading(false)
  }

  const filterRepos = (tag?: string) => {
    const repos: RepoProps[] = []
    sortRepos.map((repo) => {
      const selectTag = repo.topics.filter((topic) => topic === tag).length

      if (tag) selectTag && repos.push(repo)
      else repos.push(repo)
    })

    sortRepos = repos
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
          onChange={() => setFilter(tag)}
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

  const renderItems = (tag?: string) => {
    filterRepos(tag)

    const items = sortRepos.slice(0, 6).map((item) => {
      return (
        <Card
          key={item.id}
          card={item}
        />
      )
    })

    return <ul className={styles.projects}>{items}</ul>
  }

  const setFilter = (tag: string) => {
    tag === selectTag ? setSelectTag("") : setSelectTag(tag)
    projects = renderItems(tag)
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
  let projects = renderItems(selectTag)

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
