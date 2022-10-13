import { Repos } from "../../interfaces"

export default function Card({ name, description, html_url, topics }: Repos) {
  const renderTags = (tags: string[]) => {
    const items = tags.map((tag, i) => {
      return <li key={i}>{tag}</li>
    })

    return <ul className="project__tags">{items}</ul>
  }

  const tags = renderTags(topics)

  return (
    <li className="work__project project">
      <h4 className="project__title">{name.replace(/[.\-/\\\s]/g, " ")}</h4>
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
        {tags}
      </div>
    </li>
  )
}
