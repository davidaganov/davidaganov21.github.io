import { Navbar, Footer } from "../layout"
import { Links } from "../components"
import { navLink } from "../interfaces"

export default function About() {
  const list: navLink[] = [{ tag: "route", link: "/", title: "Home" }]

  return (
    <div className="wrapper">
      <Navbar
        single={true}
        list={list}
      />
      <main>
        <Links />
      </main>
      <Footer />
    </div>
  )
}
