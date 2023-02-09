import cn from "classnames"
import styles from "./Footer.module.sass"
import { Social } from "../"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation()

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
          target="_blank"
          rel="noreferrer"
        >
          {t("contacts.description")}&nbsp;
          <br />
          {t("contacts.author")}
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
