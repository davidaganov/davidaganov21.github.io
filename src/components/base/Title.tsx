import { TitleProps } from "../../interfaces"

export default function Title({ classes, link, number, title, direction }: TitleProps) {
  return (
    <h2 className={`${classes} section-title${direction ? ` section-title--${direction}` : ""}`}>
      <a href={link}>
        <span>0{number}.</span> {title}
      </a>
    </h2>
  )
}
