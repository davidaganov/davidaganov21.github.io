import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import styles from "./LanguageSwitcher.module.sass"

export const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation()
  const languagesList = ["en", "ru"]

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
    return languagesList.map((lang) => {
      return (
        <label
          htmlFor={`lang-${lang}`}
          key={lang}
        >
          <input
            className="visually-hidden"
            type="checkbox"
            name="lang"
            id={`lang-${lang}`}
            value={lang}
            checked={i18n.language === lang}
            onChange={() => changeLanguage(lang)}
          />
          <span className={styles.btn}>{lang}</span>
        </label>
      )
    })
  }

  const languages = renderLanguages()

  return (
    <form className={styles.form}>
      <fieldset className={styles.switcher}>
        <legend className="visually-hidden">Select language</legend>
        {languages}
      </fieldset>
    </form>
  )
}
