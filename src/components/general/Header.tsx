import Button from "../base/Button"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner inner">
        <Navbar />

        <div className="header__content">
          <svg
            className="header__blobs"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 634 554"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M289.4 2.95c72.45 8.71 123.66 63.2 179.4 110.3 64.2 54.28 152.38 96.05 163.35 179.4 11.67 88.63-36.81 181.03-108.94 233.82-65.56 47.98-152.6 18.72-233.82 17.05-78.28-1.6-165.23 24.83-224.4-26.47C3.85 464.02.8 373.6.08 292.65c-.73-81.9 3.01-170.45 60.9-228.42C118.88 6.24 208.03-6.83 289.39 2.95Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="header__subtitle">Hello, my name is</p>
          <h1 className="header__title">
            <strong>David Aganov</strong>I build things for the web
          </h1>
          <p className="header__description">
            I’m frontend developer. I like to learn new technologies and try new things in every
            possible way. At the moment I’m working in mobile games studio{" "}
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
            link="#footer"
            classes="header__btn"
            value="Contact me"
          />
        </div>
      </div>
    </header>
  )
}
