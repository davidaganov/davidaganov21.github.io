import { useParams } from "react-router-dom"
import { ScrollToHashElement, Navbar, Project, Projects, Footer } from "../components"

export const ProjectView = () => {
  const { name } = useParams()

  const list = [
    { link: "/", title: { en: "Home", ru: "Главная" } },
    { link: `/${name}/#projects`, title: { en: "Projects", ru: "Проекты" } }
  ]

  return (
    <div className="wrapper">
      <ScrollToHashElement />
      <Navbar list={list} />
      <main>
        <div className="main-wrapper">
          <Project />
          <Projects title={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
