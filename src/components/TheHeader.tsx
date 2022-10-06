export default function TheHeader() {
  return (
    <header className="header">
      <div className="header__inner inner">
        <div className="header__content">
          <p className="header__subtitle">Hello, my name is</p>
          <h1 className="header__title">
            <strong>David Aganov</strong>I build things for the web
          </h1>
          <p className="header__description">
            I’m 22 years old and I’m middle frontend developer. I like to educate new technologies
            and try new things in every possible way. At the moment I’m working in mobile games
            studio{" "}
            <a
              className="header__link inline-link"
              href="https://www.linkedin.com/company/sabgames/mycompany/"
            >
              SAB Games
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}
