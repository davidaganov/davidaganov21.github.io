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
              I started interesting web-developing long time ago. It was 2016. At that moment I was watching YT-videos about developing, searching free courses in the internet and was trying create my own sites.
            </p>
            <p>
              In some years I finally completed my studies. I was lucky and found a way for connecting my hobby with my life and got a job as junior frontend developer in the mobile games developing studio.
            </p>
            <p>
              In year and a half which I spend in this company I learned a lot. My main activity was the development of products in <strong>Nuxt.js</strong> and creating multiple landing pages.
            </p>
            <p>
              Also my company gave me a chance to educate on <strong>React</strong> and <strong>React Native</strong> development courses.
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
