import cn from "classnames"
import styles from "./Footer.module.sass"
import { Social } from "../../components/"

export const Footer = (): JSX.Element => {
  return (
    <footer
      className={styles.footer}
      id="footer"
      role="contentinfo"
    >
      <div className={cn(styles.inner, "inner")}>
        <a
          href="https://github.com/davidaganov21/davidaganov21.github.io"
          className={cn(styles.author, "inline-link inline-link--white")}
        >
          Developed & Designed&nbsp;
          <br />
          by David Aganov
        </a>
        <Social className={styles.social} />
        <a
          className="inline-link inline-link--white"
          href="mailto:davidaganov21@gmail.com"
        >
          davidaganov21@gmail.com
        </a>
      </div>
    </footer>
  )
}
