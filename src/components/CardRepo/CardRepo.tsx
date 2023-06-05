import { useTranslation } from "react-i18next"
import { CardRepoProps } from "./CardRepo.props"
import styles from "./CardRepo.module.sass"
import cn from "classnames"

export const CardRepo = ({ card, className }: CardRepoProps) => {
  const { name, description, html_url, topics, homepage } = card
  const clearName = name.replace(/[.\-/\\\s]/g, " ")

  const { t } = useTranslation()

  const renderTags = () => {
    const items = topics.map((tag, i) => {
      return (
        <li
          key={i}
          lang="en"
        >
          {tag}
        </li>
      )
    })

    return <ul className={styles.tags}>{items}</ul>
  }

  const renderDemo = () => {
    if (homepage) {
      return (
        <a
          href={homepage}
          className={cn(styles.link, styles["link--live"], "inline-link")}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t("repositories.go_demo")} ${clearName}`}
        >
          {t("repositories.go_demo")}
          <span
            lang="en"
            className="visually-hidden"
          >
            {clearName}
          </span>
        </a>
      )
    }
  }

  const tags = renderTags()
  const demo = renderDemo()

  return (
    <li className={cn(styles.card, className)}>
      <h3
        className={styles.title}
        lang="en"
      >
        {clearName}
      </h3>
      <p
        className={styles.description}
        lang="en"
      >
        {description}
      </p>
      <div className={styles.bottom}>
        <a
          href={html_url}
          className={cn(styles.link, "inline-link")}
          target="_blank"
          rel="noreferrer"
        >
          {t("repositories.go_repo")}
          <span
            lang="en"
            className="visually-hidden"
          >
            {clearName}
          </span>
        </a>
        {demo}
        {tags}
      </div>
    </li>
  )
}
