export default function About() {
  return (
    <section
      className="about section-ltr"
      id="about"
    >
      <div className="about__inner inner">
        <h2 className="about__title section-title">
          <a href="#about">
            <span>01.</span> About Me
          </a>
        </h2>

        <div className="about__content">
          <div className="about__left">
            <img
              className="about__picture"
              src={require("../../assets/images/avatar.png")}
              alt=""
            />
            <p>
              I started getting interested in web development back in 2016, then I watched a lot of
              YouTube videos about development, found free courses on the Internet and tried to
              create my own sites.
            </p>
            <p>
              Years later and after completing my studies, I was lucky enough to connect my life
              with my hobby and get a job as a <strong>junior frontend developer</strong> in a
              company developing mobile games and individual projects.
            </p>
            <p>
              During the year and a half spent in this company, I learned a lot. My main activity
              was the development of products on the <strong>Nuxt.js</strong> and creating multiple
              landing pages.
            </p>
            <p>
              The company also gave me the opportunity to take courses on <strong>React</strong> and{" "}
              <strong>React Native</strong> development.
            </p>
          </div>
          <div className="about__right">
            <img
              className="about__picture"
              src={require("../../assets/images/avatar.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
