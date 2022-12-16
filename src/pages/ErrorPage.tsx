import { ErrorMessage } from "../components"
import { navLink } from "../interfaces"
import { Footer, Navbar } from "../layout"

export default function ErrorPage() {
  const list: navLink[] = [
    { tag: "route", link: "/", title: "Home" },
    { tag: "route", link: "/about", title: "About" }
  ]

  return (
    <div className="wrapper">
      <Navbar
        single={true}
        list={list}
      />
      <main>
        <ErrorMessage />
      </main>
      <Footer />
    </div>
  )
}
