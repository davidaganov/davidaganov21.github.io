import { Btn } from "../../interfaces"

export default function Button({ value, classes, link }: Btn) {
  return (
    <a
      href={link}
      className={`btn ${classes}`}
    >
      {value}
    </a>
  )
}
