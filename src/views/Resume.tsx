import { PDFViewer } from "@react-pdf/renderer"
import { ScrollToHashElement, Navbar, Resume, Footer } from "../components"

export const ResumeView = () => {
  const list = [
    { link: "/#about", title: { en: "About", ru: "Обо мне" } },
    { link: "/#skills", title: { en: "Skills", ru: "Скиллы" } },
    { link: "/#projects", title: { en: "Projects", ru: "Проекты" } }
  ]

  return (
    <div className="wrapper">
      <ScrollToHashElement />
      <Navbar list={list} />
      <main>
        <div className="main-wrapper">
          <PDFViewer style={{ width: "100%", height: "170vh" }}>
            <Resume />
          </PDFViewer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
