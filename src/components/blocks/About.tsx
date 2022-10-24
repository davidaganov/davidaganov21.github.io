import Title from "../base/Title"
import data from "../../data"

export default function About() {
  const renderItems = () => {
    const items = data.about.map((item, i) => {
      return (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      )
    })

    return <>{items}</>
  }

  const items = renderItems()

  return (
    <section
      className="about"
      id="about"
    >
      <div className="about__inner inner">
        <Title
          classes="about__title"
          number={1}
          link="#about"
          title="About Me"
        />

        <div className="about__content">
          <div className="about__left">
            <img
              className="about__picture"
              src={require("../../assets/images/avatar.png")}
              alt="My avatar"
              width="350"
              height="350"
            />
            {items}
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
