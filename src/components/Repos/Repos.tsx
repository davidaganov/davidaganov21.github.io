import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ReposProps } from "./Repos.props"
import styles from "./Repos.module.sass"
import cn from "classnames"

import { Card } from ".."
import { RepoProps } from "../../interfaces"

export const Repos = ({ repos }: ReposProps): JSX.Element => {
  const [selectTag, setSelectTag] = useState<string>("")
  const [sortRepos, setSortRepos] = useState<RepoProps[]>([])

  const { t } = useTranslation()

  useEffect(() => {
    setSortRepos(repos.filter((item) => item.topics.some((i) => [selectTag].includes(i))))
  }, [selectTag])

  const renderTags = () => {
    const topics: string[] = []

    repos.map((item) => {
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
    const arr = sortRepos.length === 0 ? repos : sortRepos
    const items = arr.slice(0, 6).map((item) => {
      return (
        <Card
          key={item.id}
          card={item}
        />
      )
    })

    return <ul className={styles.projects}>{items}</ul>
  }

  const tags = renderTags()
  const projects = renderItems()

  return (
    <div className={styles.container}>
      <form id="selectTags">{tags}</form>
      {projects}
    </div>
  )
}
