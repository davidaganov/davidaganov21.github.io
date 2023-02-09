import { useEffect, useState, useRef } from "react"
import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.sass"
import cn from "classnames"

import { navLink } from "../../interfaces"
import { LanguageSwitcher } from ".."

import { ReactComponent as BurgerIcon } from "./icons/burger.svg"
import { ReactComponent as CloseIcon } from "./icons/close.svg"

export const Navbar = ({ list, ...props }: NavbarProps) => {
  const [opened, setOpened] = useState<boolean>(false)
  const [desktop, setDesktop] = useState<boolean>(false)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    opened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
  }, [opened])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const openMenu = () => {
    closeRef.current && closeRef.current.focus()
    setOpened(!opened)
  }

  const closeMenu = () => {
    if (window.innerWidth < 1020) setOpened(false)
  }

  const buildLink = ({ title, link }: navLink) => {
    return (
      <a
        href={link}
        className={cn(styles.link, "inline-link inline-link--white")}
        tabIndex={opened || desktop ? 0 : -1}
        onClick={() => setOpened(false)}
      >
        {title}
      </a>
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
            tabIndex={opened ? 0 : -1}
            ref={closeRef}
          >
            <CloseIcon />
          </button>
          <ul className={styles.menu}>{items}</ul>
          <LanguageSwitcher
            focus={opened || desktop ? true : false}
            close={closeMenu}
          />
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
