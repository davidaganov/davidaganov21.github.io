import data from "../../data"

export default function Navbar() {
  const renderMenu = () => {
    const items = data.menu.map(({ id, number, link, title }) => {
      return (
        <li
          className="navbar__item"
          key={id}
        >
          <span>0{number}.</span>
          <a
            href={link}
            className="navbar__link inline-link inline-link--white"
          >
            {title}
          </a>
        </li>
      )
    })

    return <ul className="navbar__menu">{items}</ul>
  }

  const menu = renderMenu()

  return <nav className="navbar">{menu}</nav>
}
