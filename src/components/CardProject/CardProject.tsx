import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { CardProjectProps } from "./CardProject.props"
import styles from "./CardProject.module.sass"
import cn from "classnames"

export const CardProject = ({ card, className }: CardProjectProps) => {
  const { name, short_description, topics, homepage } = card
  const clearName = name.replace(/[.\-/\\\s]/g, " ")

  const { t } = useTranslation()

  const renderList = () => {
    const prioritizeKeywords = ["react", "vue"]

    const filteredTopics = topics
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

    const items = filteredTopics.map((tag, i) => {
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

  const renderDemo = () => {
    if (homepage) {
      return (
        <a
          href={homepage}
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
      )
    }
  }

  const list = renderList()
  const demo = renderDemo()

  return (
    <li className={cn(styles.card, className)}>
      <Link
        to={`/project-${name}`}
        className={styles.picture}
        style={{ backgroundImage: `url(${require(`../../assets/images/${name}-cover.jpg`)})` }}
      >
        <img
          className={styles.image}
          src={require(`../../assets/images/${name}-filter.jpg`)}
          alt={short_description}
          width="300"
          height="187"
        />
      </Link>

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
        {short_description}
      </p>

      {list}

      <div className={styles.bottom}>
        <Link
          to={`/project-${name}`}
          className={cn(styles.link, "inline-link")}
        >
          {t("projects.go_more")}
          <span
            lang="en"
            className="visually-hidden"
          >
            {clearName}
          </span>
        </Link>

        {demo}
      </div>
    </li>
  )
}
