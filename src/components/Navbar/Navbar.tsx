import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.sass"
import cn from "classnames"

import { navLink } from "../../interfaces"
import { LanguageSwitcher } from ".."

import { ReactComponent as BurgerIcon } from "./icons/burger.svg"
import { ReactComponent as CloseIcon } from "./icons/close.svg"

export const Navbar = ({ list, ...props }: NavbarProps) => {
  const [opened, setOpened] = useState<boolean>(false)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const { i18n } = useTranslation()

  useEffect(() => {
    opened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
  }, [opened])

  const openMenu = () => {
    closeRef.current && closeRef.current.focus()
    setOpened(!opened)
  }

  const closeMenu = () => {
    if (window.innerWidth < 1020) setOpened(false)
  }

  const buildLink = ({ title, link }: navLink) => {
    return (
      <Link
        to={link}
        className={cn(styles.link, "inline-link inline-link--white")}
        onClick={() => setOpened(false)}
      >
        {i18n.language === "en" ? title.en : title.ru}
      </Link>
    )
  }

  const buildMenu = () => {
    const items = list.map((item, i) => {
      if (i === list.length - 1) item.last = true

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
          onClick={() => openMenu()}
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
            ref={closeRef}
            onClick={() => setOpened(false)}
            onKeyDown={(e) => (e.key === "Tab" && e.shiftKey ? setOpened(false) : null)}
          >
            <CloseIcon />
          </button>
          <ul className={styles.menu}>{items}</ul>
          <LanguageSwitcher close={closeMenu} />
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

  return (
    <header
      className={styles.header}
      {...props}
    >
      <div className={cn(styles.inner, "inner")}>{menu}</div>
    </header>
  )
}
