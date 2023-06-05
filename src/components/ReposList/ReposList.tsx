import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ReposListProps } from "./ReposList.props"
import styles from "./ReposList.module.sass"
import cn from "classnames"

import { CardRepo } from ".."
import { ReposProps } from "../../interfaces"

export const ReposList = ({ repos }: ReposListProps) => {
  const [selectTag, setSelectTag] = useState<string>("")
  const [sortRepos, setSortRepos] = useState<ReposProps[]>([])

  const { t } = useTranslation()

  useEffect(() => {
    if (repos) {
      setSortRepos(repos.filter((item) => item.topics.some((i) => [selectTag].includes(i))))
    }
  }, [selectTag])

  const renderTags = () => {
    let topics: string[] = []

    if (repos) {
      topics = [
        ...new Set(repos.reduce((topics, repo) => [...topics, ...repo.topics], [] as string[]))
      ]
    }

    const tags = topics.map((tag) => (
      <button
        key={tag}
        id={`tag-${tag}`}
        type="button"
        className={cn(styles.tag, {
          [styles.tagActive]: tag === selectTag
        })}
        aria-selected={tag === selectTag}
        aria-labelledby={`sortLabel tag-${tag}`}
        lang="en"
        onClick={() => setSelectTag(tag === selectTag ? "" : tag)}
        role="option"
      >
        {tag}
      </button>
    ))

    if (tags.length !== 0) {
      return (
        <div
          className={styles.tags}
          role="listbox"
        >
          <span
            className="visually-hidden"
            id="sortLabel"
          >
            {t("projects.sort")}
          </span>
          {tags}
        </div>
      )
    }
  }

  const renderItems = () => {
    const arr = sortRepos.length === 0 && repos ? repos : sortRepos
    if (repos) {
      const items = arr.slice(0, 6).map((item) => {
        return (
          <CardRepo
            key={item.id}
            card={item}
          />
        )
      })

      return <ul className={styles.repos}>{items}</ul>
    }
  }

  const renderError = () => {
    return (
      <>
        <p className={styles.empty}>{t("projects.errorTitle")}</p>
        <p className={styles.emptySubtitle}>{t("projects.errorSubtitle")}</p>
      </>
    )
  }

  const tags = renderTags()
  const projects = renderItems()
  const error = projects === undefined ? renderError() : null

  return (
    <div className={styles.container}>
      {tags}
      {projects}
      {error}
    </div>
  )
}
