import { ScrollToHashElement, Navbar, Project, Footer } from "../components"

export const ProjectView = () => {
  const path = /\/([^/]+)$/.exec(window.location.hash)
  const list = [
    { link: "/", title: { en: "Home", ru: "Главная" } },
    { link: `/${path?.[1]}/#project`, title: { en: "Project", ru: "Проект" } }
  ]

  return (
    <div className="wrapper">
      <ScrollToHashElement />
      <Navbar list={list} />
      <main>
        <div className="main-wrapper">
          <Project />
        </div>
      </main>
      <Footer />
    </div>
  )
}
