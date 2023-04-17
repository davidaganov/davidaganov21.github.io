import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "../locales/en.json"
import ru from "../locales/ru.json"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, ru },
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18next
