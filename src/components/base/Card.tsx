import { CardProps } from "../../interfaces"

export default function Card({ name, description, html_url, homepage, topics }: CardProps) {
  const renderTags = (tags: string[]) => {
    const items = tags.map((tag, i) => {
      return <li key={i}>{tag}</li>
    })

    return <ul className="project__tags">{items}</ul>
  }

  const renderDemo = () => {
    if (homepage) {
      return (
        <a
          href={homepage}
          className="project__link project__link--live inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Live demo
        </a>
      )
    }
  }

  const tags = renderTags(topics)
  const demo = renderDemo()

  return (
    <li className="work__project project">
      <h3 className="project__title">{name.replace(/[.\-/\\\s]/g, " ")}</h3>
      <p className="project__description">{description}</p>
      <div className="project__bottom">
        <a
          href={html_url}
          className="project__link inline-link"
          target="_blank"
          rel="noreferrer"
        >
          Go to repository
        </a>
        {demo}
        {tags}
      </div>
    </li>
  )
}
