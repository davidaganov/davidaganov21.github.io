import { SocialProps } from "./Social.props"
import styles from "./Social.module.sass"
import cn from "classnames"
import { ReactComponent as GithubIcon } from "./icons/github.svg"
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg"
import { useTranslation } from "react-i18next"

export const Social = ({ className, ...props }: SocialProps) => {
  const { t } = useTranslation()
  const github_aria = t("contacts.github")
  const linkedin_aria = t("contacts.linkedin")

  return (
    <ul
      className={cn(styles.social, className)}
      {...props}
    >
      <li className={styles.item}>
        <a
          href="https://github.com/davidaganov"
          className={styles.link}
          aria-label={github_aria}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.linkedin.com/in/david-aganov/"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          aria-label={linkedin_aria}
        >
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  )
}
