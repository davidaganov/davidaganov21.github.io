import Button from "../base/Button"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner inner">
        <Navbar />

        <div className="header__content">
          <p className="header__subtitle">Hello, my name is</p>
          <h1 className="header__title">
            <strong>David Aganov</strong>I build things for the web
          </h1>
          <p className="header__description">
            I’m middle frontend developer. I like to educate new technologies and try new things in
            every possible way. At the moment I’m working in mobile games studio{" "}
            <a
              className="header__link inline-link"
              href="https://www.linkedin.com/company/sabgames/mycompany/"
            >
              <svg
                className="header__link-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.73a1.76 1.76 0 0 1 0-3.53c.97 0 1.75.8 1.75 1.77S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76a3.8 3.8 0 0 1 7 2.48V19z" />
              </svg>
              SAB Games
            </a>
          </p>
          <Button
            classes="header__btn"
            value="Button"
          />
        </div>
      </div>
    </header>
  )
}
