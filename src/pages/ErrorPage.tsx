import { useTranslation } from "react-i18next"
import { ErrorMessage } from "../components"
import { Footer, Navbar } from "../layout"

export default function ErrorPage() {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <Navbar
        single={true}
        list={t("navbar.error", { returnObjects: true })}
      />
      <main>
        <ErrorMessage />
      </main>
      <Footer />
    </div>
  )
}
