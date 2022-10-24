import Collapsible from "react-collapsible"
import { SkillProps } from "../../interfaces"
import Title from "../base/Title"
import data from "../../data"

export default function Skills() {
  const renderSkills = (arr: SkillProps[]) => {
    const categories = arr.map(({ id, title, list }) => {
      const items = list.map(({ id, title, tag }) => {
        const tags = tag.map((skill) => {
          return (
            <li
              className="skills__item"
              key={skill}
            >
              {skill}
            </li>
          )
        })
        return (
          <li
            className="skills__content"
            key={id}
          >
            <h3 className="skills__content-title">{title}</h3>
            <ul className="skills__list-nested">{tags}</ul>
          </li>
        )
      })
      return (
        <Collapsible
          trigger={title}
          classParentString="skills-item"
          transitionTime={350}
          easing={"ease-in-out"}
          key={id}
          tabIndex={0}
        >
          <ul className="skills__list">{items}</ul>
        </Collapsible>
      )
    })

    return <div className="skills__accordion">{categories}</div>
  }

  return (
    <section
      className="skills section-rtl"
      id="skills"
    >
      <div className="skills__inner inner">
        <Title
          classes="skills__title"
          number={2}
          link="#skills"
          title="My Skills"
          direction="rtl"
        />

        {renderSkills(data.skills)}
      </div>
    </section>
  )
}
