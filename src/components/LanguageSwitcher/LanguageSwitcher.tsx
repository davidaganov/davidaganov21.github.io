import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import styles from "./LanguageSwitcher.module.sass"
import cn from "classnames"

export const LanguageSwitcher = (): JSX.Element => {
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

  const renderLanguages = () => {
    return languagesList.map((item) => {
      const { lang, aria } = item
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
