import Social from "../base/Social"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner inner">
        <p className="footer__author">Created by David Aganov</p>
        <Social classes="footer__social" />
        <a
          className="footer__email inline-link inline-link--white"
          href="mailto:davidaganov21@gmail.com"
        >
          davidaganov21@gmail.com
        </a>
      </div>
    </footer>
  )
}
