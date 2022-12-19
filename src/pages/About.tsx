import { useTranslation } from "react-i18next"
import { Navbar, Footer } from "../layout"
import { Links } from "../components"

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Navbar
        single={true}
        list={t("navbar.about", { returnObjects: true })}
      />
      <main>
        <Links />
      </main>
      <Footer />
    </div>
  )
}
