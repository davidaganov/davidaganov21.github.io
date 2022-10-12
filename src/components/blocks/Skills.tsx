import Collapsible from "react-collapsible"
import { v4 as uuidv4 } from "uuid"

export default function Skills() {
  const data = [
    {
      id: uuidv4(),
      title: "HTML",
      list: [
        { id: uuidv4(), title: "Template Engine", tag: ["PUG"] },
        { id: uuidv4(), title: "Native", tag: ["HTML5"] }
      ]
    },
    {
      id: uuidv4(),
      title: "CSS",
      list: [
        { id: uuidv4(), title: "Preprocessors", tag: ["SASS/SCSS", "Less"] },
        { id: uuidv4(), title: "Frameworks", tag: ["Bootstrap", "Tailwind"] },
        { id: uuidv4(), title: "Native", tag: ["CSS3"] }
      ]
    },
    {
      id: uuidv4(),
      title: "JavaScript",
      list: [
        { id: uuidv4(), title: "Frameworks", tag: ["Nuxt.js", "Vue.js"] },
        { id: uuidv4(), title: "Library", tag: ["React", "React Native", "JQuery"] },
        { id: uuidv4(), title: "Native", tag: ["JavaScript / TypeScript"] }
      ]
    },
    {
      id: uuidv4(),
      title: "Other",
      list: [
        { id: uuidv4(), title: "CMS", tag: ["Wordpress"] },
        { id: uuidv4(), title: "Design", tag: ["Figma", "Adobe Photoshop"] },
        { id: uuidv4(), title: "3D", tag: ["Blender", "Maya"] },
        { id: uuidv4(), title: "OS", tag: ["Windows", "Mac OS"] }
      ]
    }
  ]

  const renderSkills = (
    arr: { id: string; title: string; list: { id: string; title: string; tag: string[] }[] }[]
  ) => {
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
          transitionTime={200}
          key={id}
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
        <h2 className="skills__title section-title">
          <a href="#skills">
            <span>02.</span> My Skills
          </a>
        </h2>

        {renderSkills(data)}
      </div>
    </section>
  )
}
