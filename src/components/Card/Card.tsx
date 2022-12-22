import { useTranslation } from "react-i18next"
import { CardProps } from "./Card.props"
import styles from "./Card.module.sass"
import cn from "classnames"

export const Card = ({ card, className }: CardProps): JSX.Element => {
  const { name, description, html_url, topics, homepage } = card
  const clearName = name.replace(/[.\-/\\\s]/g, " ")

  const { t } = useTranslation()

  const renderTags = () => {
    const items = topics.map((tag, i) => {
      return <li key={i}>{tag}</li>
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
          aria-label={`${t("projects.go_demo")} ${clearName}`}
        >
          {t("projects.go_demo")}
        </a>
      )
    }
  }

  const tags = renderTags()
  const demo = renderDemo()

  return (
    <li className={cn(styles.project, className)}>
      <h3 className={styles.title}>{clearName}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.bottom}>
        <a
          href={html_url}
          className={cn(styles.link, "inline-link")}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t("projects.go_repo")} ${clearName}`}
        >
          {t("projects.go_repo")}
        </a>
        {demo}
        {tags}
      </div>
    </li>
  )
}
