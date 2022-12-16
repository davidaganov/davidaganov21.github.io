import { Header, Footer } from "../layout"
import { About, Skills, Work } from "../components"

export default function Main() {
  return (
    <div className="wrapper">
      <Header />
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
