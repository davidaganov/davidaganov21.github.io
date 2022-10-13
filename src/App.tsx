import Header from "./components/general/Header"
import About from "./components/blocks/About"
import Skills from "./components/blocks/Skills"
import Work from "./components/blocks/Work"
import Footer from "./components/general/Footer"

export default function App() {
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
