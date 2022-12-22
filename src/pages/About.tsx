import { useTranslation } from "react-i18next"
import { Navbar, Footer } from "../layout"
import { Document } from "../components"

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Navbar
        single={true}
        list={t("navbar.about", { returnObjects: true })}
      />
      <main>
        <Document />
      </main>
      <Footer />
    </div>
  )
}
