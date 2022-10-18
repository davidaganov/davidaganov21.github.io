import Social from "../base/Social"

export default function Footer() {
  return (
    <footer
      className="footer"
      id="footer"
    >
      <div className="footer__inner inner">
        <a
          href="https://github.com/davidaganov21/davidaganov21.github.io"
          className="footer__author inline-link inline-link--white"
        >
          Developed & Designed&nbsp;
          <br />
          by David Aganov
        </a>
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
