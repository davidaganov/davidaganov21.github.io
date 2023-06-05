import { useEffect, KeyboardEvent } from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import styles from "./LanguageSwitcher.module.sass"
import cn from "classnames"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LanguageSwitcher = ({ close }: any) => {
  const { i18n, t } = useTranslation()
  const languagesList = [
    { lang: "en", aria: t("navbar.selectLang.en") },
    { lang: "ru", aria: t("navbar.selectLang.ru") }
  ]

  const htmlAttrChange = (lang: string) => {
    document.documentElement.setAttribute("lang", lang)
  }

  useEffect(() => {
    htmlAttrChange(i18n.language)

    i18next.on("languageChanged", (lang) => {
      htmlAttrChange(lang)
    })
  }, [])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const closeNavbar = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Tab" && !e.shiftKey) close()
  }

  const renderLanguages = () => {
    return languagesList.map(({ lang, aria }, i) => {
      return (
        <button
          key={lang}
          id={`lang-${lang}`}
          className={cn(styles.btn, {
            [styles.btnActive]: i18n.language === lang
          })}
          type="button"
          aria-label={aria}
          aria-selected={i18n.language === lang}
          aria-labelledby={`selectLang lang-${lang}`}
          onClick={() => changeLanguage(lang)}
          role="option"
          onKeyDown={(e) => (languagesList.length === i + 1 ? closeNavbar(e) : null)}
        >
          {lang}
        </button>
      )
    })
  }

  const languages = renderLanguages()

  return (
    <div
      className={styles.switcher}
      role="listbox"
    >
      <span
        className="visually-hidden"
        id="selectLang"
      >
        {t("navbar.selectLang.title")}
      </span>
      {languages}
    </div>
  )
}
