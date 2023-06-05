import {
  ScrollToHashElement,
  Navbar,
  About,
  Skills,
  Repos,
  Projects,
  Header,
  Footer
} from "../components"

export const HomeView = () => {
  const list = [
    { link: "/#about", title: { en: "About", ru: "Обо мне" } },
    { link: "/#skills", title: { en: "Skills", ru: "Скиллы" } },
    { link: "/#projects", title: { en: "Projects", ru: "Проекты" } }
  ]

  return (
    <div className="wrapper">
      <ScrollToHashElement />
      <Navbar list={list} />
      <Header />
      <main>
        <div className="main-wrapper">
          <About />
          <Skills />
          <Projects title={true} />
          <Repos />
        </div>
      </main>
      <Footer />
    </div>
  )
}
