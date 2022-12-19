import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.sass"
import cn from "classnames"
import { navLink } from "../../interfaces"
import { Link } from "react-router-dom"

export const Navbar = ({ single, list, ...props }: NavbarProps): JSX.Element => {
  const buildLink = ({ tag, title, link }: navLink) => {
    switch (tag) {
      case "a":
        return (
          <a
            href={link}
            className="inline-link inline-link--white"
          >
            {title}
          </a>
        )
      case "route":
        return (
          <Link
            to={link}
            className="inline-link inline-link--white"
          >
            {title}
          </Link>
        )
    }
  }

  const buildMenu = () => {
    const items = list.map((item, i) => {
      return (
        <li
          className={styles.item}
          key={i}
        >
          <span>0{i + 1}.</span>
          {buildLink(item)}
        </li>
      )
    })

    return (
      <nav
        className={styles.navbar}
        role="navigation"
        {...props}
      >
        <ul className={styles.menu}>{items}</ul>
      </nav>
    )
  }

  const menu = buildMenu()

  if (single) {
    return (
      <header
        className={styles.header}
        {...props}
      >
        <div className={cn(styles.inner, "inner")}>{menu}</div>
      </header>
    )
  } else {
    return <>{menu}</>
  }
}
