import { PDFViewer } from "@react-pdf/renderer"
import { useGlobalContext } from "../hooks/useGlobalContext"
import { ScrollToHashElement, Navbar, Resume, Button, Footer } from "../components"

export const ResumeView = () => {
  const { photoStatus, changePhotoStatus } = useGlobalContext()

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
          <Button
            type="button"
            onClick={() => changePhotoStatus()}
          >
            {photoStatus ? "Hide photo" : "Show photo"}
          </Button>

          <PDFViewer style={{ marginTop: "2rem", width: "100%", height: "170vh" }}>
            <Resume photoStatus={photoStatus} />
          </PDFViewer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
