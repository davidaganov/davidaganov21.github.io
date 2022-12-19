import { useTranslation } from "react-i18next"
import { Header, Footer } from "../layout"
import { About, Skills, Work } from "../components"

export default function Main() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Header list={t("navbar.home", { returnObjects: true })} />
      <main>
        <div className="main-wrapper">
          <About />
          <Skills />
          <Work />
        </div>
      </main>
      <Footer />
    </div>
  )
}
