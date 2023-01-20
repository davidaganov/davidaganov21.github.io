import { useTranslation } from "react-i18next"
import { About, Skills, Projects, Header, Footer } from "./components"

export const App = () => {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Header list={t("navbar.links", { returnObjects: true })} />
      <main>
        <div className="main-wrapper">
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}
