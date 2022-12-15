import { SocialProps } from "./Social.props"
import styles from "./Social.module.sass"
import cn from "classnames"
import { ReactComponent as GithubIcon } from "./github.svg"
import { ReactComponent as LinkedinIcon } from "./linkedin.svg"

export const Social = ({ className, ...props }: SocialProps): JSX.Element => {
  return (
    <ul
      className={cn(styles.social, className)}
      {...props}
    >
      <li className={styles.item}>
        <a
          href="https://github.com/davidaganov21"
          className={styles.link}
          aria-label="Github profile"
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
          aria-label="Linkedin profile"
        >
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  )
}
