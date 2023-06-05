import { useTranslation } from "react-i18next"
import { HeaderProps } from "./Header.props"
import { Button } from "../"
import styles from "./Header.module.sass"
import cn from "classnames"

export const Header = ({ ...props }: HeaderProps) => {
  const { t } = useTranslation()

  return (
    <header
      className={styles.header}
      {...props}
    >
      <div className={cn(styles.inner, "inner")}>
        <div className={styles.content}>
          <div className={cn(styles.blob, styles.first)}></div>
          <div className={cn(styles.blob, styles.second)}></div>
          <div className={cn(styles.blob, styles.third)}></div>

          <p className={styles.subtitle}>{t("header.subtitle")}</p>
          <h1 className={styles.title}>{t("header.name")}</h1>
          <p className={styles.description}>{t("header.description")}</p>
          <Button
            href="#footer"
            className={styles.btn}
          >
            {t("header.contact")}
          </Button>
        </div>
      </div>
    </header>
  )
}
