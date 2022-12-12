import styles from "./Navbar.module.sass"
import data from "../../data"

export const Navbar = (): JSX.Element => {
  const renderMenu = () => {
    const items = data.menu.map(({ id, number, link, title }) => {
      return (
        <li
          className={styles.item}
          key={id}
        >
          <span>0{number}.</span>
          <a
            href={link}
            className="inline-link inline-link--white"
          >
            {title}
          </a>
        </li>
      )
    })

    return <ul className={styles.menu}>{items}</ul>
  }

  const menu = renderMenu()

  return (
    <nav
      className={styles.navbar}
      role="navigation"
    >
      {menu}
    </nav>
  )
}
