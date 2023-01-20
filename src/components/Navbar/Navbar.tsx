import { useEffect, useState } from "react"
import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.sass"
import cn from "classnames"

import { navLink } from "../../interfaces"
import { LanguageSwitcher } from ".."

import { ReactComponent as BurgerIcon } from "./icons/burger.svg"
import { ReactComponent as CloseIcon } from "./icons/close.svg"

export const Navbar = ({ single, list, ...props }: NavbarProps): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    opened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
  }, [opened])

  const buildLink = ({ title, link }: navLink) => {
    return (
      <a
        href={link}
        className={cn(styles.link, "inline-link inline-link--white")}
        onClick={() => setOpened(false)}
      >
        {title}
      </a>
    )
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
      <>
        <button
          className={styles.burger}
          type="button"
          onClick={() => setOpened(!opened)}
          tabIndex={opened ? -1 : 0}
          aria-label="Open navbar"
          aria-expanded={opened}
        >
          <BurgerIcon />
        </button>
        <nav
          className={cn(styles.navbar, {
            [styles.opened]: opened
          })}
          role="navigation"
          {...props}
        >
          <button
            className={styles.close}
            type="button"
            aria-label="Close navbar"
            onClick={() => setOpened(false)}
            tabIndex={opened ? 1 : -1}
          >
            <CloseIcon />
          </button>
          <ul className={styles.menu}>{items}</ul>
          <LanguageSwitcher />
        </nav>
        <button
          className={cn(styles.backdrop, {
            [styles.opened]: opened
          })}
          type="button"
          aria-hidden={true}
          tabIndex={-1}
          onClick={() => setOpened(false)}
        />
      </>
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
